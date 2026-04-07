import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_REGM_CODE = "REGM";

export class SectionRegm extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_REGM_CODE, data.byteLength - HEADER_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_REGM_CODE,
            0,
            SectionRegm,
            bytes,
            offset,
        );
    }

    public get actionMap() {
        return this.getArray(HEADER_LENGTH, this.dataLength / 2, Uint16Array);
    }
}
