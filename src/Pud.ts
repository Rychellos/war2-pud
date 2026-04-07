import { SectionAI } from "./sections/SectionAI";
import { SectionAllowed } from "./sections/SectionAllowed";
import { SectionDescription } from "./sections/SectionDescription";
import { SectionDimensions } from "./sections/SectionDimensions";
import { SectionEra } from "./sections/SectionEra";
import { SectionEraX } from "./sections/SectionEraX";
import { SectionMtxm } from "./sections/SectionMtxm";
import { SectionOilMap } from "./sections/SectionOilMap";
import { SectionOwners } from "./sections/SectionOwners";
import { SectionRegm } from "./sections/SectionRegm";
import { SectionSide } from "./sections/SectionSide";
import { SectionSqm } from "./sections/SectionSqm";
import { SectionStartingGold } from "./sections/SectionStartingGold";
import { SectionStartingLumber } from "./sections/SectionStartingLumber";
import { SectionStartingOil } from "./sections/SectionStartingOil";
import { SectionType } from "./sections/SectionType";
import { SectionUnit } from "./sections/SectionUnit";
import { PudUnitEntry } from "./views/PudUnitEntry";
import { SectionUnitData } from "./sections/SectionUnitData";
import { SectionUpgrades } from "./sections/SectionUpgrades";
import { SectionVersion } from "./sections/SectionVersion";
import { PudPlayer } from "./views/PudPlayer";
import { PudMap } from "./views/PudMap";
import { PudUpgrades } from "./views/PudUpgrades";
import { TERRAIN_TYPES, UNIT_TYPES } from "./enums";
import { err, ok, Result } from "neverthrow";
import { PudSection } from "./sections/base/PudSection";
import { HEADER_LENGTH } from "./sections/types";
import { PlayerList } from "./views/types";

const SECTION_REGISTRY = [
    { name: "TYPE", length: 24, Constructor: SectionType },
    { name: "VER ", length: 2, Constructor: SectionVersion },
    { name: "DESC", length: 32, Constructor: SectionDescription },
    { name: "OWNR", length: 16, Constructor: SectionOwners },
    { name: "ERA ", length: 2, Constructor: SectionEra },
    { name: "ERAX", length: 2, Constructor: SectionEraX },
    { name: "DIM ", length: 4, Constructor: SectionDimensions },
    { name: "UDTA", length: 5950, Constructor: SectionUnitData },
    { name: "ALOW", length: 384, Constructor: SectionAllowed },
    { name: "UGRD", length: 782, Constructor: SectionUpgrades },
    { name: "SIDE", length: 16, Constructor: SectionSide },
    { name: "SGLD", length: 32, Constructor: SectionStartingGold },
    { name: "SLBR", length: 32, Constructor: SectionStartingLumber },
    { name: "SOIL", length: 32, Constructor: SectionStartingOil },
    { name: "AIPL", length: 16, Constructor: SectionAI },
] as const;

export const PLAYER_NAMES = [
    "red",
    "blue",
    "green",
    "violet",
    "orange",
    "black",
    "white",
    "yellow",
    "unused8",
    "unused9",
    "unused10",
    "unused11",
    "unused12",
    "unused13",
    "unused14",
    "neutral",
];

export class Pud {
    private sections = new Map<string, PudSection>();

    private _players!: PlayerList;
    private _map!: PudMap;
    private _upgrades!: PudUpgrades;

