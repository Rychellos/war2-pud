import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_LUMBER_CODE = "SLBR";
const SECTION_LUMBER_LENGTH = 32;

export class SectionStartingLumber extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_LUMBER_CODE, SECTION_LUMBER_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_LUMBER_CODE,
            SECTION_LUMBER_LENGTH,
            SectionStartingLumber,
            bytes,
            offset,
        );
    }

    public getLumber(playerIndex: number): number {
        return this.view.getUint16(HEADER_LENGTH + playerIndex * 2, true);
    }

    public setLumber(playerIndex: number, amount: number) {
        this.view.setUint16(HEADER_LENGTH + playerIndex * 2, amount, true);
    }
}
