import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";
import { TERRAIN_TYPES } from "../enums";

const SECTION_ERA_CODE = "ERA ";
const SECTION_ERA_LENGTH = 2;

export class SectionEra extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_ERA_CODE, SECTION_ERA_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_ERA_CODE,
            SECTION_ERA_LENGTH,
            SectionEra,
            bytes,
            offset,
        );
    }

    public get terrainId(): TERRAIN_TYPES {
        return this.view.getUint16(HEADER_LENGTH, true);
    }

    public set terrainId(value: TERRAIN_TYPES) {
        if (value < TERRAIN_TYPES.FOREST || value > TERRAIN_TYPES.SWAMP) {
            this.view.setUint16(HEADER_LENGTH, TERRAIN_TYPES.FOREST, true);
        } else {
            this.view.setUint16(HEADER_LENGTH, value, true);
        }
    }
}
