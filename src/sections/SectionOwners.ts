import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_OWNERS_CODE = "OWNR";
const SECTION_OWNERS_LENGTH = 16;

export class SectionOwners extends PudStaticSection {
    public owners: Uint8Array;

    public constructor(data: ArrayBuffer) {
        super(SECTION_OWNERS_CODE, SECTION_OWNERS_LENGTH, data);
        this.owners = new Uint8Array(
            this.data,
            HEADER_LENGTH,
            SECTION_OWNERS_LENGTH,
        );
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_OWNERS_CODE,
            SECTION_OWNERS_LENGTH,
            SectionOwners,
            bytes,
            offset,
        );
    }
}
