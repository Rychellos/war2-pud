import { describe, it, expect } from "vitest";
import { SectionEraX } from "../src/sections/SectionEraX";
import { getSection } from "./helpers";
import { TERRAIN_TYPES } from "../src/enums";

describe("SectionEraX", () => {
    it("should instantiate with correct code", async () => {
        const section = await getSection(
            "test/sections/section_erax.bin",
            SectionEraX.fromBytes,
        );

        expect(section.name).toBe("ERAX");
    });

    it("should get and set terrainId correctly", async () => {
        const section = await getSection(
            "test/sections/section_erax.bin",
            SectionEraX.fromBytes,
        );

        // Test setting to wasteland
        section.terrainId = TERRAIN_TYPES.WASTELAND;
        expect(section.terrainId).toBe(TERRAIN_TYPES.WASTELAND);

        // Test setting to winter
        section.terrainId = TERRAIN_TYPES.WINTER;
        expect(section.terrainId).toBe(TERRAIN_TYPES.WINTER);
    });

    it("should construct from bytes", async () => {
        const buffer = new ArrayBuffer(10);
        const view = new DataView(buffer);
        // "ERAX" is 0x45 0x52 0x41 0x58
        view.setUint8(0, 0x45);
        view.setUint8(1, 0x52);
        view.setUint8(2, 0x41);
        view.setUint8(3, 0x58);
        // length = 2
        view.setUint32(4, 2, true);
        // terrain = 0x03 (swamp)
        view.setUint16(8, 0x03, true);

        const section = SectionEraX.fromBytes(
            new Uint8Array(buffer),
        )._unsafeUnwrap();
        expect(section.name).toBe("ERAX");
        expect(section.terrainId).toBe(TERRAIN_TYPES.SWAMP);
    });
});
