import { getSection } from "./helpers";
import { SectionVersion } from "../src/sections/SectionVersion";
import { expect, test } from "vitest";
import { HEADER_LENGTH } from "../src/sections/types";
import { PUD_VERSION } from "../src/enums/PUD_VERSION";

test("Test section VER ", () => {
    const TEST_VERSION = PUD_VERSION.WITH_HEROES;

    const section = getSection(
        "test/sections/section_ver .bin",
        SectionVersion.fromBytes,
    );

    expect(section.name).toBe("VER ");

    expect(section.version).toBeTypeOf("number");

    section.version = TEST_VERSION;

    expect(section.version).toBe(TEST_VERSION);

    expect(
        new DataView(section.getBytes()).getUint16(HEADER_LENGTH, true),
    ).toBe(TEST_VERSION);
});
