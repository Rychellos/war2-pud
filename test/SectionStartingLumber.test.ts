import { test, expect } from "vitest";
import { SectionStartingLumber } from "../src/sections/SectionStartingLumber";
import { getSection } from "./helpers";

test("Test section SLBR", () => {
    const section = getSection(
        "test/sections/section_slbr.bin",
        SectionStartingLumber.fromBytes,
    );

    // Test getter
    expect(section.getLumber(0)).toBeTypeOf("number");

    // Test setter/getter
    section.setLumber(0, 5000);
    expect(section.getLumber(0)).toBe(5000);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    const view = new DataView(bytes.buffer);
    expect(view.getUint16(8 + 0, true)).toBe(5000);
});
