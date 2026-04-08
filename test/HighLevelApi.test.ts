import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { Pud } from "../src/index";
import {
    PLAYER_CONTROLLER,
    PLAYER_SIDES,
    TERRAIN_TYPES,
    UNIT_TYPES,
    SPELL_NAMES,
    UPGRADE_NAMES,
} from "../src/enums";

describe("High-Level API (Views)", () => {
    it("should provide easy access to PUD Map metadata", () => {
        const fileBytes = readFileSync("test/puds/human1.pud");
        const pud = Pud.fromPudBytes(fileBytes.buffer)._unsafeUnwrap();

        expect((pud.mapType || "").trim()).toBe("WAR2 MAP");
        expect(pud.version).toBe(0x11);

        expect(pud.map.era).toBe(TERRAIN_TYPES.WINTER);
        expect(pud.map.width).toBe(32);
        expect(pud.map.height).toBe(32);

        expect(pud.map.tiles.length).toBe(32 * 32);
        expect(pud.map.movement.length).toBe(32 * 32);
        expect(pud.map.actionBits.length).toBe(32 * 32);
    });

    it("should provide easy access to PUD Player data", () => {
        const fileBytes = readFileSync("test/puds/orc1.pud");
        const pud = Pud.fromPudBytes(fileBytes.buffer)._unsafeUnwrap();

        // Player 0 (Red)
        const player0 = pud.players.red;
        expect(player0.controller).toBe(PLAYER_CONTROLLER.HUMAN);
        expect(player0.race).toBe(PLAYER_SIDES.ORC);

        // Player 1 (Blue)
        const player1 = pud.players.blue;
        expect(player1.controller).toBe(PLAYER_CONTROLLER.COMPUTER_ACTIVE);
        expect(player1.race).toBe(PLAYER_SIDES.HUMAN);

        // Resources
        expect(player1.startingGold).toBe(1000);
        expect(player1.startingLumber).toBe(1000);
        expect(player1.startingOil).toBe(0);

        // Allowed testing
        const canBuildFarm = player1.isUnitAllowed(UNIT_TYPES.PIG_FARM);
        expect(canBuildFarm).toBe(true);

        const canCastHolyVision = player1.isSpellAllowed(
            SPELL_NAMES.HOLY_VISION,
        );
        expect(canCastHolyVision).toBe(true);

        const hasArrows = player1.isUpgradeAllowed(UPGRADE_NAMES.ARROWS_1);
        expect(hasArrows).toBe(true);
    });
});