    public constructor(
        width = 64,
        height = 64,
        terrain = TERRAIN_TYPES.FOREST,
    ) {
        this.initSection("TYPE", 24, SectionType);
        this.initSection("VER ", 2, SectionVersion);
        this.initSection("DESC", 32, SectionDescription);
        this.initSection("OWNR", 16, SectionOwners);
        this.initSection("ERA ", 2, SectionEra);
        this.initSection("ERAX", 2, SectionEraX);
        this.initSection("DIM ", 4, SectionDimensions);
        this.initSection("UDTA", 5950, SectionUnitData);
        this.initSection("ALOW", 384, SectionAllowed);
        this.initSection("UGRD", 782, SectionUpgrades);
        this.initSection("SIDE", 16, SectionSide);
        this.initSection("SGLD", 32, SectionStartingGold);
        this.initSection("SLBR", 32, SectionStartingLumber);
        this.initSection("SOIL", 32, SectionStartingOil);
        this.initSection("AIPL", 16, SectionAI);

        // Map Layers
        this.initSection("MTXM", width * height * 2, SectionMtxm);
        this.initSection("SQM ", width * height * 2, SectionSqm);
        this.initSection("OILM", width * height, SectionOilMap);
        this.initSection("REGM", width * height * 2, SectionRegm);

        // Units
        this.sections.set("UNIT", new SectionUnit(0));

        // Default dimensions
        const dim = this.getSection(SectionDimensions);
        if (dim) {
            dim.width = width;
            dim.height = height;
        }

        const era = this.getSection(SectionEra);
        if (era) {
            era.terrainId = terrain;
        }

        const eraX = this.getSection(SectionEraX);
        if (eraX) {
            eraX.terrainId = terrain;
        }

        // Apply Official Unit Defaults
        const udta = this.getSection(SectionUnitData);
        if (udta) {
            udta.applyDefaults();
        }

        this._players = this.getPlayers();
        this._map = new PudMap(this);
        this._upgrades = new PudUpgrades(this);
    }

    private initSection<T extends PudSection>(
        name: string,
        dataLength: number,
        Constructor: new (data: ArrayBuffer) => T,
    ) {
        const buffer = new ArrayBuffer(HEADER_LENGTH + dataLength);
        const section = new Constructor(buffer);

        if (section.name !== name) {
            const view = new DataView(buffer);

            for (let i = 0; i < 4; i++) {
                view.setUint8(i, name.charCodeAt(i));
            }
        }

        this.sections.set(name, section);
    }

    public get players(): PlayerList {
        return this._players;
    }

    public get map() {
        return this._map;
    }

    public get upgrades() {
        return this._upgrades;
    }

    public get mapType(): string | undefined {
        const type = this.getSection(SectionType);

        return type?.mapType;
    }

    public get version(): number | undefined {
        const ver = this.getSection(SectionVersion);

        return ver?.version;
    }

    public get units(): PudUnitEntry[] {
        const unitSection = this.getSectionByName("UNIT") as
            | SectionUnit
            | undefined;

        return unitSection?.units ?? [];
    }

    public get unitData(): SectionUnitData | undefined {
        return this.getSection(SectionUnitData);
    }

    public get era(): TERRAIN_TYPES {
        const era = this.getSection(SectionEra);

        return era ? era.terrainId : TERRAIN_TYPES.FOREST;
    }

    public get description() {
        const desc = this.getSection(SectionDescription);

        return desc ? desc.description : "";
    }

    public set description(value: string) {
        const desc = this.getSection(SectionDescription);

        if (desc) {
            desc.description = value;
        }
    }

    public get terrain() {
        const era = this.getSection(SectionEra);

        return era ? era.terrainId : TERRAIN_TYPES.FOREST;
    }

    public set terrain(value: TERRAIN_TYPES) {
        const era = this.getSection(SectionEra);

        if (era) {
            era.terrainId = value;
        }

        const eraX = this.getSection(SectionEraX);

        if (eraX) {
            eraX.terrainId = value;
        }
    }

    public get width() {
        const dim = this.getSection(SectionDimensions);

        return dim ? dim.width : 0;
    }

    public get height() {
        const dim = this.getSection(SectionDimensions);

        return dim ? dim.height : 0;
    }

    public addUnit(
        x: number,
        y: number,
        type: UNIT_TYPES,
        owner: number,
        extra: number,
    ): PudUnitEntry | undefined {
        const unitSection = this.getSectionByName("UNIT") as
            | SectionUnit
            | undefined;

        return unitSection?.addUnit(x, y, type, owner, extra);
    }

    public removeUnit(index: number): void {
        const unitSection = this.getSectionByName("UNIT") as
            | SectionUnit
            | undefined;

        if (unitSection) {
            const units = unitSection.units;

            if (index >= 0 && index < units.length) {
                unitSection.removeUnit(units[index]);
            }
        }
    }

