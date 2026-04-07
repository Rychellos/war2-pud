import { getSection } from "./helpers";
import { SectionDescription } from "../src/sections/SectionDescription";
import { expect, test } from "vitest";
import { HEADER_LENGTH } from "../src/sections/types";

test("Test section DESC", async () => {
    const TEST_DESCRIPTION = "The quick brown fox jumps over the lazy dog.";

    const section = await getSection(
        "test/sections/section_desc.bin",
        SectionDescription.fromBytes,
    );

    expect(section.name).toBe("DESC");

    expect(section.description).toBeTypeOf("string");
    expect(section.description.length).toBe(0); // It was empty in the bin file

    section.description = TEST_DESCRIPTION;

    const expectedDescription = TEST_DESCRIPTION.slice(0, 32); 
    expect(section.description).toBe(expectedDescription);
    expect(section.description.length).toBe(expectedDescription.length);

    expect(new Uint8Array(section.getBytes())[HEADER_LENGTH]).toBe(
        TEST_DESCRIPTION.charCodeAt(0),
    );
});
