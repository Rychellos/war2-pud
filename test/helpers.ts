import { Ok, Result } from "neverthrow";
import { HEADER_LENGTH } from "../src/sections/types";
import { readFile } from "fs/promises";
import { expect } from "vitest";
import { PudSection } from "../src/sections/base/PudSection";

export async function getSection<T extends PudSection>(
    testFilePath: string,
    constructorFunction: (bytes: Uint8Array) => Result<T, Error>,
) {
    const data = await readFile(testFilePath);

    const sectionCreationResult = constructorFunction(data);

    if (sectionCreationResult.isErr()) {
        console.error(sectionCreationResult.error);
    }

    expect(
        sectionCreationResult.isErr(),
        `Failed to create section class of ${testFilePath.split("_")[1].split(".")[0]}`,
    ).toBe(false);

    const section = (sectionCreationResult as Ok<T, never>).value;

    expect(section.name).toBeTypeOf("string");
    expect(section.name.length).toBe(4);
    expect(section.dataLength).toBeTypeOf("number");
    expect(section.data.byteLength).toBeGreaterThanOrEqual(HEADER_LENGTH);

    return section;
}

export default {
    getSection,
};
