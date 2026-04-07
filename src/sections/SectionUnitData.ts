import { Uint16PointReader } from "../PointReader";
import { UnitFlagsReader } from "../UnitFlagsReader";
import { UnitTargetFlagsReader } from "../UnitTargetFlagsReader";
import { HEADER_LENGTH } from "./types";
import { PudStaticSection } from "./base/PudStaticSection";
import { DEFAULT_UNIT_DATA } from "../constants/DefaultUnitData";

const NUM_GRP_FILES = 127;
const NUM_UNITS = 58;
const NUM_BUILDINGS = 52;
const NUM_ALL = NUM_UNITS + NUM_BUILDINGS;

export enum UDTA_BYTE_OFFSETS {
    USE_DEFAULT_DATA = HEADER_LENGTH,
    BUILDSITE_GRP_INDEX = USE_DEFAULT_DATA + 2,
    GRP_IDS_TO_LOAD_ALWAYS = BUILDSITE_GRP_INDEX + NUM_ALL * 2,
    GRP_IDS_TO_LOAD_FOREST = GRP_IDS_TO_LOAD_ALWAYS + NUM_GRP_FILES * 2,
    GRP_IDS_TO_LOAD_WINTER = GRP_IDS_TO_LOAD_FOREST + NUM_GRP_FILES * 2,
    GRP_IDS_TO_LOAD_WASTELAND = GRP_IDS_TO_LOAD_WINTER + NUM_GRP_FILES * 2,
    SIGHT_RANGE = GRP_IDS_TO_LOAD_WASTELAND + NUM_GRP_FILES * 2,
    HIT_POINTS = SIGHT_RANGE + NUM_ALL * 4,
    MAGIC = HIT_POINTS + NUM_ALL * 2,
    BUILD_TIME = MAGIC + NUM_ALL,
    GOLD_COST = BUILD_TIME + NUM_ALL,
    LUMBER_COST = GOLD_COST + NUM_ALL,
    OIL_COST = LUMBER_COST + NUM_ALL,
    SIZE_IN_TILES = OIL_COST + NUM_ALL,
    SELECT_BOX_SIZE = SIZE_IN_TILES + NUM_ALL * 4,
    ATTACK_RANGE = SELECT_BOX_SIZE + NUM_ALL * 4,
    AI_REACT_RANGE = ATTACK_RANGE + NUM_ALL,
    REACT_RANGE = AI_REACT_RANGE + NUM_ALL,
    ARMOR = REACT_RANGE + NUM_ALL,
    SELECTABLE = ARMOR + NUM_ALL,
    PRIORITY = SELECTABLE + NUM_ALL,
    BASIC_DAMAGE = PRIORITY + NUM_ALL,
    PIERCING_DAMAGE = BASIC_DAMAGE + NUM_ALL,
    UPGRADEABLE_WEAPONS = PIERCING_DAMAGE + NUM_ALL,
    UPGRADEABLE_ARMORS = UPGRADEABLE_WEAPONS + NUM_ALL,
    MISSLE_WEAPON_TYPE = UPGRADEABLE_ARMORS + NUM_ALL,
    UNIT_RENDER_TYPE = MISSLE_WEAPON_TYPE + NUM_ALL,
    DECAY_RATE = UNIT_RENDER_TYPE + NUM_ALL,
    AI_ANNOY_FACTOR = DECAY_RATE + NUM_ALL,
    MOUSE2_ACTION = AI_ANNOY_FACTOR + NUM_ALL,
    KILL_POINTS_VALUE = MOUSE2_ACTION + NUM_UNITS,
    CAN_TARGET_FLAGS = KILL_POINTS_VALUE + NUM_ALL * 2,
    UNIT_FLAGS = CAN_TARGET_FLAGS + NUM_ALL,
    GRP_IDS_TO_LOAD_SWAMP = UNIT_FLAGS + NUM_ALL * 4,
}

const SECTION_DIMENSIONS_CODE = "UDTA";
const SECTION_DIMENSIONS_LENGTH = 5950;

import { PudUnitDataView } from "../views/PudUnitDataView";

export class SectionUnitData extends PudStaticSection {
    public constructor(data: ArrayBuffer) {
        super(SECTION_DIMENSIONS_CODE, SECTION_DIMENSIONS_LENGTH, data);
    }

    public static fromBytes(bytes: Uint8Array, offset = 0) {
        return super.fromBytesInternal(
            SECTION_DIMENSIONS_CODE,
            SECTION_DIMENSIONS_LENGTH,
            SectionUnitData,
            bytes,
            offset,
        );
    }

    public get useDefault() {
        return this._view.getUint16(HEADER_LENGTH, true) === 1;
    }

    public set useDefault(value: boolean) {
        this._view.setUint16(HEADER_LENGTH, value ? 1 : 0, true);
    }

    private _buildsiteGRPIds = this.getArray(
        UDTA_BYTE_OFFSETS.BUILDSITE_GRP_INDEX,
        NUM_ALL,
        Uint16Array,
    );

