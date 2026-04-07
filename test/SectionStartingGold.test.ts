import { test, expect } from "vitest";
import { SectionStartingGold } from "../src/sections/SectionStartingGold";
import { getSection } from "./helpers";

test("Test section SGLD", async () => {
    const section = await getSection(
        "test/sections/section_sgld.bin",
        SectionStartingGold.fromBytes,
    );

    // Test getter
    expect(section.getGold(0)).toBeTypeOf("number");

    // Test setter/getter
    section.setGold(0, 5000);
    expect(section.getGold(0)).toBe(5000);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    const view = new DataView(bytes.buffer);
    expect(view.getUint16(8 + 0, true)).toBe(5000);
});
