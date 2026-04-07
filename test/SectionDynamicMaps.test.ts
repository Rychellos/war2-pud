import { describe, expect, it } from "vitest";
import { SectionSqm } from "../src/sections/SectionSqm";
import { SectionOilMap } from "../src/sections/SectionOilMap";
import { SectionRegm } from "../src/sections/SectionRegm";

describe("Dynamic Map Sections", () => {
    it("SectionSqm should read and write movement data", () => {
        const data = new ArrayBuffer(8 + 4);
        const section = new SectionSqm(data);
        const map = section.movementMap;
        map[0] = 0x0001;
        expect(section.movementMap[0]).toBe(0x0001);
    });

    it("SectionOilMap should read and write oil data", () => {
        const data = new ArrayBuffer(8 + 2);
        const section = new SectionOilMap(data);
        const map = section.oilMap;
        map[0] = 7;
        expect(section.oilMap[0]).toBe(7);
    });

    it("SectionRegm should read and write action data", () => {
        const data = new ArrayBuffer(8 + 4);
        const section = new SectionRegm(data);
        const map = section.actionMap;
        map[0] = 0x4000;
        expect(section.actionMap[0]).toBe(0x4000);
    });
});
