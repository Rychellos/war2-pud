import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_DESCRIPTION_CODE = "DESC";
const SECTION_DESCRIPTION_LENGTH = 32;

export class SectionDescription extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_DESCRIPTION_CODE, SECTION_DESCRIPTION_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_DESCRIPTION_CODE,
            SECTION_DESCRIPTION_LENGTH,
            SectionDescription,
            bytes,
            offset,
        );
    }

    public get description() {
        return this.getString(8, 32);
    }

    public set description(value: string) {
        this.writeString(8, value, 32);
    }
}
