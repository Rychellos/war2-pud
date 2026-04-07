import { BitFlagReader } from "../../BitflagReader";

export class AllowedUnitsAndBuildingFlagReader extends BitFlagReader {
    constructor(data: ArrayBuffer, offset: number) {
        super(data, 4, offset);
    }

    // bit0
    get footman() {
        return this.getFlag(0);
    }
    set footman(v: boolean) {
        this.setFlag(0, v);
    }

    get grunt() {
        return this.getFlag(0);
    }
    set grunt(v: boolean) {
        this.setFlag(0, v);
    }

    // bit1
    get peasant() {
        return this.getFlag(1);
    }
    set peasant(v: boolean) {
        this.setFlag(1, v);
    }

    get peon() {
        return this.getFlag(1);
    }
    set peon(v: boolean) {
        this.setFlag(1, v);
    }

    // bit2
    get ballista() {
        return this.getFlag(2);
    }
    set ballista(v: boolean) {
        this.setFlag(2, v);
    }

    get catapult() {
        return this.getFlag(2);
    }
    set catapult(v: boolean) {
        this.setFlag(2, v);
    }

    // bit3
    get knight() {
        return this.getFlag(3);
    }
    set knight(v: boolean) {
        this.setFlag(3, v);
    }

    get ogre() {
        return this.getFlag(3);
    }
    set ogre(v: boolean) {
        this.setFlag(3, v);
    }

    // bit4
    get archer() {
        return this.getFlag(4);
    }
    set archer(v: boolean) {
        this.setFlag(4, v);
    }

    get trollAxeThrower() {
        return this.getFlag(4);
    }
    set trollAxeThrower(v: boolean) {
        this.setFlag(4, v);
    }

    // bit5
    get mage() {
        return this.getFlag(5);
    }
    set mage(v: boolean) {
        this.setFlag(5, v);
    }

    get deathKnight() {
        return this.getFlag(5);
    }
    set deathKnight(v: boolean) {
        this.setFlag(5, v);
    }

    // bit6
    get oilTanker() {
        return this.getFlag(6);
    }
    set oilTanker(v: boolean) {
        this.setFlag(6, v);
    }

    // bit7
    get destroyer() {
        return this.getFlag(7);
    }
    set destroyer(v: boolean) {
        this.setFlag(7, v);
    }

    // bit8
    get transport() {
        return this.getFlag(8);
    }
    set transport(v: boolean) {
        this.setFlag(8, v);
    }

    // bit9
    get battleship() {
        return this.getFlag(9);
    }
    set battleship(v: boolean) {
        this.setFlag(9, v);
    }

    get ogreJuggernaught() {
        return this.getFlag(9);
    }
    set ogreJuggernaught(v: boolean) {
        this.setFlag(9, v);
    }

    // bit10
    get gnomishSubmarine() {
        return this.getFlag(10);
    }
    set gnomishSubmarine(v: boolean) {
        this.setFlag(10, v);
    }

    get giantTurtle() {
        return this.getFlag(10);
    }
    set giantTurtle(v: boolean) {
        this.setFlag(10, v);
    }

    // bit11
    get gnomishFlyingMachine() {
        return this.getFlag(11);
    }
    set gnomishFlyingMachine(v: boolean) {
        this.setFlag(11, v);
    }

    get goblinZeppelin() {
        return this.getFlag(11);
    }
    set goblinZeppelin(v: boolean) {
        this.setFlag(11, v);
    }

    // bit12
    get gryphonRider() {
        return this.getFlag(12);
    }
    set gryphonRider(v: boolean) {
        this.setFlag(12, v);
    }

    get dragon() {
        return this.getFlag(12);
    }
    set dragon(v: boolean) {
        this.setFlag(12, v);
    }

    // bit13 (unused)
    get unused13() {
        return this.getFlag(13);
    }
    set unused13(v: boolean) {
        this.setFlag(13, v);
    }

    // bit14
    get dwarvenDemolitionSquad() {
        return this.getFlag(14);
    }
    set dwarvenDemolitionSquad(v: boolean) {
        this.setFlag(14, v);
    }

