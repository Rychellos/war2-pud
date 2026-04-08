import { test, expect } from "vitest";
import { SectionAllowed } from "../src/sections/SectionAllowed";
import { getSection } from "./helpers";

test("Test section ALOW", () => {
    const section = getSection(
        "test/sections/section_alow.bin",
        SectionAllowed.fromBytes,
    );

    // Test players access
    const players = section.players;
    expect(players.red).toBeDefined();
    expect(players.neutral).toBeDefined();

    // Test specific reader access (e.g., allowedUnitsAndBuildings)
    expect(players.red.allowedUnitsAndBuildings).toBeDefined();
    expect(players.red.spellsAtStart).toBeDefined();
});
