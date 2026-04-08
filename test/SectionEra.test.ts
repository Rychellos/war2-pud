import { describe, it, expect } from "vitest";
import { SectionEra } from "../src/sections/SectionEra";
import { getSection } from "./helpers";
import { TERRAIN_TYPES } from "../src/enums";

describe("SectionEra", () => {
    it("should instantiate with correct code", () => {
        const section = getSection(
            "test/sections/section_era .bin",
            SectionEra.fromBytes,
        );

        expect(section.name).toBe("ERA ");
    });

    it("should get and set terrainId correctly", () => {
        const section = getSection(
            "test/sections/section_era .bin",
            SectionEra.fromBytes,
        );

        // Test setting to forest
        section.terrainId = TERRAIN_TYPES.FOREST;
        expect(section.terrainId).toBe(TERRAIN_TYPES.FOREST);

        // Test setting to swamp
        section.terrainId = TERRAIN_TYPES.SWAMP;
        expect(section.terrainId).toBe(TERRAIN_TYPES.SWAMP);
    });

    it("should construct from bytes", () => {
        const buffer = new ArrayBuffer(10);
        const view = new DataView(buffer);
        // "ERA " is 0x45 0x52 0x41 0x20
        view.setUint8(0, 0x45);
        view.setUint8(1, 0x52);
        view.setUint8(2, 0x41);
        view.setUint8(3, 0x20);
        // length = 2
        view.setUint32(4, 2, true);
        // terrain = 0x01 (winter)
        view.setUint16(8, 0x01, true);

        const section = SectionEra.fromBytes(
            new Uint8Array(buffer),
        )._unsafeUnwrap();
        expect(section.name).toBe("ERA ");
        expect(section.terrainId).toBe(TERRAIN_TYPES.WINTER);
    });
});