    public getSection<T extends PudSection>(
        SectionClass: new (data: ArrayBuffer) => T,
    ): T | undefined {
        for (const section of this.sections.values()) {
            if (section instanceof SectionClass) {
                return section;
            }
        }

        const registryEntry = SECTION_REGISTRY.find(
            (entry) => (entry.Constructor as any) === SectionClass,
        );

        if (registryEntry) {
            this.initSection(
                registryEntry.name,
                registryEntry.length,
                SectionClass,
            );

            const newSection = this.sections.get(registryEntry.name);

            if (newSection && "applyDefaults" in newSection) {
                (
                    newSection as PudSection & { applyDefaults(): void }
                ).applyDefaults();
            }

            return newSection as T;
        }

        return undefined;
    }

    public getSectionByName(name: string): PudSection | undefined {
        return this.sections.get(name);
    }

    public getAllSections(): PudSection[] {
        return Array.from(this.sections.values());
    }

    private getPlayers(): PlayerList {
        const players = {} as PlayerList;

        PLAYER_NAMES.forEach((name, index) => {
            players[name as keyof PlayerList] = new PudPlayer(this, index);
        });

        return players;
    }

    public toBinary(): Uint8Array {
        const sections = this.getAllSections();

        for (const section of sections) {
            section.prepareForExport();
        }

        const totalSize = sections.reduce(
            (acc, section) => acc + section.totalLength,
            0,
        );

        const result = new Uint8Array(totalSize);
        let offset = 0;

        for (const section of sections) {
            result.set(new Uint8Array(section.data), offset);
            offset += section.totalLength;
        }

        return result;
    }

    public static fromPudBytes(
        input: Uint8Array | ArrayBuffer,
    ): Result<Pud, Error> {
        let bytes: Uint8Array;

        if (input instanceof ArrayBuffer && !(input instanceof Uint8Array)) {
            bytes = new Uint8Array(input);
        } else if (input instanceof Uint8Array) {
            bytes = new Uint8Array(
                input.buffer,
                input.byteOffset,
                input.byteLength,
            );
        } else {
            bytes = new Uint8Array(input);
        }

        const pud = new Pud();

        pud.sections.clear();

        let offset = 0;
        while (offset < bytes.length) {
            const sectionName = String.fromCharCode(
                ...bytes.slice(offset, offset + 4),
            );

            const dataLength = new DataView(
                bytes.buffer,
                bytes.byteOffset + offset + 4,
                4,
            ).getUint32(0, true);

            const totalLength = HEADER_LENGTH + dataLength;

            const sectionData = bytes.slice(offset, offset + totalLength);

            let section: PudSection | undefined;

            switch (sectionName) {
                case "TYPE":
                    section =
                        SectionType.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "VER ":
                    section =
                        SectionVersion.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "DESC":
                    section =
                        SectionDescription.fromBytes(
                            sectionData,
                        )._unsafeUnwrap();
                    break;
                case "OWNR":
                    section =
                        SectionOwners.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "ERA ":
                    section = SectionEra.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "ERAX":
                    section =
                        SectionEraX.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "DIM ":
                    section =
                        SectionDimensions.fromBytes(
                            sectionData,
                        )._unsafeUnwrap();
                    break;
                case "UDTA":
                    section =
                        SectionUnitData.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "ALOW":
                    section =
                        SectionAllowed.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "UGRD":
                    section =
                        SectionUpgrades.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "SIDE":
                    section =
                        SectionSide.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "SGLD":
                    section =
                        SectionStartingGold.fromBytes(
                            sectionData,
                        )._unsafeUnwrap();
                    break;
                case "SLBR":
                    section =
                        SectionStartingLumber.fromBytes(
                            sectionData,
                        )._unsafeUnwrap();
                    break;
                case "SOIL":
                    section =
                        SectionStartingOil.fromBytes(
                            sectionData,
                        )._unsafeUnwrap();
                    break;
                case "AIPL":
                    section = SectionAI.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "MTXM":
                    section =
                        SectionMtxm.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "SQM ":
                    section = SectionSqm.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "OILM":
                    section =
                        SectionOilMap.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "REGM":
                    section =
                        SectionRegm.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                case "UNIT":
                    section =
                        SectionUnit.fromBytes(sectionData)._unsafeUnwrap();
                    break;
                default:
                    err(new Error(`Unknown section: ${sectionName}`));
                    break;
            }

            if (section) {
                pud.sections.set(sectionName, section);
            }

            offset += totalLength;
        }

        // Initialize views
        pud._players = pud.getPlayers();
        pud._map = new PudMap(pud);
        pud._upgrades = new PudUpgrades(pud);

        return ok(pud);
    }
}
