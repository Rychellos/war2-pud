import { test, expect } from "vitest";
import { SectionUpgrades } from "../src/sections/SectionUpgrades";
import { getSection } from "./helpers";

test("Test section UGRD", () => {
    const section = getSection<SectionUpgrades>(
        "test/sections/section_ugrd.bin",
        SectionUpgrades.fromBytes,
    );

    // Initial values from bin
    expect(section.useDefault).toBeTypeOf("boolean");
    expect(section.upgradesDefinitions.length).toBe(52);

    const upgrade = section.upgradesDefinitions[0];
    expect(upgrade.upgradeTime).toBeTypeOf("number");
    expect(upgrade.goldCost).toBeTypeOf("number");

    // Test setter/getter
    upgrade.goldCost = 1337;
    expect(upgrade.goldCost).toBe(1337);
    expect(section.goldCosts[0]).toBe(1337);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    const view = new DataView(bytes.buffer);
    // Header (8) + USE_DEFAULT (2) + Time (52) + Gold (0 * 2)
    expect(view.getUint16(8 + 2 + 52, true)).toBe(1337);
});