    get goblinSappers() {
        return this.getFlag(14);
    }
    set goblinSappers(v: boolean) {
        this.setFlag(14, v);
    }

    // bit15
    get gryphonAviary() {
        return this.getFlag(15);
    }
    set gryphonAviary(v: boolean) {
        this.setFlag(15, v);
    }

    get dragonRoost() {
        return this.getFlag(15);
    }
    set dragonRoost(v: boolean) {
        this.setFlag(15, v);
    }

    // bit16
    get farm() {
        return this.getFlag(16);
    }
    set farm(v: boolean) {
        this.setFlag(16, v);
    }

    // bit17
    get barracks() {
        return this.getFlag(17);
    }
    set barracks(v: boolean) {
        this.setFlag(17, v);
    }

    // bit18
    get lumberMill() {
        return this.getFlag(18);
    }
    set lumberMill(v: boolean) {
        this.setFlag(18, v);
    }

    get trollLumberMill() {
        return this.getFlag(18);
    }
    set trollLumberMill(v: boolean) {
        this.setFlag(18, v);
    }

    // bit19
    get stables() {
        return this.getFlag(19);
    }
    set stables(v: boolean) {
        this.setFlag(19, v);
    }

    get ogreMound() {
        return this.getFlag(19);
    }
    set ogreMound(v: boolean) {
        this.setFlag(19, v);
    }

    // bit20
    get mageTower() {
        return this.getFlag(20);
    }
    set mageTower(v: boolean) {
        this.setFlag(20, v);
    }

    get templeOfTheDamned() {
        return this.getFlag(20);
    }
    set templeOfTheDamned(v: boolean) {
        this.setFlag(20, v);
    }

    // bit21
    get foundry() {
        return this.getFlag(21);
    }
    set foundry(v: boolean) {
        this.setFlag(21, v);
    }

    // bit22
    get refinery() {
        return this.getFlag(22);
    }
    set refinery(v: boolean) {
        this.setFlag(22, v);
    }

    // bit23
    get gnomishInventor() {
        return this.getFlag(23);
    }
    set gnomishInventor(v: boolean) {
        this.setFlag(23, v);
    }

    get goblinAlchemist() {
        return this.getFlag(23);
    }
    set goblinAlchemist(v: boolean) {
        this.setFlag(23, v);
    }

    // bit24
    get church() {
        return this.getFlag(24);
    }
    set church(v: boolean) {
        this.setFlag(24, v);
    }

    get altarOfStorms() {
        return this.getFlag(24);
    }
    set altarOfStorms(v: boolean) {
        this.setFlag(24, v);
    }

    // bit25
    get scoutTower() {
        return this.getFlag(25);
    }
    set scoutTower(v: boolean) {
        this.setFlag(25, v);
    }

    get watchTower() {
        return this.getFlag(25);
    }
    set watchTower(v: boolean) {
        this.setFlag(25, v);
    }

    // bit26
    get townHall() {
        return this.getFlag(26);
    }
    set townHall(v: boolean) {
        this.setFlag(26, v);
    }

    get greatHall() {
        return this.getFlag(26);
    }
    set greatHall(v: boolean) {
        this.setFlag(26, v);
    }

    // bit27
    get keep() {
        return this.getFlag(27);
    }
    set keep(v: boolean) {
        this.setFlag(27, v);
    }

    get stronghold() {
        return this.getFlag(27);
    }
    set stronghold(v: boolean) {
        this.setFlag(27, v);
    }

    // bit28
    get castle() {
        return this.getFlag(28);
    }
    set castle(v: boolean) {
        this.setFlag(28, v);
    }

    get fortress() {
        return this.getFlag(28);
    }
    set fortress(v: boolean) {
        this.setFlag(28, v);
    }

    // bit29
    get blacksmith() {
        return this.getFlag(29);
    }
    set blacksmith(v: boolean) {
        this.setFlag(29, v);
    }

    // bit30
    get shipyard() {
        return this.getFlag(30);
    }
    set shipyard(v: boolean) {
        this.setFlag(30, v);
    }
}
