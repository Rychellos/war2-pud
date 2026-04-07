import { describe, it, expect } from "vitest";
import { Uint16PointReader } from "../src/PointReader";

describe("Uint16PointReader", () => {
    it("should correctly read and write x and y as little-endian uint16", () => {
        const buffer = new ArrayBuffer(4);
        const reader = new Uint16PointReader(buffer, 0);

        // Default should be 0
        expect(reader.x).toBe(0);
        expect(reader.y).toBe(0);

        // Set values
        reader.x = 0x1234;
        reader.y = 0x5678;

        expect(reader.x).toBe(0x1234);
        expect(reader.y).toBe(0x5678);

        // Verify underlying buffer uses little-endian
        const view = new DataView(buffer);
        expect(view.getUint16(0, true)).toBe(0x1234);
        expect(view.getUint16(2, true)).toBe(0x5678);
    });

    it("should correctly handle offset", () => {
        const buffer = new ArrayBuffer(6); // 2 bytes padding, 4 bytes point
        const reader = new Uint16PointReader(buffer, 2);

        reader.x = 100;
        reader.y = 200;

        expect(reader.x).toBe(100);
        expect(reader.y).toBe(200);

        const view = new DataView(buffer);
        expect(view.getUint16(2, true)).toBe(100);
        expect(view.getUint16(4, true)).toBe(200);
    });
});
