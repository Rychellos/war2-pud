import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_OIL_CODE = "SOIL";
const SECTION_OIL_LENGTH = 32;

export class SectionStartingOil extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_OIL_CODE, SECTION_OIL_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_OIL_CODE,
            SECTION_OIL_LENGTH,
            SectionStartingOil,
            bytes,
            offset,
        );
    }

    public getOil(playerIndex: number): number {
        return this.view.getUint16(HEADER_LENGTH + playerIndex * 2, true);
    }

    public setOil(playerIndex: number, amount: number) {
        this.view.setUint16(HEADER_LENGTH + playerIndex * 2, amount, true);
    }
}
