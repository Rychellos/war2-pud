import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_MTXM_CODE = "MTXM";

export class SectionMtxm extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_MTXM_CODE, data.byteLength - HEADER_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_MTXM_CODE,
            0,
            SectionMtxm,
            bytes,
            offset,
        );
    }

    public get tiles() {
        return this.getArray(HEADER_LENGTH, this.dataLength / 2, Uint16Array);
    }
}
