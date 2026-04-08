import type { Pud } from "../Pud";
import {
    PLAYER_CONTROLLER,
    PLAYER_SIDES,
    SPELL_NAMES,
    UPGRADE_NAMES,
    UNIT_TYPES,
    PLAYERS,
    AI_PROFILES,
} from "../enums";
import { SectionOwners } from "../sections/SectionOwners";
import { SectionSide } from "../sections/SectionSide";
import { SectionStartingGold } from "../sections/SectionStartingGold";
import { SectionStartingLumber } from "../sections/SectionStartingLumber";
import { SectionStartingOil } from "../sections/SectionStartingOil";
import { SectionAI } from "../sections/SectionAI";
import { SectionAllowed } from "../sections/SectionAllowed";
import type { PudUnitEntry } from "./PudUnitEntry";

const UNIT_ALOW_BIT_MAP: Partial<Record<UNIT_TYPES, number>> = {
    [UNIT_TYPES.FOOTMAN]: 0,
    [UNIT_TYPES.GRUNT]: 0,
    [UNIT_TYPES.PEASANT]: 1,
    [UNIT_TYPES.PEON]: 1,
    [UNIT_TYPES.BALLISTA]: 2,
    [UNIT_TYPES.CATAPULT]: 2,
    [UNIT_TYPES.KNIGHT]: 3,
    [UNIT_TYPES.OGRE]: 3,
    [UNIT_TYPES.ARCHER]: 4,
    [UNIT_TYPES.TROLL_AXETHROWER]: 4,
    [UNIT_TYPES.MAGE]: 5,
    [UNIT_TYPES.DEATH_KNIGHT]: 5,
    [UNIT_TYPES.HUMAN_TANKER]: 6,
    [UNIT_TYPES.ORC_TANKER]: 6,
    [UNIT_TYPES.ELVEN_DESTROYER]: 7,
    [UNIT_TYPES.TROLL_DESTROYER]: 7,
    [UNIT_TYPES.HUMAN_TRANSPORT]: 8,
    [UNIT_TYPES.ORC_TRANSPORT]: 8,
    [UNIT_TYPES.BATTLESHIP]: 9,
    [UNIT_TYPES.OGRE_OGRE_JUGGERNAUGHT]: 9,
    [UNIT_TYPES.GNOMISH_SUBMARINE]: 10,
    [UNIT_TYPES.GIANT_TURTLE]: 10,
    [UNIT_TYPES.GNOMISH_FLYING_MACHINE]: 11,
    [UNIT_TYPES.GOBLIN_ZEPPLIN]: 11,
    [UNIT_TYPES.GRYPHON_RIDER]: 12,
    [UNIT_TYPES.DRAGON]: 12,
    [UNIT_TYPES.DWARVEN_DEMOLITION_SQUAD]: 14,
    [UNIT_TYPES.GOBLIN_SAPPER]: 14,
    [UNIT_TYPES.GRYPHON_AVIARY]: 15,
    [UNIT_TYPES.DRAGON_ROOST]: 15,
    [UNIT_TYPES.FARM]: 16,
    [UNIT_TYPES.PIG_FARM]: 16,
    [UNIT_TYPES.HUMAN_BARRACKS]: 17,
    [UNIT_TYPES.ORC_BARRACKS]: 17,
    [UNIT_TYPES.ELVEN_LUMBER_MILL]: 18,
    [UNIT_TYPES.TROLL_LUMBER_MILL]: 18,
    [UNIT_TYPES.STABLES]: 19,
    [UNIT_TYPES.OGRE_MOUND]: 19,
    [UNIT_TYPES.MAGE_TOWER]: 20,
    [UNIT_TYPES.TEMPLE_OF_THE_DAMNED]: 20,
    [UNIT_TYPES.HUMAN_FOUNDRY]: 21,
    [UNIT_TYPES.ORC_FOUNDRY]: 21,
    [UNIT_TYPES.HUMAN_REFINERY]: 22,
    [UNIT_TYPES.ORC_REFINERY]: 22,
    [UNIT_TYPES.GNOMISH_INVENTOR]: 23,
    [UNIT_TYPES.GOBLIN_ALCHEMIST]: 23,
    [UNIT_TYPES.CHURCH]: 24,
    [UNIT_TYPES.ALTAR_OF_STORMS]: 24,
    [UNIT_TYPES.SCOUT_TOWER]: 25,
    [UNIT_TYPES.WATCH_TOWER]: 25,
    [UNIT_TYPES.TOWN_HALL]: 26,
    [UNIT_TYPES.GREAT_HALL]: 26,
    [UNIT_TYPES.KEEP]: 27,
    [UNIT_TYPES.STRONGHOLD]: 27,
    [UNIT_TYPES.CASTLE]: 28,
    [UNIT_TYPES.FORTRESS]: 28,
    [UNIT_TYPES.HUMAN_BLACKSMITH]: 29,
    [UNIT_TYPES.ORC_BLACKSMITH]: 29,
    [UNIT_TYPES.HUMAN_SHIPYARD]: 30,
    [UNIT_TYPES.ORC_SHIPYARD]: 30,
};

export class PudPlayer {
    constructor(
        private readonly pud: Pud,
        public readonly id: number,
    ) {
        if (id < PLAYERS.RED || id > PLAYERS.NEUTRAL) {
            throw new Error(
                `Invalid player ID: ${id}. Must be between 0 and 15.`,
            );
        }
    }

    /**
     * Gets the controller type for this player (Human, Computer, Rescue, etc.)
     */
    public get controller(): PLAYER_CONTROLLER {
        const ownerSection = this.pud.getSection(SectionOwners);
        if (!ownerSection) {
            return PLAYER_CONTROLLER.NOBODY; // Default fallback
        }
        return ownerSection.owners[this.id] as PLAYER_CONTROLLER;
    }

