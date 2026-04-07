import { test, expect } from "vitest";

import { SectionOwners } from "../src/sections/SectionOwners";
import { getSection } from "./helpers";

test("Test section OWNR", async () => {
    const section = await getSection(
        "test/sections/section_ownr.bin",
        SectionOwners.fromBytes,
    );

    expect(section.owners[0]).toBeTypeOf("number");

    section.owners[2] = 233;

    expect(section.owners[2]).toBe(233);

    expect(new Uint8Array(section.getBytes())[8 + 2]).toBe(233);
});
