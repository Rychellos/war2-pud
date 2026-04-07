import { BitFlagReader } from "./BitflagReader";

export class UnitTargetFlagsReader extends BitFlagReader {
    constructor(data: ArrayBuffer, offset: number) {
        super(data, 1, offset);
    }

    get canTargetLand() {
        return this.getFlag(0);
    }

    set canTargetLand(v: boolean) {
        this.setFlag(0, v);
    }

    get canTargetSea() {
        return this.getFlag(1);
    }

    set canTargetSea(v: boolean) {
        this.setFlag(1, v);
    }

    get canTargetAir() {
        return this.getFlag(2);
    }

    set canTargetAir(v: boolean) {
        this.setFlag(2, v);
    }
}
