import { test, expect } from "vitest";
import { SectionAI } from "../src/sections/SectionAI";
import { getSection } from "./helpers";

test("Test section AIPL", async () => {
    const section = await getSection(
        "test/sections/section_aipl.bin",
        SectionAI.fromBytes,
    );

    // Test getter
    expect(section.getAi(0)).toBeTypeOf("number");

    // Test setter/getter
    section.setAi(0, 0x01);
    expect(section.getAi(0)).toBe(0x01);

    // Verify raw data
    const bytes = new Uint8Array(section.getBytes());
    expect(bytes[8 + 0]).toBe(0x01);
});