    /**
     * Sets the controller type for this player.
     */
    public set controller(value: PLAYER_CONTROLLER) {
        const ownerSection = this.pud.getSection(SectionOwners);
        if (!ownerSection) {
            throw new Error(
                "Cannot set property: OWNR section is missing. Not implemented yet.",
            );
        }

        if (typeof value === "string") {
            value = PLAYER_CONTROLLER[value as keyof typeof PLAYER_CONTROLLER];
        }

        ownerSection.owners[this.id] = value;
    }

    /**
     * Gets the race of this player (Human, Orc, Neutral).
     */
    public get race(): PLAYER_SIDES {
        const sideSection = this.pud.getSection(SectionSide);
        if (!sideSection) return PLAYER_SIDES.NEUTRAL;
        return sideSection.sides[this.id] as PLAYER_SIDES;
    }

    public set race(value: PLAYER_SIDES) {
        const sideSection = this.pud.getSection(SectionSide);
        if (!sideSection) throw new Error("SIDE section missing");
        sideSection.sides[this.id] = value;
    }

    /**
     * Starting gold.
     */
    public get startingGold(): number {
        const section = this.pud.getSection(SectionStartingGold);
        if (!section) return 0;
        return section.getGold(this.id);
    }

    public set startingGold(value: number) {
        const section = this.pud.getSection(SectionStartingGold);
        if (!section) throw new Error("SGLD section missing");
        section.setGold(this.id, value);
    }

    /**
     * Starting lumber.
     */
    public get startingLumber(): number {
        const section = this.pud.getSection(SectionStartingLumber);
        if (!section) return 0;
        return section.getLumber(this.id);
    }

    public set startingLumber(value: number) {
        const section = this.pud.getSection(SectionStartingLumber);
        if (!section) throw new Error("SLBR section missing");
        section.setLumber(this.id, value);
    }

    /**
     * Starting oil.
     */
    public get startingOil(): number {
        const section = this.pud.getSection(SectionStartingOil);
        if (!section) return 0;
        return section.getOil(this.id);
    }

    public set startingOil(value: number) {
        const section = this.pud.getSection(SectionStartingOil);
        if (!section) throw new Error("SOIL section missing");
        section.setOil(this.id, value);
    }

    /**
     * AI profile / script ID.
     */
    public get aiInstance(): AI_PROFILES {
        const section = this.pud.getSection(SectionAI);
        if (!section) return 0;
        return section.getAi(this.id);
    }

    public set aiInstance(value: AI_PROFILES) {
        const section = this.pud.getSection(SectionAI);
        if (!section) throw new Error("AIPL section missing");
        section.setAi(this.id, value);
    }

    /**
     * Checks if a specific unit is allowed to be built by this player.
     */
    public isUnitAllowed(unitType: UNIT_TYPES): boolean {
        const bitIndex = UNIT_ALOW_BIT_MAP[unitType];
        if (bitIndex === undefined) return true; // Default allowed if not mapped

        const section = this.pud.getSectionByName("ALOW") as SectionAllowed;
        if (!section) return true; // Default allowed
        return section
            .getPlayer(this.id)
            .allowedUnitsAndBuildings.getFlag(bitIndex);
    }

    /**
     * Allows or disallows a specific unit.
     */
    public setUnitAllowed(unitType: UNIT_TYPES, allowed: boolean): void {
        const bitIndex = UNIT_ALOW_BIT_MAP[unitType];
        if (bitIndex === undefined) return; // Ignore if not mapped

        const section = this.pud.getSection(SectionAllowed);
        if (!section) throw new Error("ALOW section missing");
        section
            .getPlayer(this.id)
            .allowedUnitsAndBuildings.setFlag(bitIndex, allowed);
    }

    /**
     * Checks if a user has access to a specific spell.
     */
    public isSpellAllowed(spell: SPELL_NAMES): boolean {
        const section = this.pud.getSectionByName("ALOW") as SectionAllowed;
        if (!section) return true;

        const spellAccess = section.getPlayer(this.id)
            .allowedSpells as unknown as Record<string, boolean>;
        return spellAccess[spell] === true;
    }

    public setSpellAllowed(spell: SPELL_NAMES, allowed: boolean): void {
        const section = this.pud.getSection(SectionAllowed);
        if (!section) throw new Error("ALOW section missing");

        (
            section.getPlayer(this.id).allowedSpells as unknown as Record<
                string,
                boolean
            >
        )[spell] = allowed;
    }

    /**
     * Checks if a specific upgrade is allowed.
     */
    public isUpgradeAllowed(upgrade: UPGRADE_NAMES): boolean {
        const section = this.pud.getSectionByName("ALOW") as SectionAllowed;
        if (!section) return true;

        const upgradeAccess = section.getPlayer(this.id)
            .allowedUpgrades as Record<UPGRADE_NAMES, boolean>;
        return upgradeAccess[upgrade] === true;
    }

    public setUpgradeAllowed(upgrade: UPGRADE_NAMES, allowed: boolean): void {
        const section = this.pud.getSection(SectionAllowed);
        if (!section) throw new Error("ALOW section missing");

        (
            section.getPlayer(this.id).allowedUpgrades as unknown as Record<
                string,
                boolean
            >
        )[upgrade] = allowed;
    }

    /**
     * Helper to get all units present on the map that belong to this player.
     */
    public get units(): PudUnitEntry[] {
        return this.pud.units.filter((u) => u.owner === this.id);
    }
}
