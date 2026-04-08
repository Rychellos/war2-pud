import { describe, it, expect } from "vitest";
import { Pud } from "../src/index";
import { SectionUpgrades } from "../src/sections/SectionUpgrades";
import { readFileSync } from "fs";

describe("PudUpgrades View", () => {
    it("should provide easy access to upgrades through the Pud class", () => {
        const bytes = readFileSync("test/sections/section_ugrd.bin");
        const pud = Pud.fromPudBytes(bytes)._unsafeUnwrap();

        const upgrades = pud.upgrades;
        expect(upgrades).toBeDefined();

        // Check useDefault
        expect(upgrades.useDefault).toBe(true);
        upgrades.useDefault = false;
        expect(upgrades.useDefault).toBe(false);
        expect(pud.getSection(SectionUpgrades)?.useDefault).toBe(false);

        // Check named upgrade getters
        expect(upgrades.sword1).toBeDefined();
        expect(upgrades.sword1?.goldCost).toBe(800);

        // Modify gold cost through view
        upgrades.sword1!.goldCost = 1000;
        expect(upgrades.sword1?.goldCost).toBe(1000);
        expect(pud.getSection(SectionUpgrades)?.goldCosts[0]).toBe(1000);

        // Check spells as well
        expect(upgrades.spellHolyVision).toBeDefined();
        expect(upgrades.spellHolyVision?.goldCost).toBe(1500);
    });
});
