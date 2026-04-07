import { SectionUpgrades } from "../sections/SectionUpgrades";

export class PudUpgradeView {
    constructor(
        private id: number,
        private sectionUpgrades: SectionUpgrades,
    ) {}

    get upgradeTime() {
        return this.sectionUpgrades.upgradeTimes[this.id];
    }

    set upgradeTime(value: number) {
        this.sectionUpgrades.upgradeTimes[this.id] = value;
    }

    get goldCost() {
        return this.sectionUpgrades.goldCosts[this.id];
    }

    set goldCost(value: number) {
        this.sectionUpgrades.goldCosts[this.id] = value;
    }

    get lumberCost() {
        return this.sectionUpgrades.lumberCosts[this.id];
    }

    set lumberCost(value: number) {
        this.sectionUpgrades.lumberCosts[this.id] = value;
    }

    get oilCost() {
        return this.sectionUpgrades.oilCosts[this.id];
    }

    set oilCost(value: number) {
        this.sectionUpgrades.oilCosts[this.id] = value;
    }

    get upgradeIcon() {
        return this.sectionUpgrades.upgradeIcons[this.id];
    }

    set upgradeIcon(value: number) {
        this.sectionUpgrades.upgradeIcons[this.id] = value;
    }

    get groupAppliesTo() {
        return this.sectionUpgrades.groupAppliesTos[this.id];
    }

    set groupAppliesTo(value: number) {
        this.sectionUpgrades.groupAppliesTos[this.id] = value;
    }

    get affectFlags() {
        return this.sectionUpgrades.affectFlags[this.id];
    }

    set affectFlags(value: number) {
        this.sectionUpgrades.affectFlags[this.id] = value;
    }
}
