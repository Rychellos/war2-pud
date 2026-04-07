import { BitFlagReader } from "../../BitflagReader";

export class UpgradesAllowedFlagReader extends BitFlagReader {
    constructor(data: ArrayBuffer, offset: number) {
        super(data, 4, offset);
    }

    // bit0
    get arrows1() {
        return this.getFlag(0);
    }
    set arrows1(v: boolean) {
        this.setFlag(0, v);
    }

    // bit1
    get arrows2() {
        return this.getFlag(1);
    }
    set arrows2(v: boolean) {
        this.setFlag(1, v);
    }

    // bit2
    get swords1() {
        return this.getFlag(2);
    }
    set swords1(v: boolean) {
        this.setFlag(2, v);
    }

    // bit3
    get swords2() {
        return this.getFlag(3);
    }
    set swords2(v: boolean) {
        this.setFlag(3, v);
    }

    // bit4
    get shields1() {
        return this.getFlag(4);
    }
    set shields1(v: boolean) {
        this.setFlag(4, v);
    }

    // bit5
    get shields2() {
        return this.getFlag(5);
    }
    set shields2(v: boolean) {
        this.setFlag(5, v);
    }

    // bit6
    get boatAttack1() {
        return this.getFlag(6);
    }
    set boatAttack1(v: boolean) {
        this.setFlag(6, v);
    }

    // bit7
    get boatAttack2() {
        return this.getFlag(7);
    }
    set boatAttack2(v: boolean) {
        this.setFlag(7, v);
    }

    // bit8
    get boatArmor1() {
        return this.getFlag(8);
    }
    set boatArmor1(v: boolean) {
        this.setFlag(8, v);
    }

    // bit9
    get boatArmor2() {
        return this.getFlag(9);
    }
    set boatArmor2(v: boolean) {
        this.setFlag(9, v);
    }

    // bit10
    get boatSpeed1() {
        return this.getFlag(10);
    }
    set boatSpeed1(v: boolean) {
        this.setFlag(10, v);
    }

    // bit11
    get boatSpeed2() {
        return this.getFlag(11);
    }
    set boatSpeed2(v: boolean) {
        this.setFlag(11, v);
    }

    // bit12
    get catapultDamage1() {
        return this.getFlag(12);
    }
    set catapultDamage1(v: boolean) {
        this.setFlag(12, v);
    }

    // bit13
    get catapultDamage2() {
        return this.getFlag(13);
    }
    set catapultDamage2(v: boolean) {
        this.setFlag(13, v);
    }

    // bit14
    get unused14() {
        return this.getFlag(14);
    }
    set unused14(v: boolean) {
        this.setFlag(14, v);
    }

    // bit15
    get unused15() {
        return this.getFlag(15);
    }
    set unused15(v: boolean) {
        this.setFlag(15, v);
    }

    // bit16
    get ranger() {
        return this.getFlag(16);
    }
    set ranger(v: boolean) {
        this.setFlag(16, v);
    }

    // bit17
    get longbow() {
        return this.getFlag(17);
    }
    set longbow(v: boolean) {
        this.setFlag(17, v);
    }

    // bit18
    get scouts() {
        return this.getFlag(18);
    }
    set scouts(v: boolean) {
        this.setFlag(18, v);
    }

    // bit19
    get marks() {
        return this.getFlag(19);
    }
    set marks(v: boolean) {
        this.setFlag(19, v);
    }
}
