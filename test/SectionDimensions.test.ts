import { test, expect } from "vitest";
import { SectionDimensions } from "../src/sections/SectionDimensions";
import { getSection } from "./helpers";

test("Test section DIM ", () => {
    const section = getSection(
        "test/sections/section_dim .bin",
        SectionDimensions.fromBytes,
    );

    // Initial values from bin (assuming some reasonable values)
    expect(section.width).toBeTypeOf("number");
    expect(section.height).toBeTypeOf("number");

    // Test setter/getter
    section.width = 128;
    section.height = 128;
    expect(section.width).toBe(128);
    expect(section.height).toBe(128);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    const view = new DataView(bytes.buffer);
    expect(view.getUint16(8, true)).toBe(128);
    expect(view.getUint16(8 + 2, true)).toBe(128);
});
