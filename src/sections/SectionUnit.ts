import { UNIT_TYPES } from "../enums";
import { PudUnitEntry } from "../views/PudUnitEntry";
import { PudDynamicSection } from "./base/PudDynamicSection";
import { ok, err } from "neverthrow";
import { HEADER_LENGTH } from "./types";

const SECTION_UNIT_CODE = "UNIT";

export class SectionUnit extends PudDynamicSection<
    PudUnitEntry,
    typeof PudUnitEntry
> {
    public constructor(startingUnits = 0) {
        super(PudUnitEntry, startingUnits, SECTION_UNIT_CODE);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        const view = new DataView(bytes.buffer, offset);
        const name = String.fromCharCode(...bytes.subarray(offset, offset + 4));
        const length = view.getUint32(4, true);

        if (name !== SECTION_UNIT_CODE) {
            return err(
                new Error(
                    `Invalid section name: ${name}, expected ${SECTION_UNIT_CODE}`,
                ),
            );
        }

        const unitCount = length / PudUnitEntry.LENGTH;
        const section = new SectionUnit(unitCount);

        const sectionBytes = bytes.subarray(
            offset,
            offset + HEADER_LENGTH + length,
        );
        new Uint8Array(section.data).set(sectionBytes);

        return ok(section);
    }

    public get units() {
        return this.elements.filter(
            (el: PudUnitEntry) => !el.deleted,
        ) as PudUnitEntry[];
    }

    public addUnit(
        x: number,
        y: number,
        type: UNIT_TYPES,
        owner: number,
        extra: number,
    ): PudUnitEntry {
        const unit = this.addElement();
        unit.x = x;
        unit.y = y;
        unit.type = type;
        unit.owner = owner;
        unit.extra = extra;
        return unit;
    }

    public removeUnit(unit: PudUnitEntry) {
        return this.removeElement(unit);
    }
}
