import { UNIT_TYPES } from "../enums";
import { PudDynamicSectionEntry } from "../sections/base/PudDynamicSection";

export class PudUnitEntry extends PudDynamicSectionEntry {
    public static readonly LENGTH = 8;

    constructor(
        data: ArrayBuffer,
        offset: number,
        byteLength: number,
    ) {
        super(data, offset, byteLength);
    }

    public get x() {
        return this._view.getUint16(0, true);
    }

    public set x(value: number) {
        this._view.setUint16(0, value, true);
    }

    public get y() {
        return this._view.getUint16(2, true);
    }

    public set y(value: number) {
        this._view.setUint16(2, value, true);
    }

    public get type(): UNIT_TYPES {
        return this._view.getUint8(4);
    }

    public set type(value: UNIT_TYPES) {
        this._view.setUint8(4, value);
    }

    public get owner() {
        return this._view.getUint8(5);
    }

    public set owner(value: number) {
        this._view.setUint8(5, value);
    }

    /**
     * If gold mine or oil well, contains 2500 * this.
     * Otherwise 0 passive 1 active.
     */
    public get extra() {
        return this._view.getUint16(6, true);
    }

    public set extra(value: number) {
        this._view.setUint16(6, value, true);
    }
}
