import { getSection } from "./helpers";
import { SectionType } from "../src/sections/SectionType";
import { expect, test } from "vitest";
import { HEADER_LENGTH } from "../src/sections/types";

test("Test section TYPE", () => {
    const TEST_ID = 21332;

    const section = getSection(
        "test/sections/section_type.bin",
        SectionType.fromBytes,
    );

    expect(section.name).toBe("TYPE");

    expect(section.mapId).toBeTypeOf("number");
    expect(section.mapType).toBe("WAR2 MAP");

    section.mapId = TEST_ID;

    expect(section.mapId).toBe(TEST_ID);

    expect(
        new DataView(section.getBytes()).getUint32(HEADER_LENGTH + 12, true),
    ).toBe(TEST_ID);
});
