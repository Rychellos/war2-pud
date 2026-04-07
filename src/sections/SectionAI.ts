import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";
import { AI_PROFILES, PLAYERS } from "../enums";

const SECTION_AI_CODE = "AIPL";
const SECTION_AI_LENGTH = 16;

export class SectionAI extends PudStaticSection {
    public playerAi: Uint8Array;

    public constructor(data: ArrayBuffer) {
        super(SECTION_AI_CODE, SECTION_AI_LENGTH, data);

        const arrayResult = this.getTypedArraySlice(
            HEADER_LENGTH,
            SECTION_AI_LENGTH,
            Uint8Array,
        );

        if (arrayResult.isOk()) {
            this.playerAi = arrayResult.value;
        } else {
            throw arrayResult.error;
        }

        for (let index = 0; index < SECTION_AI_LENGTH - 1; index++) {
            this.playerAi[index] = AI_PROFILES.LAND_ATTACK;
        }

        this.playerAi[SECTION_AI_LENGTH - 1] = AI_PROFILES.NONE;
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_AI_CODE,
            SECTION_AI_LENGTH,
            SectionAI,
            bytes,
            offset,
        );
    }

    public getAi(player: PLAYERS): AI_PROFILES {
        return this.playerAi[player];
    }

    public setAi(player: PLAYERS, ai: AI_PROFILES) {
        if (ai <= AI_PROFILES.NONE || ai > AI_PROFILES.LENGTH) {
            this.playerAi[player] = AI_PROFILES.PASSIVE;
            return;
        }

        this.playerAi[player] = ai;
    }
}
