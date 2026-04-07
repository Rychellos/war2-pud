import { PudStaticSection } from "./base/PudStaticSection";
import { PUD_VERSION } from "../enums/PUD_VERSION";

const SECTION_VERSION_CODE = "VER ";
const SECTION_VERSION_LENGTH = 2;

export class SectionVersion extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_VERSION_CODE, SECTION_VERSION_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_VERSION_CODE,
            SECTION_VERSION_LENGTH,
            SectionVersion,
            bytes,
            offset,
        );
    }

    public get version(): PUD_VERSION {
        return this.view.getUint16(8, true);
    }

    public set version(value: PUD_VERSION) {
        this.view.setUint16(8, value, true);
    }
}
