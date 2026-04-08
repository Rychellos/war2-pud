import { test, expect } from "vitest";
import { SectionStartingOil } from "../src/sections/SectionStartingOil";
import { getSection } from "./helpers";

test("Test section SOIL", () => {
    const section = getSection(
        "test/sections/section_soil.bin",
        SectionStartingOil.fromBytes,
    );

    // Test getter
    expect(section.getOil(0)).toBeTypeOf("number");

    // Test setter/getter
    section.setOil(0, 5000);
    expect(section.getOil(0)).toBe(5000);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    const view = new DataView(bytes.buffer);
    expect(view.getUint16(8 + 0, true)).toBe(5000);
});