    public get buildsiteGRPIds() {
        return this._buildsiteGRPIds;
    }

    private _grpsIdsToLoadAlways = this.getArray(
        UDTA_BYTE_OFFSETS.GRP_IDS_TO_LOAD_ALWAYS,
        NUM_GRP_FILES,
        Uint16Array,
    );

    public get grpsIdsToLoadAlways() {
        return this._grpsIdsToLoadAlways;
    }

    private _grpsIdsToLoadForest = this.getArray(
        UDTA_BYTE_OFFSETS.GRP_IDS_TO_LOAD_FOREST,
        NUM_GRP_FILES,
        Uint16Array,
    );

    public get grpsIdsToLoadForest() {
        return this._grpsIdsToLoadForest;
    }

    private _grpsIdsToLoadWinter = this.getArray(
        UDTA_BYTE_OFFSETS.GRP_IDS_TO_LOAD_WINTER,
        NUM_GRP_FILES,
        Uint16Array,
    );

    public get grpsIdsToLoadWinter() {
        return this._grpsIdsToLoadWinter;
    }

    private _grpsIdsToLoadWasteland = this.getArray(
        UDTA_BYTE_OFFSETS.GRP_IDS_TO_LOAD_WASTELAND,
        NUM_GRP_FILES,
        Uint16Array,
    );

    public get grpsIdsToLoadWasteland() {
        return this._grpsIdsToLoadWasteland;
    }

