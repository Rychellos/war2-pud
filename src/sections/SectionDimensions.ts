import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_DIMENSIONS_CODE = "DIM ";
const SECTION_DIMENSIONS_LENGTH = 4;

export class SectionDimensions extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_DIMENSIONS_CODE, SECTION_DIMENSIONS_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_DIMENSIONS_CODE,
            SECTION_DIMENSIONS_LENGTH,
            SectionDimensions,
            bytes,
            offset,
        );
    }

    public get width() {
        return this.view.getUint16(HEADER_LENGTH, true);
    }

    public set width(value: number) {
        this.view.setUint16(HEADER_LENGTH, value, true);
    }

    public get height() {
        return this.view.getUint16(HEADER_LENGTH + 2, true);
    }

    public set height(value: number) {
        this.view.setUint16(HEADER_LENGTH + 2, value, true);
    }
}
