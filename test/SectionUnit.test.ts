import { describe, it, expect } from "vitest";
import { SectionUnit } from "../src/sections/SectionUnit";
import { PudUnitEntry } from "../src/views/PudUnitEntry";
import { UNIT_TYPES } from "../src/enums";
import { getSection } from "./helpers";

describe("SectionUnit", () => {
    it("should instantiate with correct name", () => {
        const section = getSection(
            "test/sections/section_unit.bin",
            SectionUnit.fromBytes,
        );

        expect(section.name).toBe("UNIT");
    });

    it("should read units correctly", () => {
        const section = getSection(
            "test/sections/section_unit.bin",
            SectionUnit.fromBytes,
        );

        const units = section.units;
        expect(units.length).toBeGreaterThan(0);

        const firstUnit = units[0];
        expect(firstUnit).toBeInstanceOf(PudUnitEntry);
        expect(typeof firstUnit.x).toBe("number");
        expect(typeof firstUnit.y).toBe("number");
    });

    it("should add a unit correctly", () => {
        const section = new SectionUnit(0);
        expect(section.units.length).toBe(0);

        const unit = section.addUnit(10, 20, UNIT_TYPES.FOOTMAN, 0, 0);
        expect(section.units.length).toBe(1);
        expect(unit.x).toBe(10);
        expect(unit.y).toBe(20);
        expect(unit.type).toBe(UNIT_TYPES.FOOTMAN);
        expect(unit.owner).toBe(0);

        // Initial capacity might be larger than 1 (addElement doubles 0 to 1, but constructor might do different)
        // super(PudUnitEntry, 0, ...) -> maxElement = 0. addElement() -> maxElement = 1.
        expect(section.dataLength).toBe(1 * PudUnitEntry.LENGTH);
    });

    it("should remove a unit correctly", () => {
        const section = new SectionUnit(0);
        const u1 = section.addUnit(1, 1, UNIT_TYPES.PEASANT, 0, 0);
        const u2 = section.addUnit(2, 2, UNIT_TYPES.PEASANT, 1, 0);

        expect(section.units.length).toBe(2);

        section.removeUnit(u1);
        expect(section.units.length).toBe(1);
        expect(section.units[0]).toBe(u2);
    });

    it("should grow and shrink buffer", () => {
        const section = new SectionUnit(0);

        // Add 3 units to cause growth (0 -> 1 -> 2 -> 4)
        section.addUnit(0, 0, 0, 0, 0);
        section.addUnit(1, 1, 1, 1, 1);
        section.addUnit(2, 2, 2, 2, 2);

        expect(section.dataLength).toBe(4 * PudUnitEntry.LENGTH);

        // Remove 2 units to cause shrink (clamping)
        const units = section.units;
        section.removeUnit(units[0]);
        section.removeUnit(units[1]);

        // clampData is called when freedIndexses.length >= maxElement / 2
        // maxElement is 4, freed is 2. 2 >= 2 is true.
        expect(section.units.length).toBe(1);
        expect(section.dataLength).toBe(1 * PudUnitEntry.LENGTH);
    });
});
