import { describe, it, expect } from "vitest";
import { BitFlagReader } from "../src/BitflagReader";

class TestBitFlagReader extends BitFlagReader {
    public constructor(data: ArrayBuffer, length: number, offset = 0) {
        super(data, length, offset);
    }

    public get(index: number) {
        return this.getFlag(index);
    }

    public set(index: number, value: boolean) {
        this.setFlag(index, value);
    }
}

describe("BitFlagReader", () => {
    it("should correctly set and get bit flags within range", () => {
        const buffer = new ArrayBuffer(2); // 16 bits
        const reader = new TestBitFlagReader(buffer, 2);

        // All should be false initially
        expect(reader.get(0)).toBe(false);
        expect(reader.get(7)).toBe(false);
        expect(reader.get(15)).toBe(false);

        // Set few flags
        reader.set(0, true);
        reader.set(3, true);
        reader.set(8, true);
        reader.set(15, true);

        expect(reader.get(0)).toBe(true);
        expect(reader.get(1)).toBe(false);
        expect(reader.get(3)).toBe(true);
        expect(reader.get(8)).toBe(true);
        expect(reader.get(15)).toBe(true);
    });

    it("should throw an error when accessing outside of array boundary", () => {
        const buffer = new ArrayBuffer(1);
        const reader = new TestBitFlagReader(buffer, 1);

        expect(() => reader.get(8)).toThrowError("Tried to read bit flag outside of the data array");
        expect(() => reader.set(8, true)).toThrowError("Tried to write bit flag outside of the data array");
    });

    it("should handle offsets correctly", () => {
        const buffer = new ArrayBuffer(3);
        const reader = new TestBitFlagReader(buffer, 1, 1); // Only 1 byte length, starting at offset 1

        reader.set(0, true);
        const view = new DataView(buffer);
        expect(view.getUint8(1)).toBe(1); // the offset 1 was correctly updated

        expect(reader.get(0)).toBe(true);
        expect(() => reader.get(8)).toThrowError();
    });
});
