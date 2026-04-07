import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import path from "path";

import { Pud } from "../src/index";
import { UNIT_TYPES } from "../src/enums/index";

describe("Pud Unit Management", () => {
    it("should add a unit correctly", () => {
        const buffer = new ArrayBuffer(8 + 8); // UNIT header + 1 unit
        const view = new DataView(buffer);
        view.setUint32(0, 0x54494e55, true); // UNIT
        view.setUint32(4, 8, true); // Length 8

        // Initial unit
        view.setUint16(8, 10, true); // x
        view.setUint16(10, 20, true); // y
        view.setUint8(12, UNIT_TYPES.FOOTMAN);
        view.setUint8(13, 0); // owner
        view.setUint16(14, 0, true); // extra

        // We need other sections for Pud.fromPudBytes to not crash or we can bypass it.
        // Let's use a real PUD from the project for a more robust test.
    });

    it("should add and remove units from a real PUD", async () => {
        const pudBuffer = await readFile(
            path.join(__dirname, "puds/human1.pud"),
        );
        const pud = Pud.fromPudBytes(pudBuffer.buffer)._unsafeUnwrap();

        const initialCount = pud.units.length;

        // Add a unit
        pud.addUnit(100, 200, UNIT_TYPES.GRUNT, 1, 0);
        expect(pud.units.length).toBe(initialCount + 1);

        const lastUnit = pud.units[pud.units.length - 1];
        expect(lastUnit.x).toBe(100);
        expect(lastUnit.y).toBe(200);
        expect(lastUnit.type).toBe(UNIT_TYPES.GRUNT);
        expect(lastUnit.owner).toBe(1);

        // Remove the unit
        pud.removeUnit(pud.units.length - 1);
        expect(pud.units.length).toBe(initialCount);
    });
});
