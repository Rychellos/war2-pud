import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_SQM_CODE = "SQM ";

export class SectionSqm extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_SQM_CODE, data.byteLength - HEADER_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_SQM_CODE,
            0,
            SectionSqm,
            bytes,
            offset,
        );
    }

    public get movementMap() {
        return this.getArray(HEADER_LENGTH, this.dataLength / 2, Uint16Array);
    }
}
