import { describe, expect, it } from "vitest";
import { SectionMtxm } from "../src/sections/SectionMtxm";

describe("SectionMtxm", () => {
    it("should read and write tiles", () => {
        const data = new ArrayBuffer(8 + 8); // Header + 4 words
        const section = new SectionMtxm(data);
        const tiles = section.tiles;
        
        expect(tiles.length).toBe(4);
        
        tiles[0] = 0x1234;
        tiles[3] = 0xABCD;
        
        expect(section.tiles[0]).toBe(0x1234);
        expect(section.tiles[3]).toBe(0xABCD);
        
        const view = new DataView(section.getBytes());
        expect(view.getUint16(8, true)).toBe(0x1234);
    });
});
