import { BitFlagReader } from "./BitflagReader";
import { UNIT_FLAGS } from "./enums";

export class UnitFlagsReader extends BitFlagReader {
    constructor(data: ArrayBuffer, offset: number) {
        super(data, 4, offset);
    }

    getFlag(flag: UNIT_FLAGS) {
        return super.getFlag(flag);
    }

    setFlag(flag: UNIT_FLAGS, value: boolean) {
        super.setFlag(flag, value);
    }

    // Is a land unit
    get isLandUnit() {
        return this.getFlag(UNIT_FLAGS.IS_LAND_UNIT);
    }
    set isLandUnit(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_LAND_UNIT, v);
    }

    // Is an air unit
    get isAirUnit() {
        return this.getFlag(UNIT_FLAGS.IS_AIR_UNIT);
    }
    set isAirUnit(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_AIR_UNIT, v);
    }

    // Is a catapult
    get isCatapult() {
        return this.getFlag(UNIT_FLAGS.IS_CATAPULT);
    }
    set isCatapult(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_CATAPULT, v);
    }

    // Is a sea unit
    get isSeaUnit() {
        return this.getFlag(UNIT_FLAGS.IS_SEA_UNIT);
    }
    set isSeaUnit(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_SEA_UNIT, v);
    }

    // Is a critter
    get isCritter() {
        return this.getFlag(UNIT_FLAGS.IS_CRITTER);
    }
    set isCritter(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_CRITTER, v);
    }

    // Is a building
    get isBuilding() {
        return this.getFlag(UNIT_FLAGS.IS_BUILDING);
    }
    set isBuilding(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_BUILDING, v);
    }

    // Is a submarine
    get isSubmarine() {
        return this.getFlag(UNIT_FLAGS.IS_SUBMARINE);
    }
    set isSubmarine(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_SUBMARINE, v);
    }

    // Can see submarine
    get canSeeSubmarine() {
        return this.getFlag(UNIT_FLAGS.IS_DETECTOR);
    }
    set canSeeSubmarine(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_DETECTOR, v);
    }

    // Is a worker
    get isWorker() {
        return this.getFlag(UNIT_FLAGS.IS_WORKER);
    }
    set isWorker(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_WORKER, v);
    }

    // Is a tanker
    get isTanker() {
        return this.getFlag(UNIT_FLAGS.IS_TANKER);
    }
    set isTanker(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_TANKER, v);
    }

    // Is a transport
    get isTransport() {
        return this.getFlag(UNIT_FLAGS.IS_TRANSPORT);
    }
    set isTransport(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_TRANSPORT, v);
    }

    // Is a place to get oil
    get isOilRig() {
        return this.getFlag(UNIT_FLAGS.IS_OIL_PLATFORM);
    }
    set isOilRig(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_OIL_PLATFORM, v);
    }

    // Is a place to store gold
    get isGoldStorage() {
        return this.getFlag(UNIT_FLAGS.IS_GOLD_STORAGE);
    }
    set isGoldStorage(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_GOLD_STORAGE, v);
    }

    // Is a corpse
    get isCorpse() {
        return this.getFlag(UNIT_FLAGS.IS_CORPSE);
    }
    set isCorpse(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_CORPSE, v);
    }

    // Can attack at ground
    get canAttackGround() {
        return this.getFlag(UNIT_FLAGS.CAN_GROUND_ATTACK);
    }
    set canAttackGround(v: boolean) {
        this.setFlag(UNIT_FLAGS.CAN_GROUND_ATTACK, v);
    }

    // Is an undead
    get isUndead() {
        return this.getFlag(UNIT_FLAGS.IS_UNDEAD);
    }
    set isUndead(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_UNDEAD, v);
    }

    // Is a shore building
    get isShoreBuilding() {
        return this.getFlag(UNIT_FLAGS.IS_SHORE_BUILDING);
    }
    set isShoreBuilding(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_SHORE_BUILDING, v);
    }

    // Can cast spells
    get canCastSpells() {
        return this.getFlag(UNIT_FLAGS.CAN_CAST_SPELLS);
    }
    set canCastSpells(v: boolean) {
        this.setFlag(UNIT_FLAGS.CAN_CAST_SPELLS, v);
    }

    // Is a place to store wood
    get isWoodStorage() {
        return this.getFlag(UNIT_FLAGS.IS_WOOD_STORAGE);
    }
    set isWoodStorage(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_WOOD_STORAGE, v);
    }

    // Can attack
    get canAttack() {
        return this.getFlag(UNIT_FLAGS.CAN_ATTACK);
    }
    set canAttack(v: boolean) {
        this.setFlag(UNIT_FLAGS.CAN_ATTACK, v);
    }

    // Is a tower
    get isTower() {
        return this.getFlag(UNIT_FLAGS.IS_TOWER);
    }
    set isTower(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_TOWER, v);
    }

    // Is an oil patch
    get isOilPatch() {
        return this.getFlag(UNIT_FLAGS.IS_OIL_PATCH);
    }
    set isOilPatch(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_OIL_PATCH, v);
    }

    // Is a gold mine
    get isMine() {
        return this.getFlag(UNIT_FLAGS.IS_MINE);
    }
    set isMine(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_MINE, v);
    }

    // Is a hero
    get isHero() {
        return this.getFlag(UNIT_FLAGS.IS_HERO);
    }
    set isHero(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_HERO, v);
    }

    // Is a place to store oil
    get isOilStorage() {
        return this.getFlag(UNIT_FLAGS.IS_OIL_STORAGE);
    }
    set isOilStorage(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_OIL_STORAGE, v);
    }

    // Is killed by invisibility/unholy armor
    get isKilledByInvisibilityOrUnholyArmor() {
        return this.getFlag(UNIT_FLAGS.IS_SAPPERS_OR_DEMOLITION_SQUAD);
    }
    set isKilledByInvisibilityOrUnholyArmor(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_SAPPERS_OR_DEMOLITION_SQUAD, v);
    }

    // Should run when attacked
    get actsLikeCoward() {
        return this.getFlag(UNIT_FLAGS.IS_COWARD);
    }
    set actsLikeCoward(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_COWARD, v);
    }

    // Is organic
    get isOrganic() {
        return this.getFlag(UNIT_FLAGS.IS_ORGANIC);
    }
    set isOrganic(v: boolean) {
        this.setFlag(UNIT_FLAGS.IS_ORGANIC, v);
    }
}
