import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_OILM_CODE = "OILM";

export class SectionOilMap extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_OILM_CODE, data.byteLength - HEADER_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_OILM_CODE,
            0,
            SectionOilMap,
            bytes,
            offset,
        );
    }

    public get oilMap() {
        return this.getArray(HEADER_LENGTH, this.dataLength, Uint8Array);
    }
}
