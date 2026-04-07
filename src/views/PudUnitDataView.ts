import { GROUP_FILES_SPECIAl } from "../enums/groupFiles";
import {
    SectionUnitData,
    UDTA_BYTE_OFFSETS,
} from "../sections/SectionUnitData";

const NUM_UNITS = 58;

// These are internal but needed by the view.
// In a full refactor, we might want to move UDTA_BYTE_OFFSETS to its own file too,
// but for now we'll import what we need or reference it.
// Actually, they are not exported from SectionUnitData.
// I'll need to export them or move them.
// I'll move them to src/sections/SectionUnitData.ts as exported if I keep them there,
// or better, move them to a types/constants file.

export class PudUnitDataView {
    constructor(
        private id: number,
        private sectionUnitData: SectionUnitData,
    ) {}

    private get _view(): DataView {
        return (this.sectionUnitData as any)._view;
    }

    // This is a bit ugly because of the private UDTA_BYTE_OFFSETS.
    // I will make UDTA_BYTE_OFFSETS exported in SectionUnitData.ts.

    get buildSiteGRPId(): GROUP_FILES_SPECIAl {
        return this.sectionUnitData.buildsiteGRPIds[this.id];
    }

    set buildSiteGRPId(value: GROUP_FILES_SPECIAl) {
        this.sectionUnitData.buildsiteGRPIds[this.id] = value;
    }

    get sightRange() {
        return this._view.getUint32(
            UDTA_BYTE_OFFSETS.SIGHT_RANGE + this.id * 4,
            true,
        );
    }

    set sightRange(value: number) {
        this._view.setUint32(
            UDTA_BYTE_OFFSETS.SIGHT_RANGE + this.id * 4,
            value,
            true,
        );
    }

    get hitPoints() {
        return this._view.getUint16(
            UDTA_BYTE_OFFSETS.HIT_POINTS + this.id * 2,
            true,
        );
    }

    set hitPoints(value: number) {
        this._view.setUint16(
            UDTA_BYTE_OFFSETS.HIT_POINTS + this.id * 2,
            value,
            true,
        );
    }

    get magic() {
        return Boolean(this._view.getUint8(UDTA_BYTE_OFFSETS.MAGIC + this.id));
    }

    set magic(value: boolean) {
        this._view.setUint8(UDTA_BYTE_OFFSETS.MAGIC + this.id, value ? 1 : 0);
    }

    get buildTime() {
        return this._view.getUint8(UDTA_BYTE_OFFSETS.BUILD_TIME + this.id);
    }

    set buildTime(value: number) {
        this._view.setUint8(UDTA_BYTE_OFFSETS.BUILD_TIME + this.id, value);
    }

    get goldCost() {
        return this._view.getUint8(UDTA_BYTE_OFFSETS.GOLD_COST + this.id);
    }

    set goldCost(value: number) {
        this._view.setUint8(UDTA_BYTE_OFFSETS.GOLD_COST + this.id, value);
    }

    get lumberCost() {
        return this._view.getUint8(UDTA_BYTE_OFFSETS.LUMBER_COST + this.id);
    }

    set lumberCost(value: number) {
        this._view.setUint8(UDTA_BYTE_OFFSETS.LUMBER_COST + this.id, value);
    }

    get oilCost() {
        return this._view.getUint8(UDTA_BYTE_OFFSETS.OIL_COST + this.id);
    }

    set oilCost(value: number) {
        this._view.setUint8(UDTA_BYTE_OFFSETS.OIL_COST + this.id, value);
    }

    get unitTileSize() {
        return this.sectionUnitData.unitTileSizes[this.id];
    }

    get unitSelectBoxSize() {
        return this.sectionUnitData.unitSelectBoxSizes[this.id];
    }

    get attackRange() {
        return this.sectionUnitData.attackRanges[this.id];
    }

    set attackRange(value: number) {
        this.sectionUnitData.attackRanges[this.id] = value;
    }

    get aiReactRange() {
        return this.sectionUnitData.aiReactRanges[this.id];
    }

    set aiReactRange(value: number) {
        this.sectionUnitData.aiReactRanges[this.id] = value;
    }

    get reactRange() {
        return this.sectionUnitData.reactRanges[this.id];
    }

    set reactRange(value: number) {
        this.sectionUnitData.reactRanges[this.id] = value;
    }

    get armor() {
        return this.sectionUnitData.armorValues[this.id];
    }

    set armor(value: number) {
        this.sectionUnitData.armorValues[this.id] = value;
    }

    get selectable() {
        return Boolean(this.sectionUnitData.multiSelectables[this.id]);
    }

    set selectable(value: boolean) {
        this.sectionUnitData.multiSelectables[this.id] = value ? 1 : 0;
    }

    get priority() {
        return this.sectionUnitData.aiPriorities[this.id];
    }

    set priority(value: number) {
        this.sectionUnitData.aiPriorities[this.id] = value;
    }

    get basicDamage() {
        return this.sectionUnitData.basicDamages[this.id];
    }

    set basicDamage(value: number) {
        this.sectionUnitData.basicDamages[this.id] = value;
    }

    get piercingDamage() {
        return this.sectionUnitData.piercingDamages[this.id];
    }

    set piercingDamage(value: number) {
        this.sectionUnitData.piercingDamages[this.id] = value;
    }

    get weaponsUpgradeable() {
        return this.sectionUnitData.weaponsUpgradeables[this.id];
    }

    set weaponsUpgradeable(value: number) {
        this.sectionUnitData.weaponsUpgradeables[this.id] = value;
    }

    get armorUpgradeable() {
        return this.sectionUnitData.armorUpgreadeables[this.id];
    }

    set armorUpgradeable(value: number) {
        this.sectionUnitData.armorUpgreadeables[this.id] = value;
    }

    get missileWeaponType() {
        return this.sectionUnitData.missleWeaponTypeIds[this.id];
    }

    set missileWeaponType(value: number) {
        this.sectionUnitData.missleWeaponTypeIds[this.id] = value;
    }

    get unitRenderType() {
        return this.sectionUnitData.unitRenderTypes[this.id];
    }

    set unitRenderType(value: number) {
        this.sectionUnitData.unitRenderTypes[this.id] = value;
    }

    get decayRate() {
        return this.sectionUnitData.unitDecayRates[this.id];
    }

    set decayRate(value: number) {
        this.sectionUnitData.unitDecayRates[this.id] = value;
    }

    get aiAnnoyFactor() {
        return this.sectionUnitData.aiAnnoyFactors[this.id];
    }

    set aiAnnoyFactor(value: number) {
        this.sectionUnitData.aiAnnoyFactors[this.id] = value;
    }

    get secondMouseAction() {
        if (this.id >= NUM_UNITS) {
            return -1;
        }

        return this.sectionUnitData.secondMouseActions[this.id];
    }

    set secondMouseAction(value: number) {
        if (this.id >= NUM_UNITS) {
            return;
        }

        this.sectionUnitData.secondMouseActions[this.id] = value;
    }

    get pointValue() {
        return this.sectionUnitData.pointValues[this.id];
    }

    set pointValue(value: number) {
        this.sectionUnitData.pointValues[this.id] = value;
    }

    get canTarget() {
        return this.sectionUnitData.canTargetFlags[this.id];
    }

    get unitFlags() {
        return this.sectionUnitData.unitFlags[this.id];
    }
}
