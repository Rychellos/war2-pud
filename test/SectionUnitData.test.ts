import { describe, it, expect } from "vitest";
import { SectionUnitData } from "../src/sections/SectionUnitData";
import { getSection } from "./helpers";
import { DEFAULT_UNIT_DATA } from "../src/constants/DefaultUnitData";

describe("SectionUnitData", () => {
    it("should instantiate with correct name", async () => {
        const section = await getSection(
            "test/sections/section_udta.bin",
            SectionUnitData.fromBytes,
        );

        expect(section.name).toBe("UDTA");
    });

    it("should get and set useDefault", async () => {
        const section = await getSection(
            "test/sections/section_udta.bin",
            SectionUnitData.fromBytes,
        );

        section.useDefault = true;
        expect(section.useDefault).toBe(true);

        section.useDefault = false;
        expect(section.useDefault).toBe(false);
    });

    it("should access typed arrays correctly", async () => {
        const section = await getSection(
            "test/sections/section_udta.bin",
            SectionUnitData.fromBytes,
        );

        // Test sightRanges
        expect(section.sightRanges).toBeInstanceOf(Uint32Array);
        expect(section.sightRanges.length).toBe(110);
        expect(section.sightRanges[0]).toBe(4);

        // Test buildsiteGRPIdsS
        expect(section.buildsiteGRPIds).toBeInstanceOf(Uint16Array);
        expect(section.buildsiteGRPIds.length).toBe(110);
        section.buildsiteGRPIds[0] = 42;
        expect(section.buildsiteGRPIds[0]).toBe(42);

        expect(section.grpsIdsToLoadAlways).toBeInstanceOf(Uint16Array);
        expect(section.grpsIdsToLoadAlways.length).toBe(127); // NUM_GRP_FILES
        section.grpsIdsToLoadAlways[10] = 999;
        expect(section.grpsIdsToLoadAlways[10]).toBe(999);

        expect(section.sightRanges).toBeInstanceOf(Uint32Array);
        expect(section.sightRanges.length).toBe(110);
        // Modification of element 50 (which is at offset 50*4)
        const unit = section.unitsDefinitions[50];
        unit.sightRange = 100000;
        expect(unit.sightRange).toBe(100000);

        expect(section.magic).toBeInstanceOf(Uint8Array);
        section.magic[1] = 255;
        expect(section.magic[1]).toBe(255);
    });

    it("should access object arrays correctly", async () => {
        const section = await getSection(
            "test/sections/section_udta.bin",
            SectionUnitData.fromBytes,
        );

        expect(section.unitTileSizes.length).toBe(110);
        section.unitTileSizes[0].x = 10;
        section.unitTileSizes[0].y = 15;
        expect(section.unitTileSizes[0].x).toBe(10);
        expect(section.unitTileSizes[0].y).toBe(15);

        expect(section.unitSelectBoxSizes.length).toBe(110);
        section.unitSelectBoxSizes[1].x = 20;
        expect(section.unitSelectBoxSizes[1].x).toBe(20);

        expect(section.canTargetFlags.length).toBe(110);
        section.canTargetFlags[0].canTargetAir = true;
        expect(section.canTargetFlags[0].canTargetAir).toBe(true);
        section.canTargetFlags[0].canTargetAir = false;
        expect(section.canTargetFlags[0].canTargetAir).toBe(false);

        expect(section.unitFlags.length).toBe(110);
        expect(section.unitFlags[0]).toBeDefined();
    });

    describe("PudUnitDataView", () => {
        it("should correctly proxy primitive properties", async () => {
            const section = await getSection(
                "test/sections/section_udta.bin",
                SectionUnitData.fromBytes,
            );
            const unit = section.unitsDefinitions[5];

            unit.sightRange = 123456;
            expect(unit.sightRange).toBe(123456);
            expect(section.view.getUint32(1246 + 5 * 4, true)).toBe(123456); // Direct check of buffer at calculated offset

            unit.hitPoints = 1000;
            expect(unit.hitPoints).toBe(1000);
            expect(section.hitPoints[5]).toBe(1000);

            unit.magic = true;
            expect(unit.magic).toBe(true);
            expect(section.magic[5]).toBe(1);

            unit.goldCost = 50;
            expect(unit.goldCost).toBe(50);
            expect(section.goldCosts[5]).toBe(50);

            unit.armor = 10;
            expect(unit.armor).toBe(10);
            expect(section.armorValues[5]).toBe(10);

            unit.selectable = true;
            expect(unit.selectable).toBe(true);
            expect(section.multiSelectables[5]).toBe(1);

            unit.pointValue = 75;
            expect(unit.pointValue).toBe(75);
            expect(section.pointValues[5]).toBe(75);
        });

        it("should correctly proxy complex properties", async () => {
            const section = await getSection(
                "test/sections/section_udta.bin",
                SectionUnitData.fromBytes,
            );

            const unit = section.unitsDefinitions[10];

            unit.unitTileSize.x = 2;
            unit.unitTileSize.y = 3;
            expect(unit.unitTileSize.x).toBe(2);
            expect(section.unitTileSizes[10].x).toBe(2);

            unit.canTarget.canTargetAir = true;
            expect(unit.canTarget.canTargetAir).toBe(true);
            expect(section.canTargetFlags[10].canTargetAir).toBe(true);

            expect(unit.unitFlags).toBe(section.unitFlags[10]);
        });

        it("should handle secondMouseAction bounds", async () => {
            const section = await getSection(
                "test/sections/section_udta.bin",
                SectionUnitData.fromBytes,
            );
            const unitDef = section.unitsDefinitions[5];
            const buildingDef = section.unitsDefinitions[100]; // Building ID > 58

            unitDef.secondMouseAction = 3;
            expect(unitDef.secondMouseAction).toBe(3);
            expect(section.secondMouseActions[5]).toBe(3);

            expect(buildingDef.secondMouseAction).toBe(-1);
            buildingDef.secondMouseAction = 5; // Should be ignored
            expect(buildingDef.secondMouseAction).toBe(-1);
        });
    });

    it("should handle truncated UDTA section by padding with zeros", async () => {
        // Create a short UDTA section (header + 100 bytes of data)
        const headerLength = 8;
        const shortDataLength = 100;
        const buffer = new ArrayBuffer(headerLength + shortDataLength);
        const view = new DataView(buffer);

        // Header "UDTA"
        view.setUint8(0, "U".charCodeAt(0));
        view.setUint8(1, "D".charCodeAt(0));
        view.setUint8(2, "T".charCodeAt(0));
        view.setUint8(3, "A".charCodeAt(0));
        view.setUint32(4, shortDataLength, true);

        const bytes = new Uint8Array(buffer);
        const result = SectionUnitData.fromBytes(bytes);

        expect(result.isOk()).toBe(true);
        const section = result._unsafeUnwrap();

        // Length should be padded to 5950
        expect(section.dataLength).toBe(5950);

        // Accessing data at the beginning should work
        expect(section.useDefault).toBe(false);

        // Accessing data far beyond 100 bytes (e.g., grpsIdsToLoadSwamp) should return zeros and not crash
        expect(section.grpsIdsToLoadSwamp[0]).toBe(
            DEFAULT_UNIT_DATA.swampGRPIds[0],
        );

        // Setting values in the padded area should work and persist
        section.grpsIdsToLoadSwamp[0] = 0x1234;
        expect(section.grpsIdsToLoadSwamp[0]).toBe(0x1234);

        // Verify buffer is indeed larger
        expect(section.getBytes().byteLength).toBe(8 + 5950);
    });
});
