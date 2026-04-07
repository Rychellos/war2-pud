import { BitFlagReader } from "../../BitflagReader";

export class AllowedSpellsFlagReader extends BitFlagReader {
    constructor(data: ArrayBuffer, offset: number) {
        super(data, 4, offset);
    }

    // bit0
    get holyVision() {
        return this.getFlag(0);
    }
    set holyVision(v: boolean) {
        this.setFlag(0, v);
    }

    // bit1
    get heal() {
        return this.getFlag(1);
    }
    set heal(v: boolean) {
        this.setFlag(1, v);
    }

    // bit2 (unused)
    get unused2() {
        return this.getFlag(2);
    }
    set unused2(v: boolean) {
        this.setFlag(2, v);
    }

    // bit3
    get exorcism() {
        return this.getFlag(3);
    }
    set exorcism(v: boolean) {
        this.setFlag(3, v);
    }

    // bit4
    get flameShield() {
        return this.getFlag(4);
    }
    set flameShield(v: boolean) {
        this.setFlag(4, v);
    }

    // bit5
    get fireball() {
        return this.getFlag(5);
    }
    set fireball(v: boolean) {
        this.setFlag(5, v);
    }

    // bit6
    get slow() {
        return this.getFlag(6);
    }
    set slow(v: boolean) {
        this.setFlag(6, v);
    }

    // bit7
    get invisibility() {
        return this.getFlag(7);
    }
    set invisibility(v: boolean) {
        this.setFlag(7, v);
    }

    // bit8
    get polymorph() {
        return this.getFlag(8);
    }
    set polymorph(v: boolean) {
        this.setFlag(8, v);
    }

    // bit9
    get blizzard() {
        return this.getFlag(9);
    }
    set blizzard(v: boolean) {
        this.setFlag(9, v);
    }

    // bit10
    get eyeOfKilrogg() {
        return this.getFlag(10);
    }
    set eyeOfKilrogg(v: boolean) {
        this.setFlag(10, v);
    }

    // bit11
    get bloodlust() {
        return this.getFlag(11);
    }
    set bloodlust(v: boolean) {
        this.setFlag(11, v);
    }

    // bit12 (unused)
    get unused12() {
        return this.getFlag(12);
    }
    set unused12(v: boolean) {
        this.setFlag(12, v);
    }

    // bit13
    get raiseDead() {
        return this.getFlag(13);
    }
    set raiseDead(v: boolean) {
        this.setFlag(13, v);
    }

    // bit14
    get deathCoil() {
        return this.getFlag(14);
    }
    set deathCoil(v: boolean) {
        this.setFlag(14, v);
    }

    // bit15
    get whirlwind() {
        return this.getFlag(15);
    }
    set whirlwind(v: boolean) {
        this.setFlag(15, v);
    }

    // bit16
    get haste() {
        return this.getFlag(16);
    }
    set haste(v: boolean) {
        this.setFlag(16, v);
    }

    // bit17
    get unholyArmor() {
        return this.getFlag(17);
    }
    set unholyArmor(v: boolean) {
        this.setFlag(17, v);
    }

    // bit18
    get runes() {
        return this.getFlag(18);
    }
    set runes(v: boolean) {
        this.setFlag(18, v);
    }

    // bit19
    get deathAndDecay() {
        return this.getFlag(19);
    }
    set deathAndDecay(v: boolean) {
        this.setFlag(19, v);
    }

    get upgradeKnightsToPaladins() {
        return this.getFlag(20);
    }
    set upgradeKnightsToPaladins(v: boolean) {
        this.setFlag(20, v);
    }

    get upgradeOgresToOgreMages() {
        return this.getFlag(20);
    }
    set upgradeOgresToOgreMages(v: boolean) {
        this.setFlag(20, v);
    }
}
