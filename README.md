# war2-pud

A cross-platform TypeScript library for parsing, manipulating, and generating Warcraft II map (PUD) files. Works seamlessly in both Node.js and browser environments.

## Features

- **Full Read/Write Support:** Parse existing `.pud` files or create new ones from scratch.
- **Cross-Platform:** Usable in Node.js, browsers, and other JS runtimes (uses standard `DataView`/`Uint8Array`).
- **Complete Map Data Access:** Read and modify dimensions, descriptions, terrain (tilesets).
- **Map Layers:** Full access to standard tiles (MTXM), movement mapping (SQM), oil deposits (OILM), and action grids (REGM).
- **Unit Management:** Easy APIs to read, add, and remove units on map.
- **Player Configurations:** Set player races, starting resources (Gold, Lumber, Oil), AI profiles, restricted unit building, spell access, and upgrades.
- **Type-safe:** Built entirely in TypeScript, with enums for Units, Spells, Upgrades, Terrain Types, and more.
- **Result Types:** Uses `neverthrow` for safe byte-parsing error handling.

## Installation

Using `pnpm`, `npm`, or `yarn`:

```bash
pnpm install war2-pud
npm install war2-pud
yarn add war2-pud
```

## Basic Usage

### Parsing an existing PUD file

```typescript
import { promises as fs } from "fs";
import { Pud } from "war2-pud";

async function loadMap() {
    const buffer = await fs.readFile("path/to/my_map.pud");

    // Parse the map data
    const result = Pud.fromPudBytes(buffer);

    if (result.isErr()) {
        console.error("Failed to parse map:", result.error);
        return;
    }

    const pud = result.value;

    console.log(`Map Description: ${pud.description}`);
    console.log(`Dimensions: ${pud.width}x${pud.height}`);
    console.log(`Total Units: ${pud.units.length}`);
}

loadMap();
```

### Modifying and Saving a Map

```typescript
import { promises as fs } from "fs";
import { Pud, TERRAIN_TYPES, UNIT_TYPES, PLAYER_SIDES } from "war2-pud";

async function editMap() {
    // Read and parse
    const buffer = await fs.readFile("example.pud");
    const pud = Pud.fromPudBytes(buffer)._unsafeUnwrap();

    // Change map description
    pud.description = "My Custom Edited Map!";

    // Change terrain to WINTER
    pud.terrain = TERRAIN_TYPES.WINTER;

    // Configure Player 1 (Red)
    const red = pud.players.red;
    red.race = PLAYER_SIDES.ORC;
    red.startingGold = 5000;
    red.startingLumber = 2500;

    // Disallow building Dragons for red
    red.setUnitAllowed(UNIT_TYPES.DRAGON, false);

    // Add a new unit for Red
    pud.addUnit(
        10, // x coordinate
        10, // y coordinate
        UNIT_TYPES.GRUNT,
        red.id,
        0, // extra data / properties
    );

    // Serialize back to binary format
    const outBytes = pud.toBinary();
    await fs.writeFile("edited.pud", outBytes);
}

editMap();
```

### Creating a Map from Scratch

```typescript
import { Pud, TERRAIN_TYPES } from "war2-pud";

// Create a 64x64 FOREST map
const newMap = new Pud(64, 64, TERRAIN_TYPES.FOREST);

newMap.description = "A brand new battlefield.";

const rawPudData = newMap.toBinary();
// Save rawPudData to a file or send to a client
```

## Advanced Usage

### Working with Map Tiles (MTXM/SQM)

```typescript
const { map } = pud;

// Raw access to the tiles array (Uint16Array)
const mapTiles = map.tiles;

// Change the tile at (x: 5, y: 10)
const index = 10 * pud.width + 5;
mapTiles[index] = 0x0015; // Specific tile ID
```

## Contributing

```bash
# Install dependencies
pnpm install

# Run the test suite
pnpm test

# Build the project
pnpm build
```

## License

MIT
