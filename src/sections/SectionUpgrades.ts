import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";

import { PudUpgradeView } from "../views/PudUpgradeView";

const SECTION_UPGRADES_CODE = "UGRD";
const SECTION_UPGRADES_LENGTH = 782;

const NUM_UPGRADES = 52;

export enum UGRD_BYTE_OFFSETS {
    USE_DEFAULT = HEADER_LENGTH,
    UPGRADE_TIME = USE_DEFAULT + 2,
    GOLD_COST = UPGRADE_TIME + NUM_UPGRADES,
    LUMBER_COST = GOLD_COST + NUM_UPGRADES * 2,
    OIL_COST = LUMBER_COST + NUM_UPGRADES * 2,
    UPGRADE_ICON = OIL_COST + NUM_UPGRADES * 2,
    GROUP_APPLIES_TO = UPGRADE_ICON + NUM_UPGRADES * 2,
    AFFECT_FLAGS = GROUP_APPLIES_TO + NUM_UPGRADES * 2,
}

export class SectionUpgrades extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_UPGRADES_CODE, SECTION_UPGRADES_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal<SectionUpgrades>(
            SECTION_UPGRADES_CODE,
            SECTION_UPGRADES_LENGTH,
            SectionUpgrades,
            bytes,
            offset,
        );
    }

    public get useDefault() {
        return this.view.getUint16(UGRD_BYTE_OFFSETS.USE_DEFAULT, true) === 1;
    }

    public set useDefault(value: boolean) {
        this.view.setUint16(UGRD_BYTE_OFFSETS.USE_DEFAULT, value ? 1 : 0, true);
    }

    private _upgradeTimes = this.getArray(
        UGRD_BYTE_OFFSETS.UPGRADE_TIME,
        NUM_UPGRADES,
        Uint8Array,
    );
    public get upgradeTimes() {
        return this._upgradeTimes;
    }

    private _goldCosts = this.getArray(
        UGRD_BYTE_OFFSETS.GOLD_COST,
        NUM_UPGRADES,
        Uint16Array,
    );
    public get goldCosts() {
        return this._goldCosts;
    }

    private _lumberCosts = this.getArray(
        UGRD_BYTE_OFFSETS.LUMBER_COST,
        NUM_UPGRADES,
        Uint16Array,
    );
    public get lumberCosts() {
        return this._lumberCosts;
    }

    private _oilCosts = this.getArray(
        UGRD_BYTE_OFFSETS.OIL_COST,
        NUM_UPGRADES,
        Uint16Array,
    );
    public get oilCosts() {
        return this._oilCosts;
    }

    private _upgradeIcons = this.getArray(
        UGRD_BYTE_OFFSETS.UPGRADE_ICON,
        NUM_UPGRADES,
        Uint16Array,
    );
    public get upgradeIcons() {
        return this._upgradeIcons;
    }

    private _groupAppliesTos = this.getArray(
        UGRD_BYTE_OFFSETS.GROUP_APPLIES_TO,
        NUM_UPGRADES,
        Uint16Array,
    );
    public get groupAppliesTos() {
        return this._groupAppliesTos;
    }

    private _affectFlags = this.getArray(
        UGRD_BYTE_OFFSETS.AFFECT_FLAGS,
        NUM_UPGRADES,
        Uint32Array,
    );
    public get affectFlags() {
        return this._affectFlags;
    }

    private _upgrades = new Array(NUM_UPGRADES)
        .fill(0)
        .map((_, index) => new PudUpgradeView(index, this));

    public get upgradesDefinitions() {
        return this._upgrades;
    }
}
