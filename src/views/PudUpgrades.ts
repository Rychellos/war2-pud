import { Pud } from "..";
import { SectionUpgrades } from "../sections/SectionUpgrades";
import { UPGRADES } from "../enums";

export class PudUpgrades {
    constructor(private readonly pud: Pud) {}

    get useDefault() {
        return this.pud.getSection(SectionUpgrades)?.useDefault ?? true;
    }

    set useDefault(value: boolean) {
        const section = this.pud.getSection(SectionUpgrades);
        if (section) {
            section.useDefault = value;
        }
    }

    private getUpgrade(id: UPGRADES) {
        const section = this.pud.getSection(SectionUpgrades);
        return section?.upgradesDefinitions[id];
    }

    get sword1() {
        return this.getUpgrade(UPGRADES.SWORD_1);
    }
    get sword2() {
        return this.getUpgrade(UPGRADES.SWORD_2);
    }
    get weapon1() {
        return this.getUpgrade(UPGRADES.WEAPON_1);
    }
    get weapon2() {
        return this.getUpgrade(UPGRADES.WEAPON);
    } // WEAPON is used for weapon2 in enum
    get arrow1() {
        return this.getUpgrade(UPGRADES.ARROW_1);
    }
    get arrow2() {
        return this.getUpgrade(UPGRADES.ARROW_2);
    }
    get throwingAxes1() {
        return this.getUpgrade(UPGRADES.THROWING_AXES_1);
    }
    get throwingAxes2() {
        return this.getUpgrade(UPGRADES.THROWING_AXES_2);
    }
    get humanShield1() {
        return this.getUpgrade(UPGRADES.HUMAN_SHIELD_1);
    }
    get humanShield2() {
        return this.getUpgrade(UPGRADES.HUMAN_SHIELD_2);
    }
    get orcShield1() {
        return this.getUpgrade(UPGRADES.ORC_SHIELD_1);
    }
    get orcShield2() {
        return this.getUpgrade(UPGRADES.ORC_SHIELD_2);
    }
    get humanBoatAttack1() {
        return this.getUpgrade(UPGRADES.HUMAN_BOAT_ATTACK_1);
    }
    get humanBoatAttack2() {
        return this.getUpgrade(UPGRADES.HUMAN_BOAT_ATTACK_2);
    }
    get orcBoatAttack1() {
        return this.getUpgrade(UPGRADES.ORC_BOAT_ATTACK1);
    }
    get orcBoatAttack2() {
        return this.getUpgrade(UPGRADES.ORC_BOAT_ATTACK2);
    }
    get humanBoatArmor1() {
        return this.getUpgrade(UPGRADES.HUMAN_BOAT_ARMOR_1);
    }
    get humanBoatArmor2() {
        return this.getUpgrade(UPGRADES.HUMAN_BOAT_ARMOR_2);
    }
    get orcBoatArmor1() {
        return this.getUpgrade(UPGRADES.ORC_BOAT_ARMOR_1);
    }
    get orcBoatArmor2() {
        return this.getUpgrade(UPGRADES.ORC_BOAT_ARMOR_2);
    }
    get catapultDamage1() {
        return this.getUpgrade(UPGRADES.CATAPULT_DAMAGE_1);
    }
    get catapultDamage2() {
        return this.getUpgrade(UPGRADES.CATAPULT_DAMAGE_2);
    }
    get ballistaDamage1() {
        return this.getUpgrade(UPGRADES.BALLISTA_DAMAGE_1);
    }
    get ballistaDamage2() {
        return this.getUpgrade(UPGRADES.BALLISTA_DAMAGE_2);
    }
    get trainRangers() {
        return this.getUpgrade(UPGRADES.TRAIN_RANGERS);
    }
    get longbows() {
        return this.getUpgrade(UPGRADES.LONGBOWS);
    }
    get rangerScouting() {
        return this.getUpgrade(UPGRADES.RANGER_SCOUTING);
    }
    get rangerMarksmanship() {
        return this.getUpgrade(UPGRADES.RANGER_MARKSMANSHIP);
    }
    get trainBerserkers() {
        return this.getUpgrade(UPGRADES.TRAIN_BERSERKERS);
    }
    get lighterAxes() {
        return this.getUpgrade(UPGRADES.LIGHTER_AXES);
    }
    get berserkerScouting() {
        return this.getUpgrade(UPGRADES.BERSERKER_SCOUTING);
    }
    get berserkerRegeneration() {
        return this.getUpgrade(UPGRADES.BERSERKER_REGENERATION);
    }
    get trainOgreMages() {
        return this.getUpgrade(UPGRADES.TRAIN_OGRE_MAGES);
    }
    get trainPaladins() {
        return this.getUpgrade(UPGRADES.TRAIN_PALADINS);
    }
    get spellHolyVision() {
        return this.getUpgrade(UPGRADES.SPELL_HOLY_VISION);
    }
    get spellHeal() {
        return this.getUpgrade(UPGRADES.SPELL_HEAL);
    }
    get spellExorcism() {
        return this.getUpgrade(UPGRADES.SPELL_EXORCISM);
    }
    get spellFireShield() {
        return this.getUpgrade(UPGRADES.SPELL_FIRE_SHIELD);
    }
    get spellFireball() {
        return this.getUpgrade(UPGRADES.SPELL_FIREBALL);
    }
    get spellSlow() {
        return this.getUpgrade(UPGRADES.SPELL_SLOW);
    }
    get spellInvisibility() {
        return this.getUpgrade(UPGRADES.SPELL_INVISIBILITY);
    }
    get spellPolymorph() {
        return this.getUpgrade(UPGRADES.SPELL_POLYMORPH);
    }
    get spellBlizzard() {
        return this.getUpgrade(UPGRADES.SPELL_BLIZZARD);
    }
    get spellEyeOfKilrogg() {
        return this.getUpgrade(UPGRADES.SPELL_EYE_OF_KILROGG);
    }
    get spellBloodlust() {
        return this.getUpgrade(UPGRADES.SPELL_BLOODLUST);
    }
    get spellRaiseDead() {
        return this.getUpgrade(UPGRADES.SPELL_RAISE_DEAD);
    }
    get spellDeathCoil() {
        return this.getUpgrade(UPGRADES.SPELL_DEATH_COIL);
    }
    get spellWhirlwind() {
        return this.getUpgrade(UPGRADES.SPELL_WHIRL_WIND);
    }
    get spellHaste() {
        return this.getUpgrade(UPGRADES.SPELL_HASTE);
    }
    get spellUnholyArmor() {
        return this.getUpgrade(UPGRADES.SPELL_UNHOLY_ARMOR);
    }
    get spellRunes() {
        return this.getUpgrade(UPGRADES.SPELL_RUNES);
    }
    get spellRot() {
        return this.getUpgrade(UPGRADES.SPELL_ROT);
    }
}
