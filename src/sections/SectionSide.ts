import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";
import { PLAYER_SIDES, PLAYERS } from "../enums";

const SECTION_SIDE_CODE = "SIDE";
const SECTION_SIDE_LENGTH = 16;

export class SectionSide extends PudStaticSection {
    public sides: Uint8Array;

    public constructor(data: ArrayBuffer) {
        super(SECTION_SIDE_CODE, SECTION_SIDE_LENGTH, data);
        this.sides = new Uint8Array(
            this.data,
            HEADER_LENGTH,
            SECTION_SIDE_LENGTH,
        );
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_SIDE_CODE,
            SECTION_SIDE_LENGTH,
            SectionSide,
            bytes,
            offset,
        );
    }

    public getSide(player: PLAYERS): number {
        const side = this.sides[player];
        if (side === 0x00) return PLAYER_SIDES.HUMAN;
        if (side === 0x01) return PLAYER_SIDES.ORC;
        return PLAYER_SIDES.NEUTRAL;
    }

    public setSide(player: PLAYERS, race: number) {
        if (race === PLAYER_SIDES.HUMAN || race === PLAYER_SIDES.ORC) {
            this.sides[player] = race;
        } else {
            this.sides[player] = PLAYER_SIDES.NEUTRAL; // neutral
        }
    }
}
