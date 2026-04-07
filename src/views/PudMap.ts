import type { Pud } from "../Pud";
import { TERRAIN_TYPES } from "../enums";
import { SectionDimensions } from "../sections/SectionDimensions";
import { SectionEra } from "../sections/SectionEra";
import { SectionEraX } from "../sections/SectionEraX";
import { SectionMtxm } from "../sections/SectionMtxm";
import { SectionSqm } from "../sections/SectionSqm";
import { SectionRegm } from "../sections/SectionRegm";
import { SectionOilMap } from "../sections/SectionOilMap";

export class PudMap {
    constructor(private readonly pud: Pud) {}

    /**
     * Returns the era (tileset) of the map. Checks ERAX first, then ERA.
     */
    public get era(): TERRAIN_TYPES {
        const erax = this.pud.getSection(SectionEraX);
        if (erax) return erax.terrainId as TERRAIN_TYPES;

        const era = this.pud.getSection(SectionEra);
        if (era) return era.terrainId as TERRAIN_TYPES;

        return TERRAIN_TYPES.FOREST;
    }

    public set era(value: TERRAIN_TYPES) {
        // Try ERAX first (often used), then ERA.
        const erax = this.pud.getSection(SectionEraX);
        if (erax) {
            erax.terrainId = value;
        } else {
            const era = this.pud.getSection(SectionEra);
            if (era) era.terrainId = value;
            else throw new Error("No ERA or ERAX section found");
        }
    }

    public get dimensions(): { width: number; height: number } {
        const dim = this.pud.getSection(SectionDimensions);
        return {
            width: dim?.width ?? 0,
            height: dim?.height ?? 0,
        };
    }

    public set dimensions(value: { width: number; height: number }) {
        const dim = this.pud.getSection(SectionDimensions);
        if (!dim) throw new Error("DIM section missing");
        dim.width = value.width;
        dim.height = value.height;
    }

    public get width(): number {
        return this.dimensions.width;
    }

    public get height(): number {
        return this.dimensions.height;
    }

    /**
     * Map Tiles (MTXM)
     */
    public get tiles(): Uint16Array {
        const mtxm = this.pud.getSection(SectionMtxm);
        if (!mtxm) return new Uint16Array(0);
        return mtxm.tiles;
    }

    /**
     * Movement Map (SQM)
     */
    public get movement(): Uint16Array {
        const sqm = this.pud.getSection(SectionSqm);
        if (!sqm) return new Uint16Array(0);
        return sqm.movementMap;
    }

    /**
     * Action Map (REGM)
     */
    public get actionBits(): Uint16Array {
        const regm = this.pud.getSection(SectionRegm);
        if (!regm) return new Uint16Array(0);
        return regm.actionMap;
    }

    /**
     * Oil Concentration Map (OILM)
     */
    public get oil(): Uint8Array {
        const oilm = this.pud.getSection(SectionOilMap);
        if (!oilm) return new Uint8Array(0);
        return oilm.oilMap;
    }
}
