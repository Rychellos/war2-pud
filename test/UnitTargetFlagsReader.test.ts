import { describe, it, expect } from "vitest";
import { UnitTargetFlagsReader } from "../src/UnitTargetFlagsReader";

describe("UnitTargetFlagsReader", () => {
    it("should read and write target flags mapping to correct bits", () => {
        const buffer = new ArrayBuffer(1);
        const reader = new UnitTargetFlagsReader(buffer, 0);

        expect(reader.canTargetLand).toBe(false);
        expect(reader.canTargetSea).toBe(false);
        expect(reader.canTargetAir).toBe(false);

        reader.canTargetLand = true;
        expect(reader.canTargetLand).toBe(true);

        reader.canTargetSea = true;
        expect(reader.canTargetSea).toBe(true);

        reader.canTargetAir = true;
        expect(reader.canTargetAir).toBe(true);

        // Verify that underlying buffer has correct bits set
        const view = new DataView(buffer);
        expect(view.getUint8(0)).toBe(0b00000111); // bits 0, 1, 2 set
    });

    it("should allow disabling target flags", () => {
        const buffer = new ArrayBuffer(1);
        const view = new DataView(buffer);
        view.setUint8(0, 0b00000111);

        const reader = new UnitTargetFlagsReader(buffer, 0);
        expect(reader.canTargetLand).toBe(true);
        expect(reader.canTargetSea).toBe(true);
        expect(reader.canTargetAir).toBe(true);

        reader.canTargetSea = false;
        expect(reader.canTargetLand).toBe(true);
        expect(reader.canTargetSea).toBe(false);
        expect(reader.canTargetAir).toBe(true);

        expect(view.getUint8(0)).toBe(0b00000101); // bit 1 unset
    });
});
