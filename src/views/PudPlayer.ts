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
        const section = this.pud.getSection(SectionAllowed);
        if (!section) return true; // Default allowed
        return section
            .getPlayer(this.id)
            .allowedUnitsAndBuildings.getFlag(unitType);
    }

    /**
     * Allows or disallows a specific unit.
     */
    public setUnitAllowed(unitType: UNIT_TYPES, allowed: boolean): void {
        const section = this.pud.getSection(SectionAllowed);
        if (!section) throw new Error("ALOW section missing");
        section
            .getPlayer(this.id)
            .allowedUnitsAndBuildings.setFlag(unitType, allowed);
    }

    /**
     * Checks if a user has access to a specific spell.
     */
    public isSpellAllowed(spell: SPELL_NAMES): boolean {
        const section = this.pud.getSection(SectionAllowed);
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
        const section = this.pud.getSection(SectionAllowed);
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
