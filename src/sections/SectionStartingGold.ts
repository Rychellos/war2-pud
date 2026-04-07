import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_GOLD_CODE = "SGLD";
const SECTION_GOLD_LENGTH = 32;

export class SectionStartingGold extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_GOLD_CODE, SECTION_GOLD_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_GOLD_CODE,
            SECTION_GOLD_LENGTH,
            SectionStartingGold,
            bytes,
            offset,
        );
    }

    public getGold(playerIndex: number): number {
        return this.view.getUint16(HEADER_LENGTH + playerIndex * 2, true);
    }

    public setGold(playerIndex: number, amount: number) {
        this.view.setUint16(HEADER_LENGTH + playerIndex * 2, amount, true);
    }
}
