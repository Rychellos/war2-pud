import { AllowedSpellsFlagReader } from "./allowed/AllowedSpellsFlagReader";
import { AllowedUnitsAndBuildingFlagReader } from "./allowed/AllowedUnitsAndBuildingFlagReader";
import { UpgradesAllowedFlagReader } from "./allowed/UpgradesAllowedFlagReader";
import { SpellsAtStartFlagReader } from "./allowed/SpellsAtStartFlagReader";
import { SpellsCurrentlyResearched } from "./allowed/SpellsCurrentlyResearched";
import { PudStaticSection } from "./base/PudStaticSection";
import { UpgradesCurrentlyResearched } from "./allowed/UpgradesCurrentlyResearched";
import { PLAYERS } from "../enums";

const SECTION_ALLOWED_CODE = "ALOW";
const SECTION_ALLOWED_LENGTH = 384;

export class SectionAllowed extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_ALLOWED_CODE, SECTION_ALLOWED_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_ALLOWED_CODE,
            SECTION_ALLOWED_LENGTH,
            SectionAllowed,
            bytes,
            offset,
        );
    }

    public getPlayer(index: PLAYERS) {
        return {
            allowedUnitsAndBuildings: new AllowedUnitsAndBuildingFlagReader(
                this.data,
                index * 4,
            ),
            spellsAtStart: new SpellsAtStartFlagReader(
                this.data,
                PLAYERS.LENGTH * 4 + index * 4,
            ),
            allowedSpells: new AllowedSpellsFlagReader(
                this.data,
                PLAYERS.LENGTH * 4 * 2 + index * 4,
            ),
            spellsCurrentlyResearched: new SpellsCurrentlyResearched(
                this.data,
                PLAYERS.LENGTH * 4 * 3 + index * 4,
            ),
            allowedUpgrades: new UpgradesAllowedFlagReader(
                this.data,
                PLAYERS.LENGTH * 4 * 4 + index * 4,
            ),
            upgradesCurrentlyResearched: new UpgradesCurrentlyResearched(
                this.data,
                PLAYERS.LENGTH * 4 * 5 + index * 4,
            ),
        };
    }

    public get players() {
        return {
            red: this.getPlayer(PLAYERS.RED),
            blue: this.getPlayer(PLAYERS.BLUE),
            pink: this.getPlayer(PLAYERS.PINK),
            violet: this.getPlayer(PLAYERS.VIOLET),
            orange: this.getPlayer(PLAYERS.ORANGE),
            black: this.getPlayer(PLAYERS.BLACK),
            white: this.getPlayer(PLAYERS.WHITE),
            yellow: this.getPlayer(PLAYERS.YELLOW),
            unused_8: this.getPlayer(PLAYERS.UNUSED_8),
            unused_9: this.getPlayer(PLAYERS.UNUSED_9),
            unused_10: this.getPlayer(PLAYERS.UNUSED_10),
            unused_11: this.getPlayer(PLAYERS.UNUSED_11),
            unused_12: this.getPlayer(PLAYERS.UNUSED_12),
            unused_13: this.getPlayer(PLAYERS.UNUSED_13),
            unused_14: this.getPlayer(PLAYERS.UNUSED_14),
            neutral: this.getPlayer(PLAYERS.NEUTRAL),
        };
    }
}
