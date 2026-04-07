import { PudStaticSection } from "./base/PudStaticSection";

const SECTION_TYPE_CODE = "TYPE";
const SECTION_TYPE_LENGTH = 16;

export class SectionType extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_TYPE_CODE, SECTION_TYPE_LENGTH, data);
        if (this.mapType === "".padEnd(10, "\u0000")) {
            this.mapType = "WAR2 MAP".padEnd(10, "\u0000");
        }

        if (this.mapId === 0) {
            const data = new Uint32Array(4);
            crypto.getRandomValues(data);
            this.mapId = data[0];
        }
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal<SectionType>(
            SECTION_TYPE_CODE,
            SECTION_TYPE_LENGTH,
            SectionType,
            bytes,
            offset,
        );
    }

    get mapType() {
        return this.getString(8, 10);
    }

    set mapType(text: string) {
        this.writeString(8, text.padEnd(10, "\0"), 10);
    }

    get mapId() {
        return this.view.getUint32(20, true);
    }

    set mapId(id: number) {
        this.view.setUint32(20, id, true);
    }
}
