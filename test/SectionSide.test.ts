import { test, expect } from "vitest";
import { SectionSide } from "../src/sections/SectionSide";
import { getSection } from "./helpers";
import { PLAYER_SIDES, PLAYERS } from "../src/enums";

test("Test section SIDE", () => {
    const section = getSection(
        "test/sections/section_side.bin",
        SectionSide.fromBytes,
    );

    // Initial values from bin (Player 0 is Orc, Player 15 is Neutral)
    expect(section.getSide(PLAYERS.RED)).toBe(PLAYER_SIDES.ORC);
    expect(section.getSide(PLAYERS.NEUTRAL)).toBe(PLAYER_SIDES.NEUTRAL);

    // Test setter/getter
    section.setSide(PLAYERS.RED, PLAYER_SIDES.ORC);
    expect(section.getSide(PLAYERS.RED)).toBe(PLAYER_SIDES.ORC);

    section.setSide(PLAYERS.BLUE, 0xff); // Should be neutral
    expect(section.getSide(PLAYERS.BLUE)).toBe(PLAYER_SIDES.NEUTRAL);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    expect(bytes[8 + 0]).toBe(PLAYER_SIDES.ORC);
    expect(bytes[8 + 1]).toBe(PLAYER_SIDES.NEUTRAL); // Neutral fallback
});