    public get sightRanges() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.SIGHT_RANGE,
            NUM_ALL,
            Uint32Array,
        );
    }

    public get hitPoints() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.HIT_POINTS,
            NUM_ALL,
            Uint16Array,
        );
    }

    public get magic() {
        return this.getArray(UDTA_BYTE_OFFSETS.MAGIC, NUM_ALL, Uint8Array);
    }

    public get buildTimes() {
        return this.getArray(UDTA_BYTE_OFFSETS.BUILD_TIME, NUM_ALL, Uint8Array);
    }

    public get goldCosts() {
        return this.getArray(UDTA_BYTE_OFFSETS.GOLD_COST, NUM_ALL, Uint8Array);
    }

    public get lumberCosts() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.LUMBER_COST,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get oilCosts() {
        return this.getArray(UDTA_BYTE_OFFSETS.OIL_COST, NUM_ALL, Uint8Array);
    }

    private _unitTileSizes = new Array(NUM_ALL)
        .fill(0)
        .map(
            (_, index) =>
                new Uint16PointReader(
                    this._data,
                    UDTA_BYTE_OFFSETS.SIZE_IN_TILES + index * 4,
                ),
        );

    public get unitTileSizes() {
        return this._unitTileSizes;
    }

    private _unitSelectBoxSizes = new Array(NUM_ALL)
        .fill(0)
        .map(
            (_, index) =>
                new Uint16PointReader(
                    this._data,
                    UDTA_BYTE_OFFSETS.SELECT_BOX_SIZE + index * 4,
                ),
        );

    public get unitSelectBoxSizes() {
        return this._unitSelectBoxSizes;
    }

    public get attackRanges() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.ATTACK_RANGE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get aiReactRanges() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.AI_REACT_RANGE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get reactRanges() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.REACT_RANGE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get armorValues() {
        return this.getArray(UDTA_BYTE_OFFSETS.ARMOR, NUM_ALL, Uint8Array);
    }

    public get multiSelectables() {
        return this.getArray(UDTA_BYTE_OFFSETS.SELECTABLE, NUM_ALL, Uint8Array);
    }

    public get aiPriorities() {
        return this.getArray(UDTA_BYTE_OFFSETS.PRIORITY, NUM_ALL, Uint8Array);
    }

    public get basicDamages() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.BASIC_DAMAGE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get piercingDamages() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.PIERCING_DAMAGE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get weaponsUpgradeables() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.UPGRADEABLE_WEAPONS,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get armorUpgreadeables() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.UPGRADEABLE_ARMORS,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get missleWeaponTypeIds() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.MISSLE_WEAPON_TYPE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get unitRenderTypes() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.UNIT_RENDER_TYPE,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get unitDecayRates() {
        return this.getArray(UDTA_BYTE_OFFSETS.DECAY_RATE, NUM_ALL, Uint8Array);
    }

    public get aiAnnoyFactors() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.AI_ANNOY_FACTOR,
            NUM_ALL,
            Uint8Array,
        );
    }

    public get secondMouseActions() {
        return this.getArray(
            UDTA_BYTE_OFFSETS.MOUSE2_ACTION,
            NUM_UNITS,
            Uint8Array,
        );
    }

    private _pointValues = this.getArray(
        UDTA_BYTE_OFFSETS.KILL_POINTS_VALUE,
        NUM_ALL,
        Uint16Array,
    );

    public get pointValues() {
        return this._pointValues;
    }

    private _canTargetFlags = new Array(NUM_ALL)
        .fill(0)
        .map(
            (_, index) =>
                new UnitTargetFlagsReader(
                    this._data,
                    UDTA_BYTE_OFFSETS.CAN_TARGET_FLAGS + index,
                ),
        );

    public get canTargetFlags() {
        return this._canTargetFlags;
    }

    private _unitFlags = new Array(NUM_ALL)
        .fill(0)
        .map(
            (_, index) =>
                new UnitFlagsReader(
                    this._data,
                    UDTA_BYTE_OFFSETS.UNIT_FLAGS + index * 4,
                ),
        );

    public get unitFlags() {
        return this._unitFlags;
    }

    private _grpsIdsToLoadSwamp = this.getArray(
        UDTA_BYTE_OFFSETS.GRP_IDS_TO_LOAD_SWAMP,
        NUM_GRP_FILES,
        Uint16Array,
    );

    public get grpsIdsToLoadSwamp() {
        return this._grpsIdsToLoadSwamp;
    }

    private _units = new Array(NUM_ALL)
        .fill(0)
        .map((_, index) => new PudUnitDataView(index, this));

    public get unitsDefinitions() {
        return this._units;
    }

    public applyDefaults() {
        this.useDefault = false;

        for (let i = 0; i < NUM_ALL; i++) {
            this._view.setUint16(
                UDTA_BYTE_OFFSETS.BUILDSITE_GRP_INDEX + i * 2,
                DEFAULT_UNIT_DATA.buildSiteGRPIds[i],
                true,
            );

            this._view.setUint32(
                UDTA_BYTE_OFFSETS.SIGHT_RANGE + i * 4,
                DEFAULT_UNIT_DATA.sightRanges[i],
                true,
            );

            this._view.setUint16(
                UDTA_BYTE_OFFSETS.HIT_POINTS + i * 2,
                DEFAULT_UNIT_DATA.hitPoints[i],
                true,
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.MAGIC + i,
                DEFAULT_UNIT_DATA.magic[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.BUILD_TIME + i,
                DEFAULT_UNIT_DATA.buildTimes[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.GOLD_COST + i,
                DEFAULT_UNIT_DATA.goldCosts[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.LUMBER_COST + i,
                DEFAULT_UNIT_DATA.lumberCosts[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.OIL_COST + i,
                DEFAULT_UNIT_DATA.oilCosts[i],
            );

            this.unitTileSizes[i].x = DEFAULT_UNIT_DATA.unitTileSizes[i].x;
            this.unitTileSizes[i].y = DEFAULT_UNIT_DATA.unitTileSizes[i].y;

            this.unitSelectBoxSizes[i].x =
                DEFAULT_UNIT_DATA.unitSelectBoxSizes[i].x;
            this.unitSelectBoxSizes[i].y =
                DEFAULT_UNIT_DATA.unitSelectBoxSizes[i].y;

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.ATTACK_RANGE + i,
                DEFAULT_UNIT_DATA.attackRanges[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.AI_REACT_RANGE + i,
                DEFAULT_UNIT_DATA.aiReactRanges[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.REACT_RANGE + i,
                DEFAULT_UNIT_DATA.reactRanges[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.ARMOR + i,
                DEFAULT_UNIT_DATA.armorValues[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.SELECTABLE + i,
                DEFAULT_UNIT_DATA.multiSelectables[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.PRIORITY + i,
                DEFAULT_UNIT_DATA.aiPriorities[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.BASIC_DAMAGE + i,
                DEFAULT_UNIT_DATA.basicDamages[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.PIERCING_DAMAGE + i,
                DEFAULT_UNIT_DATA.piercingDamages[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.UPGRADEABLE_WEAPONS + i,
                DEFAULT_UNIT_DATA.weaponsUpgradeables[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.UPGRADEABLE_ARMORS + i,
                DEFAULT_UNIT_DATA.armorUpgreadeables[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.MISSLE_WEAPON_TYPE + i,
                DEFAULT_UNIT_DATA.missleWeaponTypeIds[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.UNIT_RENDER_TYPE + i,
                DEFAULT_UNIT_DATA.unitDomainTypes[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.DECAY_RATE + i,
                DEFAULT_UNIT_DATA.unitDecayRates[i],
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.AI_ANNOY_FACTOR + i,
                DEFAULT_UNIT_DATA.aiAnnoyFactors[i],
            );

            if (i < NUM_UNITS) {
                this._view.setUint8(
                    UDTA_BYTE_OFFSETS.MOUSE2_ACTION + i,
                    DEFAULT_UNIT_DATA.secondMouseActions[i],
                );
            }

            this._view.setUint16(
                UDTA_BYTE_OFFSETS.KILL_POINTS_VALUE + i * 2,
                DEFAULT_UNIT_DATA.pointValues[i],
                true,
            );

            this._view.setUint8(
                UDTA_BYTE_OFFSETS.CAN_TARGET_FLAGS + i,
                DEFAULT_UNIT_DATA.canTargetFlags[i],
            );

            this._view.setUint32(
                UDTA_BYTE_OFFSETS.UNIT_FLAGS + i * 4,
                DEFAULT_UNIT_DATA.unitFlags[i],
                true,
            );
        }
    }
}
