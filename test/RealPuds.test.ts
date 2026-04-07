import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import { Pud } from "../src/index";
import { TERRAIN_TYPES } from "../src/enums";

describe("Real PUD Files Integration", () => {
    it("should load human1.pud correctly", async () => {
        const buffer = await readFile("test/puds/human1.pud");
        const pud = Pud.fromPudBytes(
            buffer.buffer as ArrayBuffer,
        )._unsafeUnwrap();

        expect((pud.mapType || "").trim()).toBe("WAR2 MAP");
        expect(pud.version).toBe(0x11);
        expect(pud.map.width).toBe(32);
        expect(pud.map.height).toBe(32);
        expect(pud.description).toBeDefined();

        // Check unit data
        expect(pud.units.length).toBeGreaterThan(0);

        // Check map data
        expect(pud.map.tiles.length).toBe(32 * 32);
    });

    it("should load orc26-ex.pud correctly", async () => {
        const buffer = await readFile("test/puds/orc26-ex.pud");
        const pud = Pud.fromPudBytes(
            buffer.buffer as ArrayBuffer,
        )._unsafeUnwrap();

        expect((pud.mapType || "").trim()).toBe("WAR2 MAP");
        expect(pud.version).toBe(0x11);
        expect(pud.map.width).toBe(128);
        expect(pud.map.height).toBe(128);

        // Check era
        expect(pud.map.era).toBeOneOf(Object.values(TERRAIN_TYPES));

        // Check unit statistical data (UDTA) should be padded if necessary
        expect(pud.unitData?.dataLength).toBe(5950);
    });

    it("should handle old version puds (orc1.pud)", async () => {
        const buffer = await readFile("test/puds/orc1.pud");
        const pud = Pud.fromPudBytes(
            buffer.buffer as ArrayBuffer,
        )._unsafeUnwrap();

        expect((pud.mapType || "").trim()).toBe("WAR2 MAP");
        expect(pud.map.width).toBe(32);
        expect(pud.map.height).toBe(32);
    });

    it("should load human2.pud correctly", async () => {
        const buffer = await readFile("test/puds/human2.pud");
        const pud = Pud.fromPudBytes(
            buffer.buffer as ArrayBuffer,
        )._unsafeUnwrap();

        expect((pud.mapType || "").trim()).toBe("WAR2 MAP");
        expect(pud.map.width).toBe(64);
        expect(pud.map.height).toBe(64);
    });
});
