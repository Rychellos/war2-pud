import {
    NO_GRP_FILE,
    GROUP_FILES_HUMAN,
    GROUP_FILES_ORC,
    GROUP_FILES_MONSTER,
    GROUP_FILES_OTHER,
    GROUP_FILES_SPECIAl,
} from "../enums/groupFiles";

import {
    BULLET_TYPES,
    UNIT_FLAGS,
    UNIT_TARGETS,
    RIGHT_CLICK_ACTIONS,
    UNIT_DOMAINS,
} from "../enums";

export const DEFAULT_UNIT_DATA = {
    buildSiteGRPIds: [
        GROUP_FILES_SPECIAl.NONE, // FOOTMAN
        GROUP_FILES_SPECIAl.NONE, // GRUNT
        GROUP_FILES_SPECIAl.NONE, // PEASANT
        GROUP_FILES_SPECIAl.NONE, // PEON
        GROUP_FILES_SPECIAl.NONE, // BALLISTA
        GROUP_FILES_SPECIAl.NONE, // CATAPULT
        GROUP_FILES_SPECIAl.NONE, // KNIGHT
        GROUP_FILES_SPECIAl.NONE, // OGRE
        GROUP_FILES_SPECIAl.NONE, // ARCHER
        GROUP_FILES_SPECIAl.NONE, // TROLL_AXETHROWER
        GROUP_FILES_SPECIAl.NONE, // MAGE
        GROUP_FILES_SPECIAl.NONE, // DEATH_KNIGHT
        GROUP_FILES_SPECIAl.NONE, // PALADIN
        GROUP_FILES_SPECIAl.NONE, // OGRE_MAGE
        GROUP_FILES_SPECIAl.NONE, // DWARVEN_DEMOLITION_SQUAD
        GROUP_FILES_SPECIAl.NONE, // GOBLIN_SAPPER
        GROUP_FILES_SPECIAl.NONE, // ATTACK_PEASANT
        GROUP_FILES_SPECIAl.NONE, // ATTACK_PEON
        GROUP_FILES_SPECIAl.NONE, // RANGER
        GROUP_FILES_SPECIAl.NONE, // BERSERKER
        GROUP_FILES_SPECIAl.NONE, // ALLERIA
        GROUP_FILES_SPECIAl.NONE, // TERON_GOREFIEND
        GROUP_FILES_SPECIAl.NONE, // KURDAN_AND_SKY_REE
        GROUP_FILES_SPECIAl.NONE, // DENTARG
        GROUP_FILES_SPECIAl.NONE, // KHADGAR
        GROUP_FILES_SPECIAl.NONE, // GROM_HELLSCREAM
        GROUP_FILES_SPECIAl.NONE, // HUMAN_TANKER
        GROUP_FILES_SPECIAl.NONE, // ORC_TANKER
        GROUP_FILES_SPECIAl.NONE, // HUMAN_TRANSPORT
        GROUP_FILES_SPECIAl.NONE, // ORC_TRANSPORT
        GROUP_FILES_SPECIAl.NONE, // ELVEN_DESTROYER
        GROUP_FILES_SPECIAl.NONE, // TROLL_DESTROYER
        GROUP_FILES_SPECIAl.NONE, // BATTLESHIP
        GROUP_FILES_SPECIAl.NONE, // JUGGERNAUGHT
        GROUP_FILES_SPECIAl.NONE, // UNKNOWN
        GROUP_FILES_SPECIAl.NONE, // DEATHWING
        GROUP_FILES_SPECIAl.NONE, // UNKNOWN
        GROUP_FILES_SPECIAl.NONE, // UNKNOWN
        GROUP_FILES_SPECIAl.NONE, // GNOMISH_SUBMARINE
        GROUP_FILES_SPECIAl.NONE, // GIANT_TURTLE
        GROUP_FILES_SPECIAl.NONE, // GNOMISH_FLYING_MACHINE
        GROUP_FILES_SPECIAl.NONE, // GOBLIN_ZEPPLIN
        GROUP_FILES_SPECIAl.NONE, // GRYPHON_RIDER
        GROUP_FILES_SPECIAl.NONE, // DRAGON
        GROUP_FILES_SPECIAl.NONE, // TURALYON
        GROUP_FILES_SPECIAl.NONE, // EYE_OF_KILROGG
        GROUP_FILES_SPECIAl.NONE, // DANATH
        GROUP_FILES_SPECIAl.NONE, // KHORGATH_BLADEFIST
        GROUP_FILES_SPECIAl.NONE, // UNKNOWN
        GROUP_FILES_SPECIAl.NONE, // CHO_GALL
        GROUP_FILES_SPECIAl.NONE, // LOTHAR
        GROUP_FILES_SPECIAl.NONE, // GUL_DAN
        GROUP_FILES_SPECIAl.NONE, // UTHER_LIGHTBRINGER
        GROUP_FILES_SPECIAl.NONE, // ZULJIN
        GROUP_FILES_SPECIAl.NONE, // UNKNOWN
        GROUP_FILES_SPECIAl.NONE, // SKELETON
        GROUP_FILES_SPECIAl.NONE, // DAEMON
        GROUP_FILES_SPECIAl.NONE, // CRITTER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // FARM
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // PIG_FARM
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // HUMAN_BARRACKS
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // ORC_BARRACKS
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // CHURCH
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // ALTAR_OF_STORMS
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // SCOUT_TOWER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // WATCH_TOWER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // STABLES
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // OGRE_MOUND
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // GNOMISH_INVENTOR
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // GOBLIN_ALCHEMIST
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // GRYPHON_AVIARY
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // DRAGON_ROOST
        GROUP_FILES_SPECIAl.SHIPYARD_H1_GRP_INDEX, // HUMAN_SHIPYARD
        GROUP_FILES_SPECIAl.SHIPYARD_O1_GRP_INDEX, // ORC_SHIPYARD
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // TOWN_HALL
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // GREAT_HALL
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // ELVEN_LUMBER_MILL
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // TROLL_LUMBER_MILL
        GROUP_FILES_SPECIAl.FOUNDRY_H1_GRP_INDEX, // HUMAN_FOUNDRY
        GROUP_FILES_SPECIAl.FOUNDRY_O1_GRP_INDEX, // ORC_FOUNDRY
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // MAGE_TOWER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // TEMPLE_OF_THE_DAMNED
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // HUMAN_BLACKSMITH
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // ORC_BLACKSMITH
        GROUP_FILES_SPECIAl.REFINERY_H1_GRP_INDEX, // HUMAN_REFINERY
        GROUP_FILES_SPECIAl.FOUNDRY_O1_GRP_INDEX, // ORC_REFINERY
        GROUP_FILES_SPECIAl.OILRIG_H1_GRP_INDEX, // HUMAN_OIL_WELL
        GROUP_FILES_SPECIAl.OILRIG_O1_GRP_INDEX, // ORC_OIL_WELL
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // KEEP
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // STRONGHOLD
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // CASTLE
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // FORTRESS
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // GOLD_MINE
        GROUP_FILES_SPECIAl.NONE, // OIL_PATCH
        GROUP_FILES_SPECIAl.NONE, // HUMAN_START
        GROUP_FILES_SPECIAl.NONE, // ORC_START
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // HUMAN_GUARD_TOWER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // ORC_GUARD_TOWER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // HUMAN_CANNON_TOWER
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // ORC_CANNON_TOWER
        GROUP_FILES_SPECIAl.NONE, // CIRCLE_OF_POWER
        GROUP_FILES_SPECIAl.NONE, // DARK_PORTAL
        GROUP_FILES_SPECIAl.GENERIC_BUILD_GRP_INDEX, // RUNESTONE
        GROUP_FILES_SPECIAl.WALL_BUILD_GRP_INDEX, // HUMAN_WALL
        GROUP_FILES_SPECIAl.WALL_BUILD_GRP_INDEX, // ORC_WALL
        GROUP_FILES_SPECIAl.NONE, // CORPSE
        GROUP_FILES_SPECIAl.NONE, // DESTROYED_BUILDING_1x1
        GROUP_FILES_SPECIAl.NONE, // DESTROYED_BUILDING_2x2
        GROUP_FILES_SPECIAl.NONE, // DESTROYED_BUILDING_3x3
        GROUP_FILES_SPECIAl.NONE, // DESTROYED_BUILDING_4x4
    ],
    alwaysLoadedGRPIds: [
        GROUP_FILES_HUMAN.FOOTMAN, // FOOTMAN
        GROUP_FILES_ORC.GRUNT, // GRUNT
        GROUP_FILES_HUMAN.PEASANT, // PEASANT
        GROUP_FILES_ORC.PEON, // PEON
        GROUP_FILES_HUMAN.BALLISTA, // BALLISTA
        GROUP_FILES_ORC.CATAPULT, // CATAPULT
        GROUP_FILES_HUMAN.KNIGHT, // KNIGHT
        GROUP_FILES_ORC.OGRE, // OGRE
        GROUP_FILES_HUMAN.ARCHER, // ARCHER
        GROUP_FILES_ORC.TROLL_AXE_THROWER, // TROLL_AXETHROWER
        GROUP_FILES_HUMAN.MAGE, // MAGE
        GROUP_FILES_ORC.DEATH_KNIGHT, // DEATH_KNIGHT
        GROUP_FILES_HUMAN.KNIGHT | 0x8000, // PALADIN
        GROUP_FILES_ORC.OGRE | 0x8000, // OGRE_MAGE
        GROUP_FILES_HUMAN.DWARVEN_DEMOLITION_SQUAD, // DWARVEN_DEMOLITION_SQUAD
        GROUP_FILES_ORC.GOBLIN_SAPPERS, // GOBLIN_SAPPER
        GROUP_FILES_HUMAN.PEASANT | 0x8000, // ATTACK_PEASANT
        GROUP_FILES_ORC.PEON | 0x8000, // ATTACK_PEON
        GROUP_FILES_HUMAN.ARCHER | 0x8000, // RANGER
        GROUP_FILES_ORC.TROLL_AXE_THROWER | 0x8000, // BERSERKER
        GROUP_FILES_HUMAN.ARCHER | 0x8000, // ALLERIA
        GROUP_FILES_ORC.DEATH_KNIGHT | 0x8000, // TERON_GOREFIEND
        GROUP_FILES_HUMAN.GRYPHON_RIDER, // KURDAN_AND_SKY_REE
        GROUP_FILES_ORC.OGRE | 0x8000, // DENTARG
        GROUP_FILES_HUMAN.MAGE | 0x8000, // KHADGAR
        GROUP_FILES_ORC.GRUNT | 0x8000, // GROM_HELLSCREAM
        GROUP_FILES_HUMAN.TANKER, // HUMAN_TANKER
        GROUP_FILES_ORC.TANKER, // ORC_TANKER
        GROUP_FILES_HUMAN.TRANSPORT, // HUMAN_TRANSPORT
        GROUP_FILES_ORC.TRANSPORT, // ORC_TRANSPORT
        GROUP_FILES_HUMAN.ELVEN_DESTROYER, // ELVEN_DESTROYER
        GROUP_FILES_ORC.TROLL_DESTROYER, // TROLL_DESTROYER
        GROUP_FILES_HUMAN.BATTLESHIP, // BATTLESHIP
        GROUP_FILES_ORC.OGRE_JUGGERNOUGHT, // JUGGERNAUGHT
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_ORC.DRAGON, // DEATHWING
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // GNOMISH_SUBMARINE
        NO_GRP_FILE, // GIANT_TURTLE
        GROUP_FILES_HUMAN.GNOMISH_FLYING_MACHINE, // GNOMISH_FLYING_MACHINE
        GROUP_FILES_ORC.GOBLIN_ZEPPELIN, // GOBLIN_ZEPPLIN
        GROUP_FILES_HUMAN.GRYPHON_RIDER | 0x8000, // GRYPHON_RIDER
        GROUP_FILES_ORC.DRAGON | 0x8000, // DRAGON
        GROUP_FILES_HUMAN.KNIGHT | 0x8000, // TURALYON
        GROUP_FILES_ORC.EYE_OF_KILROGG, // EYE_OF_KILROGG
        GROUP_FILES_HUMAN.FOOTMAN | 0x8000, // DANATH
        GROUP_FILES_ORC.GRUNT, // KHORGATH_BLADEFIST
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_ORC.OGRE | 0x8000, // CHO_GALL
        GROUP_FILES_HUMAN.KNIGHT | 0x8000, // LOTHAR
        GROUP_FILES_ORC.DEATH_KNIGHT | 0x8000, // GUL_DAN
        GROUP_FILES_HUMAN.KNIGHT | 0x8000, // UTHER_LIGHTBRINGER
        GROUP_FILES_ORC.TROLL_AXE_THROWER | 0x8000, // ZULJIN
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_ORC.SKELETON, // SKELETON
        GROUP_FILES_MONSTER.DEMON, // DAEMON
        NO_GRP_FILE, // CRITTER
        NO_GRP_FILE, // FARM
        NO_GRP_FILE, // PIG_FARM
        NO_GRP_FILE, // HUMAN_BARRACKS
        NO_GRP_FILE, // ORC_BARRACKS
        NO_GRP_FILE, // CHURCH
        NO_GRP_FILE, // ALTAR_OF_STORMS
        NO_GRP_FILE, // SCOUT_TOWER
        NO_GRP_FILE, // WATCH_TOWER
        NO_GRP_FILE, // STABLES
        NO_GRP_FILE, // OGRE_MOUND
        NO_GRP_FILE, // GNOMISH_INVENTOR
        NO_GRP_FILE, // GOBLIN_ALCHEMIST
        NO_GRP_FILE, // GRYPHON_AVIARY
        NO_GRP_FILE, // DRAGON_ROOST
        NO_GRP_FILE, // HUMAN_SHIPYARD
        NO_GRP_FILE, // ORC_SHIPYARD
        NO_GRP_FILE, // TOWN_HALL
        NO_GRP_FILE, // GREAT_HALL
        NO_GRP_FILE, // ELVEN_LUMBER_MILL
        NO_GRP_FILE, // TROLL_LUMBER_MILL
        NO_GRP_FILE, // HUMAN_FOUNDRY
        NO_GRP_FILE, // ORC_FOUNDRY
        NO_GRP_FILE, // MAGE_TOWER
        NO_GRP_FILE, // TEMPLE_OF_THE_DAMNED
        NO_GRP_FILE, // HUMAN_BLACKSMITH
        NO_GRP_FILE, // ORC_BLACKSMITH
        NO_GRP_FILE, // HUMAN_REFINERY
        NO_GRP_FILE, // ORC_REFINERY
        NO_GRP_FILE, // HUMAN_OIL_WELL
        NO_GRP_FILE, // ORC_OIL_WELL
        NO_GRP_FILE, // KEEP
        NO_GRP_FILE, // STRONGHOLD
        NO_GRP_FILE, // CASTLE
        NO_GRP_FILE, // FORTRESS
        NO_GRP_FILE, // GOLD_MINE
        NO_GRP_FILE, // OIL_PATCH
        GROUP_FILES_HUMAN.START_LOCATION, // HUMAN_START
        GROUP_FILES_ORC.START_LOCATION, // ORC_START
        NO_GRP_FILE, // HUMAN_GUARD_TOWER
        NO_GRP_FILE, // ORC_GUARD_TOWER
        NO_GRP_FILE, // HUMAN_CANNON_TOWER
        NO_GRP_FILE, // ORC_CANNON_TOWER
        NO_GRP_FILE, // CIRCLE_OF_POWER
        NO_GRP_FILE, // DARK_PORTAL
        NO_GRP_FILE, // RUNESTONE
        NO_GRP_FILE, // HUMAN_WALL
        NO_GRP_FILE, // ORC_WALL
        GROUP_FILES_OTHER.CORPSE, // CORPSE
        NO_GRP_FILE, // DESTROYED_BUILDING_1x1
        NO_GRP_FILE, // DESTROYED_BUILDING_2x2
        NO_GRP_FILE, // DESTROYED_BUILDING_3x3
        NO_GRP_FILE, // DESTROYED_BUILDING_4x4
    ],
    forestGRPIds: [
        NO_GRP_FILE, // FOOTMAN
        NO_GRP_FILE, // GRUNT
        NO_GRP_FILE, // PEASANT
        NO_GRP_FILE, // PEON
        NO_GRP_FILE, // BALLISTA
        NO_GRP_FILE, // CATAPULT
        NO_GRP_FILE, // KNIGHT
        NO_GRP_FILE, // OGRE
        NO_GRP_FILE, // ARCHER
        NO_GRP_FILE, // TROLL_AXETHROWER
        NO_GRP_FILE, // MAGE
        NO_GRP_FILE, // DEATH_KNIGHT
        NO_GRP_FILE, // PALADIN
        NO_GRP_FILE, // OGRE_MAGE
        NO_GRP_FILE, // DWARVEN_DEMOLITION_SQUAD
        NO_GRP_FILE, // GOBLIN_SAPPER
        NO_GRP_FILE, // ATTACK_PEASANT
        NO_GRP_FILE, // ATTACK_PEON
        NO_GRP_FILE, // RANGER
        NO_GRP_FILE, // BERSERKER
        NO_GRP_FILE, // ALLERIA
        NO_GRP_FILE, // TERON_GOREFIEND
        NO_GRP_FILE, // KURDAN_AND_SKY_REE
        NO_GRP_FILE, // DENTARG
        NO_GRP_FILE, // KHADGAR
        NO_GRP_FILE, // GROM_HELLSCREAM
        NO_GRP_FILE, // HUMAN_TANKER
        NO_GRP_FILE, // ORC_TANKER
        NO_GRP_FILE, // HUMAN_TRANSPORT
        NO_GRP_FILE, // ORC_TRANSPORT
        NO_GRP_FILE, // ELVEN_DESTROYER
        NO_GRP_FILE, // TROLL_DESTROYER
        NO_GRP_FILE, // BATTLESHIP
        NO_GRP_FILE, // JUGGERNAUGHT
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // DEATHWING
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_HUMAN.GNOMISH_SUBMARINE, // GNOMISH_SUBMARINE
        GROUP_FILES_ORC.GIANT_TURTLE, // GIANT_TURTLE
        NO_GRP_FILE, // GNOMISH_FLYING_MACHINE
        NO_GRP_FILE, // GOBLIN_ZEPPLIN
        NO_GRP_FILE, // GRYPHON_RIDER
        NO_GRP_FILE, // DRAGON
        NO_GRP_FILE, // TURALYON
        NO_GRP_FILE, // EYE_OF_KILROGG
        NO_GRP_FILE, // DANATH
        NO_GRP_FILE, // KHORGATH_BLADEFIST
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // CHO_GALL
        NO_GRP_FILE, // LOTHAR
        NO_GRP_FILE, // GUL_DAN
        NO_GRP_FILE, // UTHER_LIGHTBRINGER
        NO_GRP_FILE, // ZULJIN
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // SKELETON
        NO_GRP_FILE, // DAEMON
        GROUP_FILES_MONSTER.SHEEP, // CRITTER
        GROUP_FILES_HUMAN.FARM, // FARM
        GROUP_FILES_ORC.PIG_FARM, // PIG_FARM
        GROUP_FILES_HUMAN.BARRACKS, // HUMAN_BARRACKS
        GROUP_FILES_ORC.BARRACKS, // ORC_BARRACKS
        GROUP_FILES_HUMAN.CHURCH, // CHURCH
        GROUP_FILES_ORC.ALTAR_OF_STORMS, // ALTAR_OF_STORMS
        GROUP_FILES_HUMAN.SCOUT_TOWER, // SCOUT_TOWER
        GROUP_FILES_ORC.WATCH_TOWER, // WATCH_TOWER
        GROUP_FILES_HUMAN.STABLES, // STABLES
        GROUP_FILES_ORC.OGRE_MOUND, // OGRE_MOUND
        GROUP_FILES_HUMAN.GNOMISH_INVENTOR, // GNOMISH_INVENTOR
        GROUP_FILES_ORC.GOBLIN_ALCHEMIST, // GOBLIN_ALCHEMIST
        GROUP_FILES_HUMAN.GRYPHON_AVIARY, // GRYPHON_AVIARY
        GROUP_FILES_ORC.DRAGON_ROOST, // DRAGON_ROOST
        GROUP_FILES_HUMAN.SHIPYARD, // HUMAN_SHIPYARD
        GROUP_FILES_ORC.SHIPYARD, // ORC_SHIPYARD
        GROUP_FILES_HUMAN.TOWN_HALL, // TOWN_HALL
        GROUP_FILES_ORC.GREAT_HALL, // GREAT_HALL
        GROUP_FILES_HUMAN.ELVEN_LUMBER_MILL, // ELVEN_LUMBER_MILL
        GROUP_FILES_ORC.TROLL_LUMBER_MILL, // TROLL_LUMBER_MILL
        GROUP_FILES_HUMAN.FOUNDRY, // HUMAN_FOUNDRY
        GROUP_FILES_ORC.FOUNDRY, // ORC_FOUNDRY
        GROUP_FILES_HUMAN.MAGE_TOWER, // MAGE_TOWER
        GROUP_FILES_ORC.TEMPLE_OF_THE_DAMNED, // TEMPLE_OF_THE_DAMNED
        GROUP_FILES_HUMAN.BLACKSMITH, // HUMAN_BLACKSMITH
        GROUP_FILES_ORC.BLACKSMITH, // ORC_BLACKSMITH
        GROUP_FILES_HUMAN.REFINERY, // HUMAN_REFINERY
        GROUP_FILES_ORC.REFINERY, // ORC_REFINERY
        GROUP_FILES_HUMAN.OIL_PLATFORM, // HUMAN_OIL_WELL
        GROUP_FILES_ORC.OIL_PLATFORM, // ORC_OIL_WELL
        GROUP_FILES_HUMAN.KEEP, // KEEP
        GROUP_FILES_ORC.STRONGHOLD, // STRONGHOLD
        GROUP_FILES_HUMAN.CASTLE, // CASTLE
        GROUP_FILES_ORC.FORTRESS, // FORTRESS
        GROUP_FILES_OTHER.MINE, // GOLD_MINE
        GROUP_FILES_OTHER.OIL_PATCH, // OIL_PATCH
        NO_GRP_FILE, // HUMAN_START
        NO_GRP_FILE, // ORC_START
        GROUP_FILES_HUMAN.GUARD_TOWER, // HUMAN_GUARD_TOWER
        GROUP_FILES_ORC.GUARD_TOWER, // ORC_GUARD_TOWER
        GROUP_FILES_HUMAN.CANNON_TOWER, // HUMAN_CANNON_TOWER
        GROUP_FILES_ORC.CANNON_TOWER, // ORC_CANNON_TOWER
        GROUP_FILES_OTHER.CIRCLE_OF_POWER, // CIRCLE_OF_POWER
        GROUP_FILES_OTHER.DARK_PORTAL, // DARK_PORTAL
        GROUP_FILES_OTHER.RUNESTONE, // RUNESTONE
        GROUP_FILES_OTHER.WALL_UNIT, // HUMAN_WALL
        GROUP_FILES_OTHER.WALL_UNIT, // ORC_WALL
        NO_GRP_FILE, // CORPSE
        GROUP_FILES_OTHER.WALL_DEATH, // DESTROYED_BUILDING_1x1
        GROUP_FILES_OTHER.BUILDING_DEATH, // DESTROYED_BUILDING_2x2
        GROUP_FILES_OTHER.BUILDING_DEATH | 0x8000, // DESTROYED_BUILDING_3x3
        GROUP_FILES_OTHER.BUILDING_DEATH | 0x8000, // DESTROYED_BUILDING_4x4
    ],
    winterGRPIds: [
        NO_GRP_FILE, // FOOTMAN
        NO_GRP_FILE, // GRUNT
        NO_GRP_FILE, // PEASANT
        NO_GRP_FILE, // PEON
        NO_GRP_FILE, // BALLISTA
        NO_GRP_FILE, // CATAPULT
        NO_GRP_FILE, // KNIGHT
        NO_GRP_FILE, // OGRE
        NO_GRP_FILE, // ARCHER
        NO_GRP_FILE, // TROLL_AXETHROWER
        NO_GRP_FILE, // MAGE
        NO_GRP_FILE, // DEATH_KNIGHT
        NO_GRP_FILE, // PALADIN
        NO_GRP_FILE, // OGRE_MAGE
        NO_GRP_FILE, // DWARVEN_DEMOLITION_SQUAD
        NO_GRP_FILE, // GOBLIN_SAPPER
        NO_GRP_FILE, // ATTACK_PEASANT
        NO_GRP_FILE, // ATTACK_PEON
        NO_GRP_FILE, // RANGER
        NO_GRP_FILE, // BERSERKER
        NO_GRP_FILE, // ALLERIA
        NO_GRP_FILE, // TERON_GOREFIEND
        NO_GRP_FILE, // KURDAN_AND_SKY_REE
        NO_GRP_FILE, // DENTARG
        NO_GRP_FILE, // KHADGAR
        NO_GRP_FILE, // GROM_HELLSCREAM
        NO_GRP_FILE, // HUMAN_TANKER
        NO_GRP_FILE, // ORC_TANKER
        NO_GRP_FILE, // HUMAN_TRANSPORT
        NO_GRP_FILE, // ORC_TRANSPORT
        NO_GRP_FILE, // ELVEN_DESTROYER
        NO_GRP_FILE, // TROLL_DESTROYER
        NO_GRP_FILE, // BATTLESHIP
        NO_GRP_FILE, // JUGGERNAUGHT
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // DEATHWING
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_HUMAN.GNOMISH_SUBMARINE, // GNOMISH_SUBMARINE
        GROUP_FILES_ORC.GIANT_TURTLE, // GIANT_TURTLE
        NO_GRP_FILE, // GNOMISH_FLYING_MACHINE
        NO_GRP_FILE, // GOBLIN_ZEPPLIN
        NO_GRP_FILE, // GRYPHON_RIDER
        NO_GRP_FILE, // DRAGON
        NO_GRP_FILE, // TURALYON
        NO_GRP_FILE, // EYE_OF_KILROGG
        NO_GRP_FILE, // DANATH
        NO_GRP_FILE, // KHORGATH_BLADEFIST
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // CHO_GALL
        NO_GRP_FILE, // LOTHAR
        NO_GRP_FILE, // GUL_DAN
        NO_GRP_FILE, // UTHER_LIGHTBRINGER
        NO_GRP_FILE, // ZULJIN
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // SKELETON
        NO_GRP_FILE, // DAEMON
        GROUP_FILES_MONSTER.SEAL, // CRITTER
        GROUP_FILES_HUMAN.FARM_WINTER, // FARM
        GROUP_FILES_ORC.PIG_FARM_WINTER, // PIG_FARM
        GROUP_FILES_HUMAN.BARRACKS_WINTER, // HUMAN_BARRACKS
        GROUP_FILES_ORC.BARRACKS_WINTER, // ORC_BARRACKS
        GROUP_FILES_HUMAN.CHURCH_WINTER, // CHURCH
        GROUP_FILES_ORC.ALTAR_OF_STORMS_WINTER, // ALTAR_OF_STORMS
        GROUP_FILES_HUMAN.SCOUT_TOWER_WINTER, // SCOUT_TOWER
        GROUP_FILES_ORC.WATCH_TOWER_WINTER, // WATCH_TOWER
        GROUP_FILES_HUMAN.STABLES_WINTER, // STABLES
        GROUP_FILES_ORC.OGRE_MOUND_WINTER, // OGRE_MOUND
        GROUP_FILES_HUMAN.GNOMISH_INVENTOR_WINTER, // GNOMISH_INVENTOR
        GROUP_FILES_ORC.GOBLIN_ALCHEMIST_WINTER, // GOBLIN_ALCHEMIST
        GROUP_FILES_HUMAN.GRYPHON_AVIARY_WINTER, // GRYPHON_AVIARY
        GROUP_FILES_ORC.DRAGON_ROOST_WINTER, // DRAGON_ROOST
        GROUP_FILES_HUMAN.SHIPYARD_WINTER, // HUMAN_SHIPYARD
        GROUP_FILES_ORC.SHIPYARD_WINTER, // ORC_SHIPYARD
        GROUP_FILES_HUMAN.TOWN_HALL_WINTER, // TOWN_HALL
        GROUP_FILES_ORC.GREAT_HALL_WINTER, // GREAT_HALL
        GROUP_FILES_HUMAN.ELVEN_LUMBER_MILL_WINTER, // ELVEN_LUMBER_MILL
        GROUP_FILES_ORC.TROLL_LUMBER_MILL_WINTER, // TROLL_LUMBER_MILL
        GROUP_FILES_HUMAN.FOUNDRY_WINTER, // HUMAN_FOUNDRY
        GROUP_FILES_ORC.FOUNDRY_WINTER, // ORC_FOUNDRY
        GROUP_FILES_HUMAN.MAGE_TOWER_WINTER, // MAGE_TOWER
        GROUP_FILES_ORC.TEMPLE_OF_THE_DAMNED_WINTER, // TEMPLE_OF_THE_DAMNED
        GROUP_FILES_HUMAN.BLACKSMITH_WINTER, // HUMAN_BLACKSMITH
        GROUP_FILES_ORC.BLACKSMITH_WINTER, // ORC_BLACKSMITH
        GROUP_FILES_HUMAN.REFINERY_WINTER, // HUMAN_REFINERY
        GROUP_FILES_ORC.REFINERY_WINTER, // ORC_REFINERY
        GROUP_FILES_HUMAN.OIL_PLATFORM_WINTER, // HUMAN_OIL_WELL
        GROUP_FILES_ORC.OIL_PLATFORM_WINTER, // ORC_OIL_WELL
        GROUP_FILES_HUMAN.KEEP_WINTER, // KEEP
        GROUP_FILES_ORC.STRONGHOLD_WINTER, // STRONGHOLD
        GROUP_FILES_HUMAN.CASTLE_WINTER, // CASTLE
        GROUP_FILES_ORC.FORTRESS_WINTER, // FORTRESS
        GROUP_FILES_OTHER.MINE_WINTER, // GOLD_MINE
        GROUP_FILES_OTHER.OIL_PATCH, // OIL_PATCH
        NO_GRP_FILE, // HUMAN_START
        NO_GRP_FILE, // ORC_START
        GROUP_FILES_HUMAN.GUARD_TOWER_WINTER, // HUMAN_GUARD_TOWER
        GROUP_FILES_ORC.GUARD_TOWER_WINTER, // ORC_GUARD_TOWER
        GROUP_FILES_HUMAN.CANNON_TOWER_WINTER, // HUMAN_CANNON_TOWER
        GROUP_FILES_ORC.CANNON_TOWER_WINTER, // ORC_CANNON_TOWER
        GROUP_FILES_OTHER.CIRCLE_OF_POWER, // CIRCLE_OF_POWER
        GROUP_FILES_OTHER.DARK_PORTAL_WINTER, // DARK_PORTAL
        GROUP_FILES_OTHER.RUNESTONE_WINTER, // RUNESTONE
        GROUP_FILES_OTHER.WALL_UNIT_WINTER, // HUMAN_WALL
        GROUP_FILES_OTHER.WALL_UNIT_WINTER, // ORC_WALL
        NO_GRP_FILE, // CORPSE
        GROUP_FILES_OTHER.WALL_DEATH_WINTER, // DESTROYED_BUILDING_1x1
        GROUP_FILES_OTHER.BUILDING_DEATH_WINTER, // DESTROYED_BUILDING_2x2
        GROUP_FILES_OTHER.BUILDING_DEATH_WINTER | 0x8000, // DESTROYED_BUILDING_3x3
        GROUP_FILES_OTHER.BUILDING_DEATH_WINTER | 0x8000, // DESTROYED_BUILDING_4x4
    ],
    wastelandGRPIds: [
        NO_GRP_FILE, // FOOTMAN
        NO_GRP_FILE, // GRUNT
        NO_GRP_FILE, // PEASANT
        NO_GRP_FILE, // PEON
        NO_GRP_FILE, // BALLISTA
        NO_GRP_FILE, // CATAPULT
        NO_GRP_FILE, // KNIGHT
        NO_GRP_FILE, // OGRE
        NO_GRP_FILE, // ARCHER
        NO_GRP_FILE, // TROLL_AXETHROWER
        NO_GRP_FILE, // MAGE
        NO_GRP_FILE, // DEATH_KNIGHT
        NO_GRP_FILE, // PALADIN
        NO_GRP_FILE, // OGRE_MAGE
        NO_GRP_FILE, // DWARVEN_DEMOLITION_SQUAD
        NO_GRP_FILE, // GOBLIN_SAPPER
        NO_GRP_FILE, // ATTACK_PEASANT
        NO_GRP_FILE, // ATTACK_PEON
        NO_GRP_FILE, // RANGER
        NO_GRP_FILE, // BERSERKER
        NO_GRP_FILE, // ALLERIA
        NO_GRP_FILE, // TERON_GOREFIEND
        NO_GRP_FILE, // KURDAN_AND_SKY_REE
        NO_GRP_FILE, // DENTARG
        NO_GRP_FILE, // KHADGAR
        NO_GRP_FILE, // GROM_HELLSCREAM
        NO_GRP_FILE, // HUMAN_TANKER
        NO_GRP_FILE, // ORC_TANKER
        NO_GRP_FILE, // HUMAN_TRANSPORT
        NO_GRP_FILE, // ORC_TRANSPORT
        NO_GRP_FILE, // ELVEN_DESTROYER
        NO_GRP_FILE, // TROLL_DESTROYER
        NO_GRP_FILE, // BATTLESHIP
        NO_GRP_FILE, // JUGGERNAUGHT
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // DEATHWING
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_HUMAN.GNOMISH_SUBMARINE_WASTELAND, // GNOMISH_SUBMARINE
        GROUP_FILES_ORC.GIANT_TURTLE_WASTELAND, // GIANT_TURTLE
        NO_GRP_FILE, // GNOMISH_FLYING_MACHINE
        NO_GRP_FILE, // GOBLIN_ZEPPLIN
        NO_GRP_FILE, // GRYPHON_RIDER
        NO_GRP_FILE, // DRAGON
        NO_GRP_FILE, // TURALYON
        NO_GRP_FILE, // EYE_OF_KILROGG
        NO_GRP_FILE, // DANATH
        NO_GRP_FILE, // KHORGATH_BLADEFIST
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // CHO_GALL
        NO_GRP_FILE, // LOTHAR
        NO_GRP_FILE, // GUL_DAN
        NO_GRP_FILE, // UTHER_LIGHTBRINGER
        NO_GRP_FILE, // ZULJIN
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // SKELETON
        NO_GRP_FILE, // DAEMON
        GROUP_FILES_MONSTER.BOAR, // CRITTER
        GROUP_FILES_HUMAN.FARM_WASTELAND, // FARM
        GROUP_FILES_ORC.PIG_FARM_WASTELAND, // PIG_FARM
        GROUP_FILES_HUMAN.BARRACKS, // HUMAN_BARRACKS
        GROUP_FILES_ORC.BARRACKS, // ORC_BARRACKS
        GROUP_FILES_HUMAN.CHURCH, // CHURCH
        GROUP_FILES_ORC.ALTAR_OF_STORMS, // ALTAR_OF_STORMS
        GROUP_FILES_HUMAN.SCOUT_TOWER, // SCOUT_TOWER
        GROUP_FILES_ORC.WATCH_TOWER, // WATCH_TOWER
        GROUP_FILES_HUMAN.STABLES, // STABLES
        GROUP_FILES_ORC.OGRE_MOUND, // OGRE_MOUND
        GROUP_FILES_HUMAN.GNOMISH_INVENTOR, // GNOMISH_INVENTOR
        GROUP_FILES_ORC.GOBLIN_ALCHEMIST, // GOBLIN_ALCHEMIST
        GROUP_FILES_HUMAN.GRYPHON_AVIARY, // GRYPHON_AVIARY
        GROUP_FILES_ORC.DRAGON_ROOST, // DRAGON_ROOST
        GROUP_FILES_HUMAN.SHIPYARD, // HUMAN_SHIPYARD
        GROUP_FILES_ORC.SHIPYARD, // ORC_SHIPYARD
        GROUP_FILES_HUMAN.TOWN_HALL, // TOWN_HALL
        GROUP_FILES_ORC.GREAT_HALL, // GREAT_HALL
        GROUP_FILES_HUMAN.ELVEN_LUMBER_MILL_WASTELAND, // ELVEN_LUMBER_MILL
        GROUP_FILES_ORC.TROLL_LUMBER_MILL_WASTELAND, // TROLL_LUMBER_MILL
        GROUP_FILES_HUMAN.FOUNDRY, // HUMAN_FOUNDRY
        GROUP_FILES_ORC.FOUNDRY, // ORC_FOUNDRY
        GROUP_FILES_HUMAN.MAGE_TOWER, // MAGE_TOWER
        GROUP_FILES_ORC.TEMPLE_OF_THE_DAMNED, // TEMPLE_OF_THE_DAMNED
        GROUP_FILES_HUMAN.BLACKSMITH, // HUMAN_BLACKSMITH
        GROUP_FILES_ORC.BLACKSMITH, // ORC_BLACKSMITH
        GROUP_FILES_HUMAN.REFINERY, // HUMAN_REFINERY
        GROUP_FILES_ORC.REFINERY, // ORC_REFINERY
        GROUP_FILES_HUMAN.OIL_PLATFORM_WASTELAND, // HUMAN_OIL_WELL
        GROUP_FILES_ORC.OIL_PLATFORM_WASTELAND, // ORC_OIL_WELL
        GROUP_FILES_HUMAN.KEEP, // KEEP
        GROUP_FILES_ORC.STRONGHOLD, // STRONGHOLD
        GROUP_FILES_HUMAN.CASTLE, // CASTLE
        GROUP_FILES_ORC.FORTRESS, // FORTRESS
        GROUP_FILES_OTHER.MINE_WASTELAND, // GOLD_MINE
        GROUP_FILES_OTHER.OIL_PATCH_WASTELAND, // OIL_PATCH
        NO_GRP_FILE, // HUMAN_START
        NO_GRP_FILE, // ORC_START
        GROUP_FILES_HUMAN.GUARD_TOWER, // HUMAN_GUARD_TOWER
        GROUP_FILES_ORC.GUARD_TOWER, // ORC_GUARD_TOWER
        GROUP_FILES_HUMAN.CANNON_TOWER, // HUMAN_CANNON_TOWER
        GROUP_FILES_ORC.CANNON_TOWER, // ORC_CANNON_TOWER
        GROUP_FILES_OTHER.CIRCLE_OF_POWER, // CIRCLE_OF_POWER
        GROUP_FILES_OTHER.DARK_PORTAL_WASTELAND, // DARK_PORTAL
        GROUP_FILES_OTHER.RUNESTONE, // RUNESTONE
        GROUP_FILES_OTHER.WALL_UNIT_WASTELAND, // HUMAN_WALL
        GROUP_FILES_OTHER.WALL_UNIT_WASTELAND, // ORC_WALL
        NO_GRP_FILE, // CORPSE
        GROUP_FILES_OTHER.WALL_DEATH_WASTELAND, // DESTROYED_BUILDING_1x1
        GROUP_FILES_OTHER.BUILDING_DEATH_WASTELAND, // DESTROYED_BUILDING_2x2
        GROUP_FILES_OTHER.BUILDING_DEATH_WASTELAND | 0x8000, // DESTROYED_BUILDING_3x3
        GROUP_FILES_OTHER.BUILDING_DEATH_WASTELAND | 0x8000, // DESTROYED_BUILDING_4x4
    ],
    sightRanges: [
        4, 4, 4, 4, 9, 9, 4, 4, 5, 5, 9, 9, 5, 5, 4, 4, 4, 4, 6, 6, 9, 9, 9, 6,
        9, 5, 4, 4, 4, 4, 8, 8, 8, 8, 0, 9, 4, 4, 5, 5, 9, 9, 6, 6, 6, 3, 6, 5,
        0, 5, 5, 8, 5, 6, 0, 3, 5, 2, 3, 3, 3, 3, 3, 3, 9, 9, 3, 3, 3, 3, 3, 3,
        3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 9, 9, 3, 0, 0, 0,
        9, 9, 9, 9, 0, 0, 4, 1, 1, 1, 2, 2, 3, 3,
    ],
    hitPoints: [
        60, 60, 30, 30, 110, 110, 90, 90, 40, 40, 60, 60, 90, 90, 40, 40, 30,
        30, 50, 50, 120, 180, 250, 300, 120, 240, 90, 90, 150, 150, 100, 100,
        150, 150, 0, 800, 60, 60, 60, 60, 150, 150, 100, 100, 180, 100, 220,
        240, 0, 100, 90, 40, 90, 40, 0, 40, 60, 5, 400, 400, 800, 800, 700, 700,
        100, 100, 500, 500, 500, 500, 500, 500, 1100, 1100, 1200, 1200, 600,
        600, 750, 750, 500, 500, 775, 775, 600, 600, 650, 650, 1400, 1400, 1600,
        1600, 25500, 0, 0, 0, 130, 130, 160, 160, 0, 5000, 5000, 40, 40, 255,
        255, 255, 255, 255,
    ],
    magic: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    buildTimes: [
        60, 60, 45, 45, 250, 250, 90, 90, 70, 70, 120, 120, 90, 90, 200, 200,
        45, 45, 70, 70, 70, 120, 250, 90, 120, 60, 50, 50, 70, 70, 90, 90, 140,
        140, 0, 250, 60, 60, 100, 100, 65, 65, 250, 250, 90, 0, 60, 60, 0, 100,
        100, 120, 100, 70, 0, 0, 0, 0, 100, 100, 200, 200, 175, 175, 60, 60,
        150, 150, 150, 150, 150, 150, 200, 200, 255, 255, 150, 150, 175, 175,
        125, 125, 200, 200, 225, 225, 200, 200, 200, 200, 200, 200, 150, 0, 0,
        0, 140, 140, 190, 190, 0, 0, 175, 30, 30, 0, 0, 0, 0, 0,
    ],
    goldCosts: [
        60, 60, 40, 40, 90, 90, 80, 80, 50, 50, 120, 120, 80, 80, 70, 70, 40,
        40, 50, 50, 50, 120, 250, 80, 120, 60, 40, 40, 60, 60, 70, 70, 100, 100,
        0, 250, 40, 40, 80, 80, 50, 50, 250, 250, 80, 0, 60, 60, 0, 110, 90,
        120, 90, 50, 0, 0, 0, 0, 50, 50, 70, 70, 90, 90, 55, 55, 100, 100, 100,
        100, 100, 100, 80, 80, 120, 120, 60, 60, 70, 70, 100, 100, 80, 80, 80,
        80, 70, 70, 200, 200, 250, 250, 0, 0, 0, 0, 50, 50, 100, 100, 0, 0, 90,
        2, 2, 0, 0, 0, 0, 0,
    ],
    lumberCosts: [
        0, 0, 0, 0, 30, 30, 10, 10, 5, 5, 0, 0, 10, 10, 25, 25, 0, 0, 5, 5, 5,
        0, 0, 10, 0, 0, 20, 20, 20, 20, 35, 35, 50, 50, 0, 0, 0, 0, 15, 15, 10,
        10, 0, 0, 10, 0, 0, 0, 0, 5, 10, 0, 10, 5, 0, 0, 0, 0, 25, 25, 45, 45,
        50, 50, 20, 20, 30, 30, 40, 40, 40, 40, 45, 45, 80, 80, 45, 45, 40, 40,
        20, 20, 45, 45, 35, 35, 45, 45, 100, 100, 120, 120, 0, 0, 0, 0, 15, 15,
        30, 30, 0, 0, 50, 1, 1, 0, 0, 0, 0, 0,
    ],
    oilCosts: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 50, 50, 70, 70, 100, 100, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 0, 0, 10, 10, 20, 20, 0, 0, 20, 20,
        50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    unitTileSizes: [
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 4,
            y: 4,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
        {
            x: 2,
            y: 2,
        },
        {
            x: 3,
            y: 3,
        },
        {
            x: 4,
            y: 4,
        },
    ],
    unitSelectBoxSizes: [
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 33,
            y: 33,
        },
        {
            x: 36,
            y: 36,
        },
        {
            x: 33,
            y: 33,
        },
        {
            x: 39,
            y: 39,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 32,
            y: 32,
        },
        {
            x: 37,
            y: 37,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 33,
            y: 33,
        },
        {
            x: 36,
            y: 36,
        },
        {
            x: 33,
            y: 33,
        },
        {
            x: 39,
            y: 39,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 33,
            y: 33,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 70,
            y: 70,
        },
        {
            x: 70,
            y: 70,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 71,
            y: 71,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 71,
            y: 71,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 33,
            y: 33,
        },
        {
            x: 42,
            y: 42,
        },
        {
            x: 36,
            y: 36,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 126,
            y: 126,
        },
        {
            x: 127,
            y: 127,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 127,
            y: 127,
        },
        {
            x: 127,
            y: 127,
        },
        {
            x: 127,
            y: 127,
        },
        {
            x: 127,
            y: 127,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 127,
            y: 127,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 31,
            y: 31,
        },
        {
            x: 63,
            y: 63,
        },
        {
            x: 95,
            y: 95,
        },
        {
            x: 127,
            y: 127,
        },
    ],
    attackRanges: [
        1, 1, 1, 1, 8, 8, 1, 1, 4, 4, 2, 3, 1, 1, 1, 1, 1, 1, 4, 4, 7, 4, 5, 1,
        6, 1, 1, 1, 1, 1, 4, 4, 6, 6, 0, 5, 1, 1, 4, 4, 1, 1, 4, 4, 1, 1, 1, 1,
        0, 1, 1, 3, 1, 5, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        6, 6, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    aiReactRanges: [
        6, 6, 6, 6, 11, 11, 6, 6, 7, 7, 11, 11, 7, 7, 4, 4, 6, 6, 9, 9, 7, 11,
        8, 6, 11, 6, 0, 0, 0, 0, 10, 10, 10, 10, 0, 8, 20, 20, 7, 7, 19, 19, 8,
        8, 7, 20, 6, 6, 0, 7, 7, 10, 7, 8, 0, 4, 7, 20, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 6, 6, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    reactRanges: [
        4, 4, 4, 4, 9, 9, 4, 4, 5, 5, 9, 9, 5, 5, 2, 2, 4, 4, 6, 6, 5, 9, 6, 4,
        9, 4, 0, 0, 0, 0, 8, 8, 8, 8, 0, 6, 10, 10, 5, 5, 15, 15, 6, 6, 5, 10,
        4, 4, 0, 5, 5, 8, 5, 6, 0, 2, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 6, 6, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    armorValues: [
        2, 2, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 5, 2, 6, 8,
        3, 8, 10, 10, 0, 0, 10, 10, 15, 15, 0, 10, 2, 2, 0, 0, 2, 2, 5, 5, 10,
        0, 8, 8, 0, 0, 4, 0, 4, 0, 0, 0, 2, 0, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 20, 20, 20, 20, 0, 0, 20,
        0, 0, 0, 0, 0, 0, 0,
    ],
    multiSelectables: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    aiPriorities: [
        60, 60, 50, 50, 70, 70, 63, 63, 55, 55, 70, 70, 65, 65, 55, 55, 50, 50,
        57, 57, 55, 70, 65, 63, 70, 60, 50, 50, 70, 70, 65, 65, 63, 63, 0, 65,
        40, 40, 60, 60, 40, 40, 65, 65, 65, 0, 60, 60, 0, 65, 65, 70, 65, 55, 0,
        55, 63, 37, 20, 20, 30, 30, 15, 15, 55, 55, 15, 15, 15, 15, 15, 15, 30,
        30, 35, 35, 25, 25, 15, 15, 35, 35, 15, 15, 25, 25, 20, 20, 37, 37, 40,
        40, 0, 0, 0, 0, 40, 40, 40, 40, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0,
    ],
    basicDamages: [
        6, 6, 3, 3, 80, 80, 8, 8, 3, 3, 0, 0, 8, 8, 4, 4, 3, 3, 3, 3, 10, 0, 0,
        18, 0, 16, 0, 0, 0, 0, 35, 35, 130, 130, 0, 10, 9, 9, 50, 50, 0, 0, 0,
        0, 14, 0, 15, 16, 0, 10, 8, 0, 8, 3, 0, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 4, 4, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    piercingDamages: [
        3, 3, 2, 2, 0, 0, 4, 4, 6, 6, 9, 9, 4, 4, 2, 2, 2, 2, 6, 6, 18, 16, 25,
        6, 16, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 1, 1, 0, 0, 0, 0, 16, 16, 5, 0,
        8, 6, 0, 5, 4, 3, 4, 6, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    weaponsUpgradeables: [
        1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
        0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    armorUpgreadeables: [
        1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    missleWeaponTypeIds: [
        BULLET_TYPES.NONE, // FOOTMAN
        BULLET_TYPES.NONE, // GRUNT
        BULLET_TYPES.NONE, // PEASANT
        BULLET_TYPES.NONE, // PEON
        BULLET_TYPES.BOLT, // BALLISTA
        BULLET_TYPES.STONE, // CATAPULT
        BULLET_TYPES.NONE, // KNIGHT
        BULLET_TYPES.NONE, // OGRE
        BULLET_TYPES.ARROW, // ARCHER
        BULLET_TYPES.AXE, // TROLL_AXETHROWER
        BULLET_TYPES.LIGHTNING, // MAGE
        BULLET_TYPES.DEATH_COIL, // DEATH_KNIGHT
        BULLET_TYPES.NONE, // PALADIN
        BULLET_TYPES.NONE, // OGRE_MAGE
        BULLET_TYPES.NONE, // DWARVEN_DEMOLITION_SQUAD
        BULLET_TYPES.NONE, // GOBLIN_SAPPER
        BULLET_TYPES.NONE, // ATTACK_PEASANT
        BULLET_TYPES.NONE, // ATTACK_PEON
        BULLET_TYPES.ARROW, // RANGER
        BULLET_TYPES.AXE, // BERSERKER
        BULLET_TYPES.ARROW, // ALLERIA
        BULLET_TYPES.DEATH_COIL, // TERON_GOREFIEND
        BULLET_TYPES.HAMMER, // KURDAN_AND_SKY_REE
        BULLET_TYPES.NONE, // DENTARG
        BULLET_TYPES.LIGHTNING, // KHADGAR
        BULLET_TYPES.NONE, // GROM_HELLSCREAM
        BULLET_TYPES.NONE, // HUMAN_TANKER
        BULLET_TYPES.NONE, // ORC_TANKER
        BULLET_TYPES.NONE, // HUMAN_TRANSPORT
        BULLET_TYPES.NONE, // ORC_TRANSPORT
        BULLET_TYPES.CANNON, // ELVEN_DESTROYER
        BULLET_TYPES.CANNON, // TROLL_DESTROYER
        BULLET_TYPES.HUMAN_BATTLESHIP, // BATTLESHIP
        BULLET_TYPES.HUMAN_BATTLESHIP, // JUGGERNAUGHT
        BULLET_TYPES.LIGHTNING, // UNKNOWN
        BULLET_TYPES.FIREBALL, // DEATHWING
        BULLET_TYPES.NONE, // UNKNOWN
        BULLET_TYPES.NONE, // UNKNOWN
        BULLET_TYPES.HUMAN_TORPEDO, // GNOMISH_SUBMARINE
        BULLET_TYPES.ORC_TORPEDO, // GIANT_TURTLE
        BULLET_TYPES.NONE, // GNOMISH_FLYING_MACHINE
        BULLET_TYPES.NONE, // GOBLIN_ZEPPLIN
        BULLET_TYPES.HAMMER, // GRYPHON_RIDER
        BULLET_TYPES.FIREBALL, // DRAGON
        BULLET_TYPES.NONE, // TURALYON
        BULLET_TYPES.NONE, // EYE_OF_KILROGG
        BULLET_TYPES.NONE, // DANATH
        BULLET_TYPES.NONE, // KHORGATH_BLADEFIST
        BULLET_TYPES.LIGHTNING, // UNKNOWN
        BULLET_TYPES.NONE, // CHO_GALL
        BULLET_TYPES.NONE, // LOTHAR
        BULLET_TYPES.DEATH_COIL, // GUL_DAN
        BULLET_TYPES.NONE, // UTHER_LIGHTBRINGER
        BULLET_TYPES.AXE, // ZULJIN
        BULLET_TYPES.LIGHTNING, // UNKNOWN
        BULLET_TYPES.NONE, // SKELETON
        BULLET_TYPES.DEMON_FIRE, // DAEMON
        BULLET_TYPES.NONE, // CRITTER
        BULLET_TYPES.LIGHTNING, // FARM
        BULLET_TYPES.LIGHTNING, // PIG_FARM
        BULLET_TYPES.LIGHTNING, // HUMAN_BARRACKS
        BULLET_TYPES.LIGHTNING, // ORC_BARRACKS
        BULLET_TYPES.LIGHTNING, // CHURCH
        BULLET_TYPES.LIGHTNING, // ALTAR_OF_STORMS
        BULLET_TYPES.NONE, // SCOUT_TOWER
        BULLET_TYPES.NONE, // WATCH_TOWER
        BULLET_TYPES.LIGHTNING, // STABLES
        BULLET_TYPES.LIGHTNING, // OGRE_MOUND
        BULLET_TYPES.LIGHTNING, // GNOMISH_INVENTOR
        BULLET_TYPES.LIGHTNING, // GOBLIN_ALCHEMIST
        BULLET_TYPES.LIGHTNING, // GRYPHON_AVIARY
        BULLET_TYPES.LIGHTNING, // DRAGON_ROOST
        BULLET_TYPES.LIGHTNING, // HUMAN_SHIPYARD
        BULLET_TYPES.LIGHTNING, // ORC_SHIPYARD
        BULLET_TYPES.LIGHTNING, // TOWN_HALL
        BULLET_TYPES.LIGHTNING, // GREAT_HALL
        BULLET_TYPES.LIGHTNING, // ELVEN_LUMBER_MILL
        BULLET_TYPES.LIGHTNING, // TROLL_LUMBER_MILL
        BULLET_TYPES.LIGHTNING, // HUMAN_FOUNDRY
        BULLET_TYPES.LIGHTNING, // ORC_FOUNDRY
        BULLET_TYPES.LIGHTNING, // MAGE_TOWER
        BULLET_TYPES.LIGHTNING, // TEMPLE_OF_THE_DAMNED
        BULLET_TYPES.LIGHTNING, // HUMAN_BLACKSMITH
        BULLET_TYPES.LIGHTNING, // ORC_BLACKSMITH
        BULLET_TYPES.LIGHTNING, // HUMAN_REFINERY
        BULLET_TYPES.LIGHTNING, // ORC_REFINERY
        BULLET_TYPES.LIGHTNING, // HUMAN_OIL_WELL
        BULLET_TYPES.LIGHTNING, // ORC_OIL_WELL
        BULLET_TYPES.LIGHTNING, // KEEP
        BULLET_TYPES.LIGHTNING, // STRONGHOLD
        BULLET_TYPES.LIGHTNING, // CASTLE
        BULLET_TYPES.LIGHTNING, // FORTRESS
        BULLET_TYPES.LIGHTNING, // GOLD_MINE
        BULLET_TYPES.LIGHTNING, // OIL_PATCH
        BULLET_TYPES.LIGHTNING, // HUMAN_START
        BULLET_TYPES.LIGHTNING, // ORC_START
        BULLET_TYPES.ARROW, // HUMAN_GUARD_TOWER
        BULLET_TYPES.ARROW, // ORC_GUARD_TOWER
        BULLET_TYPES.CANNON, // HUMAN_CANNON_TOWER
        BULLET_TYPES.CANNON, // ORC_CANNON_TOWER
        BULLET_TYPES.LIGHTNING, // CIRCLE_OF_POWER
        BULLET_TYPES.LIGHTNING, // DARK_PORTAL
        BULLET_TYPES.LIGHTNING, // RUNESTONE
        BULLET_TYPES.LIGHTNING, // HUMAN_WALL
        BULLET_TYPES.LIGHTNING, // ORC_WALL
        BULLET_TYPES.LIGHTNING, // CORPSE
        BULLET_TYPES.LIGHTNING, // DESTROYED_BUILDING_1x1
        BULLET_TYPES.LIGHTNING, // DESTROYED_BUILDING_2x2
        BULLET_TYPES.LIGHTNING, // DESTROYED_BUILDING_3x3
        BULLET_TYPES.LIGHTNING, // DESTROYED_BUILDING_4x4
    ],
    unitDomainTypes: [
        UNIT_DOMAINS.LAND, // FOOTMAN
        UNIT_DOMAINS.LAND, // GRUNT
        UNIT_DOMAINS.LAND, // PEASANT
        UNIT_DOMAINS.LAND, // PEON
        UNIT_DOMAINS.LAND, // BALLISTA
        UNIT_DOMAINS.LAND, // CATAPULT
        UNIT_DOMAINS.LAND, // KNIGHT
        UNIT_DOMAINS.LAND, // OGRE
        UNIT_DOMAINS.LAND, // ARCHER
        UNIT_DOMAINS.LAND, // TROLL_AXETHROWER
        UNIT_DOMAINS.LAND, // MAGE
        UNIT_DOMAINS.LAND, // DEATH_KNIGHT
        UNIT_DOMAINS.LAND, // PALADIN
        UNIT_DOMAINS.LAND, // OGRE_MAGE
        UNIT_DOMAINS.LAND, // DWARVEN_DEMOLITION_SQUAD
        UNIT_DOMAINS.LAND, // GOBLIN_SAPPER
        UNIT_DOMAINS.LAND, // ATTACK_PEASANT
        UNIT_DOMAINS.LAND, // ATTACK_PEON
        UNIT_DOMAINS.LAND, // RANGER
        UNIT_DOMAINS.LAND, // BERSERKER
        UNIT_DOMAINS.LAND, // ALLERIA
        UNIT_DOMAINS.LAND, // TERON_GOREFIEND
        UNIT_DOMAINS.AIR, // KURDAN_AND_SKY_REE
        UNIT_DOMAINS.LAND, // DENTARG
        UNIT_DOMAINS.LAND, // KHADGAR
        UNIT_DOMAINS.LAND, // GROM_HELLSCREAM
        UNIT_DOMAINS.WATER, // HUMAN_TANKER
        UNIT_DOMAINS.WATER, // ORC_TANKER
        UNIT_DOMAINS.WATER, // HUMAN_TRANSPORT
        UNIT_DOMAINS.WATER, // ORC_TRANSPORT
        UNIT_DOMAINS.WATER, // ELVEN_DESTROYER
        UNIT_DOMAINS.WATER, // TROLL_DESTROYER
        UNIT_DOMAINS.WATER, // BATTLESHIP
        UNIT_DOMAINS.WATER, // JUGGERNAUGHT
        UNIT_DOMAINS.NONE, // UNKNOWN
        UNIT_DOMAINS.AIR, // DEATHWING
        UNIT_DOMAINS.WATER, // UNKNOWN
        UNIT_DOMAINS.WATER, // UNKNOWN
        UNIT_DOMAINS.WATER, // GNOMISH_SUBMARINE
        UNIT_DOMAINS.WATER, // GIANT_TURTLE
        UNIT_DOMAINS.AIR, // GNOMISH_FLYING_MACHINE
        UNIT_DOMAINS.AIR, // GOBLIN_ZEPPLIN
        UNIT_DOMAINS.AIR, // GRYPHON_RIDER
        UNIT_DOMAINS.AIR, // DRAGON
        UNIT_DOMAINS.LAND, // TURALYON
        UNIT_DOMAINS.AIR, // EYE_OF_KILROGG
        UNIT_DOMAINS.LAND, // DANATH
        UNIT_DOMAINS.LAND, // KHORGATH_BLADEFIST
        UNIT_DOMAINS.NONE, // UNKNOWN
        UNIT_DOMAINS.LAND, // CHO_GALL
        UNIT_DOMAINS.LAND, // LOTHAR
        UNIT_DOMAINS.LAND, // GUL_DAN
        UNIT_DOMAINS.LAND, // UTHER_LIGHTBRINGER
        UNIT_DOMAINS.LAND, // ZULJIN
        UNIT_DOMAINS.NONE, // UNKNOWN
        UNIT_DOMAINS.LAND, // SKELETON
        UNIT_DOMAINS.AIR, // DAEMON
        UNIT_DOMAINS.LAND, // CRITTER
        UNIT_DOMAINS.LAND, // FARM
        UNIT_DOMAINS.LAND, // PIG_FARM
        UNIT_DOMAINS.LAND, // HUMAN_BARRACKS
        UNIT_DOMAINS.LAND, // ORC_BARRACKS
        UNIT_DOMAINS.LAND, // CHURCH
        UNIT_DOMAINS.LAND, // ALTAR_OF_STORMS
        UNIT_DOMAINS.LAND, // SCOUT_TOWER
        UNIT_DOMAINS.LAND, // WATCH_TOWER
        UNIT_DOMAINS.LAND, // STABLES
        UNIT_DOMAINS.LAND, // OGRE_MOUND
        UNIT_DOMAINS.LAND, // GNOMISH_INVENTOR
        UNIT_DOMAINS.LAND, // GOBLIN_ALCHEMIST
        UNIT_DOMAINS.LAND, // GRYPHON_AVIARY
        UNIT_DOMAINS.LAND, // DRAGON_ROOST
        UNIT_DOMAINS.LAND, // HUMAN_SHIPYARD
        UNIT_DOMAINS.LAND, // ORC_SHIPYARD
        UNIT_DOMAINS.LAND, // TOWN_HALL
        UNIT_DOMAINS.LAND, // GREAT_HALL
        UNIT_DOMAINS.LAND, // ELVEN_LUMBER_MILL
        UNIT_DOMAINS.LAND, // TROLL_LUMBER_MILL
        UNIT_DOMAINS.LAND, // HUMAN_FOUNDRY
        UNIT_DOMAINS.LAND, // ORC_FOUNDRY
        UNIT_DOMAINS.LAND, // MAGE_TOWER
        UNIT_DOMAINS.LAND, // TEMPLE_OF_THE_DAMNED
        UNIT_DOMAINS.LAND, // HUMAN_BLACKSMITH
        UNIT_DOMAINS.LAND, // ORC_BLACKSMITH
        UNIT_DOMAINS.LAND, // HUMAN_REFINERY
        UNIT_DOMAINS.LAND, // ORC_REFINERY
        UNIT_DOMAINS.WATER, // HUMAN_OIL_WELL
        UNIT_DOMAINS.WATER, // ORC_OIL_WELL
        UNIT_DOMAINS.LAND, // KEEP
        UNIT_DOMAINS.LAND, // STRONGHOLD
        UNIT_DOMAINS.LAND, // CASTLE
        UNIT_DOMAINS.LAND, // FORTRESS
        UNIT_DOMAINS.LAND, // GOLD_MINE
        UNIT_DOMAINS.WATER, // OIL_PATCH
        UNIT_DOMAINS.NONE, // HUMAN_START
        UNIT_DOMAINS.NONE, // ORC_START
        UNIT_DOMAINS.LAND, // HUMAN_GUARD_TOWER
        UNIT_DOMAINS.LAND, // ORC_GUARD_TOWER
        UNIT_DOMAINS.LAND, // HUMAN_CANNON_TOWER
        UNIT_DOMAINS.LAND, // ORC_CANNON_TOWER
        UNIT_DOMAINS.LAND, // CIRCLE_OF_POWER
        UNIT_DOMAINS.LAND, // DARK_PORTAL
        UNIT_DOMAINS.LAND, // RUNESTONE
        UNIT_DOMAINS.LAND, // HUMAN_WALL
        UNIT_DOMAINS.LAND, // ORC_WALL
        UNIT_DOMAINS.LAND, // CORPSE
        UNIT_DOMAINS.LAND, // DESTROYED_BUILDING_1x1
        UNIT_DOMAINS.LAND, // DESTROYED_BUILDING_2x2
        UNIT_DOMAINS.LAND, // DESTROYED_BUILDING_3x3
        UNIT_DOMAINS.LAND, // DESTROYED_BUILDING_4x4
    ],
    unitDecayRates: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    aiAnnoyFactors: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 10, 10, 15, 15, 20, 20, 25, 25, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 45, 35, 35, 35, 35, 50, 50,
        15, 15, 20, 20, 20, 20, 20, 20, 45, 45, 15, 15, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 40, 40, 50, 50, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 35,
        45, 45, 0, 0, 0, 0, 0,
    ],
    secondMouseActions: [
        RIGHT_CLICK_ACTIONS.ATTACK, // FOOTMAN
        RIGHT_CLICK_ACTIONS.ATTACK, // GRUNT
        RIGHT_CLICK_ACTIONS.HARVEST, // PEASANT
        RIGHT_CLICK_ACTIONS.HARVEST, // PEON
        RIGHT_CLICK_ACTIONS.ATTACK, // BALLISTA
        RIGHT_CLICK_ACTIONS.ATTACK, // CATAPULT
        RIGHT_CLICK_ACTIONS.ATTACK, // KNIGHT
        RIGHT_CLICK_ACTIONS.ATTACK, // OGRE
        RIGHT_CLICK_ACTIONS.ATTACK, // ARCHER
        RIGHT_CLICK_ACTIONS.ATTACK, // TROLL_AXETHROWER
        RIGHT_CLICK_ACTIONS.ATTACK, // MAGE
        RIGHT_CLICK_ACTIONS.ATTACK, // DEATH_KNIGHT
        RIGHT_CLICK_ACTIONS.ATTACK, // PALADIN
        RIGHT_CLICK_ACTIONS.ATTACK, // OGRE_MAGE
        RIGHT_CLICK_ACTIONS.EXPLODE, // DWARVEN_DEMOLITION_SQUAD
        RIGHT_CLICK_ACTIONS.EXPLODE, // GOBLIN_SAPPER
        RIGHT_CLICK_ACTIONS.ATTACK, // ATTACK_PEASANT
        RIGHT_CLICK_ACTIONS.ATTACK, // ATTACK_PEON
        RIGHT_CLICK_ACTIONS.ATTACK, // RANGER
        RIGHT_CLICK_ACTIONS.ATTACK, // BERSERKER
        RIGHT_CLICK_ACTIONS.ATTACK, // ALLERIA
        RIGHT_CLICK_ACTIONS.ATTACK, // TERON_GOREFIEND
        RIGHT_CLICK_ACTIONS.ATTACK, // KURDAN_AND_SKY_REE
        RIGHT_CLICK_ACTIONS.ATTACK, // DENTARG
        RIGHT_CLICK_ACTIONS.ATTACK, // KHADGAR
        RIGHT_CLICK_ACTIONS.ATTACK, // GROM_HELLSCREAM
        RIGHT_CLICK_ACTIONS.HAUL_OIL, // HUMAN_TANKER
        RIGHT_CLICK_ACTIONS.HAUL_OIL, // ORC_TANKER
        RIGHT_CLICK_ACTIONS.TRANSPORT, // HUMAN_TRANSPORT
        RIGHT_CLICK_ACTIONS.TRANSPORT, // ORC_TRANSPORT
        RIGHT_CLICK_ACTIONS.ATTACK, // ELVEN_DESTROYER
        RIGHT_CLICK_ACTIONS.ATTACK, // TROLL_DESTROYER
        RIGHT_CLICK_ACTIONS.ATTACK, // BATTLESHIP
        RIGHT_CLICK_ACTIONS.ATTACK, // JUGGERNAUGHT
        RIGHT_CLICK_ACTIONS.NONE, // UNKNOWN
        RIGHT_CLICK_ACTIONS.ATTACK, // DEATHWING
        RIGHT_CLICK_ACTIONS.ATTACK, // UNKNOWN
        RIGHT_CLICK_ACTIONS.ATTACK, // UNKNOWN
        RIGHT_CLICK_ACTIONS.ATTACK, // GNOMISH_SUBMARINE
        RIGHT_CLICK_ACTIONS.ATTACK, // GIANT_TURTLE
        RIGHT_CLICK_ACTIONS.MOVE, // GNOMISH_FLYING_MACHINE
        RIGHT_CLICK_ACTIONS.MOVE, // GOBLIN_ZEPPLIN
        RIGHT_CLICK_ACTIONS.ATTACK, // GRYPHON_RIDER
        RIGHT_CLICK_ACTIONS.ATTACK, // DRAGON
        RIGHT_CLICK_ACTIONS.ATTACK, // TURALYON
        RIGHT_CLICK_ACTIONS.MOVE, // EYE_OF_KILROGG
        RIGHT_CLICK_ACTIONS.ATTACK, // DANATH
        RIGHT_CLICK_ACTIONS.ATTACK, // KHORGATH_BLADEFIST
        RIGHT_CLICK_ACTIONS.NONE, // UNKNOWN
        RIGHT_CLICK_ACTIONS.ATTACK, // CHO_GALL
        RIGHT_CLICK_ACTIONS.ATTACK, // LOTHAR
        RIGHT_CLICK_ACTIONS.ATTACK, // GUL_DAN
        RIGHT_CLICK_ACTIONS.ATTACK, // UTHER_LIGHTBRINGER
        RIGHT_CLICK_ACTIONS.ATTACK, // ZULJIN
        RIGHT_CLICK_ACTIONS.NONE, // UNKNOWN
        RIGHT_CLICK_ACTIONS.ATTACK, // SKELETON
        RIGHT_CLICK_ACTIONS.ATTACK, // DAEMON
        RIGHT_CLICK_ACTIONS.MOVE, // CRITTER
    ],
    pointValues: [
        50, 50, 30, 30, 100, 100, 100, 100, 60, 60, 100, 100, 110, 110, 100,
        100, 30, 30, 70, 70, 60, 100, 150, 100, 100, 50, 40, 40, 50, 50, 150,
        150, 300, 300, 0, 150, 0, 0, 120, 120, 40, 40, 150, 150, 110, 0, 50, 50,
        0, 120, 120, 120, 120, 120, 0, 0, 100, 1, 100, 100, 160, 160, 240, 240,
        95, 95, 210, 210, 230, 230, 280, 280, 170, 170, 200, 200, 150, 150, 200,
        200, 240, 240, 170, 170, 200, 200, 160, 160, 600, 600, 1500, 1500, 0, 0,
        0, 0, 200, 200, 250, 250, 0, 0, 150, 1, 1, 0, 0, 0, 0, 0,
    ],
    canTargetFlags: [
        UNIT_TARGETS.LAND, // FOOTMAN
        UNIT_TARGETS.LAND, // GRUNT
        UNIT_TARGETS.LAND, // PEASANT
        UNIT_TARGETS.LAND, // PEON
        UNIT_TARGETS.LAND | UNIT_TARGETS.SEA, // BALLISTA
        UNIT_TARGETS.LAND | UNIT_TARGETS.SEA, // CATAPULT
        UNIT_TARGETS.LAND, // KNIGHT
        UNIT_TARGETS.LAND, // OGRE
        UNIT_TARGETS.ANY, // ARCHER
        UNIT_TARGETS.ANY, // TROLL_AXETHROWER
        UNIT_TARGETS.ANY, // MAGE
        UNIT_TARGETS.ANY, // DEATH_KNIGHT
        UNIT_TARGETS.LAND, // PALADIN
        UNIT_TARGETS.LAND, // OGRE_MAGE
        UNIT_TARGETS.LAND, // DWARVEN_DEMOLITION_SQUAD
        UNIT_TARGETS.LAND, // GOBLIN_SAPPER
        UNIT_TARGETS.LAND, // ATTACK_PEASANT
        UNIT_TARGETS.LAND, // ATTACK_PEON
        UNIT_TARGETS.ANY, // RANGER
        UNIT_TARGETS.ANY, // BERSERKER
        UNIT_TARGETS.ANY, // ALLERIA
        UNIT_TARGETS.ANY, // TERON_GOREFIEND
        UNIT_TARGETS.ANY, // KURDAN_AND_SKY_REE
        UNIT_TARGETS.LAND, // DENTARG
        UNIT_TARGETS.ANY, // KHADGAR
        UNIT_TARGETS.LAND, // GROM_HELLSCREAM
        UNIT_TARGETS.NONE, // HUMAN_TANKER
        UNIT_TARGETS.NONE, // ORC_TANKER
        UNIT_TARGETS.NONE, // HUMAN_TRANSPORT
        UNIT_TARGETS.NONE, // ORC_TRANSPORT
        UNIT_TARGETS.ANY, // ELVEN_DESTROYER
        UNIT_TARGETS.ANY, // TROLL_DESTROYER
        UNIT_TARGETS.LAND | UNIT_TARGETS.SEA, // BATTLESHIP
        UNIT_TARGETS.LAND | UNIT_TARGETS.SEA, // JUGGERNAUGHT
        UNIT_TARGETS.NONE, // UNKNOWN
        UNIT_TARGETS.ANY, // DEATHWING
        UNIT_TARGETS.NONE, // UNKNOWN
        UNIT_TARGETS.NONE, // UNKNOWN
        UNIT_TARGETS.SEA, // GNOMISH_SUBMARINE
        UNIT_TARGETS.SEA, // GIANT_TURTLE
        UNIT_TARGETS.NONE, // GNOMISH_FLYING_MACHINE
        UNIT_TARGETS.NONE, // GOBLIN_ZEPPLIN
        UNIT_TARGETS.ANY, // GRYPHON_RIDER
        UNIT_TARGETS.ANY, // DRAGON
        UNIT_TARGETS.LAND, // TURALYON
        UNIT_TARGETS.NONE, // EYE_OF_KILROGG
        UNIT_TARGETS.LAND, // DANATH
        UNIT_TARGETS.LAND, // KHORGATH_BLADEFIST
        UNIT_TARGETS.NONE, // UNKNOWN
        UNIT_TARGETS.LAND, // CHO_GALL
        UNIT_TARGETS.LAND, // LOTHAR
        UNIT_TARGETS.ANY, // GUL_DAN
        UNIT_TARGETS.LAND, // UTHER_LIGHTBRINGER
        UNIT_TARGETS.ANY, // ZULJIN
        UNIT_TARGETS.NONE, // UNKNOWN
        UNIT_TARGETS.LAND, // SKELETON
        UNIT_TARGETS.ANY, // DAEMON
        UNIT_TARGETS.NONE, // CRITTER
        UNIT_TARGETS.NONE, // FARM
        UNIT_TARGETS.NONE, // PIG_FARM
        UNIT_TARGETS.NONE, // HUMAN_BARRACKS
        UNIT_TARGETS.NONE, // ORC_BARRACKS
        UNIT_TARGETS.NONE, // CHURCH
        UNIT_TARGETS.NONE, // ALTAR_OF_STORMS
        UNIT_TARGETS.ANY, // SCOUT_TOWER
        UNIT_TARGETS.ANY, // WATCH_TOWER
        UNIT_TARGETS.NONE, // STABLES
        UNIT_TARGETS.NONE, // OGRE_MOUND
        UNIT_TARGETS.NONE, // GNOMISH_INVENTOR
        UNIT_TARGETS.NONE, // GOBLIN_ALCHEMIST
        UNIT_TARGETS.NONE, // GRYPHON_AVIARY
        UNIT_TARGETS.NONE, // DRAGON_ROOST
        UNIT_TARGETS.NONE, // HUMAN_SHIPYARD
        UNIT_TARGETS.NONE, // ORC_SHIPYARD
        UNIT_TARGETS.NONE, // TOWN_HALL
        UNIT_TARGETS.NONE, // GREAT_HALL
        UNIT_TARGETS.NONE, // ELVEN_LUMBER_MILL
        UNIT_TARGETS.NONE, // TROLL_LUMBER_MILL
        UNIT_TARGETS.NONE, // HUMAN_FOUNDRY
        UNIT_TARGETS.NONE, // ORC_FOUNDRY
        UNIT_TARGETS.NONE, // MAGE_TOWER
        UNIT_TARGETS.NONE, // TEMPLE_OF_THE_DAMNED
        UNIT_TARGETS.NONE, // HUMAN_BLACKSMITH
        UNIT_TARGETS.NONE, // ORC_BLACKSMITH
        UNIT_TARGETS.NONE, // HUMAN_REFINERY
        UNIT_TARGETS.NONE, // ORC_REFINERY
        UNIT_TARGETS.NONE, // HUMAN_OIL_WELL
        UNIT_TARGETS.NONE, // ORC_OIL_WELL
        UNIT_TARGETS.NONE, // KEEP
        UNIT_TARGETS.NONE, // STRONGHOLD
        UNIT_TARGETS.NONE, // CASTLE
        UNIT_TARGETS.NONE, // FORTRESS
        UNIT_TARGETS.NONE, // GOLD_MINE
        UNIT_TARGETS.NONE, // OIL_PATCH
        UNIT_TARGETS.NONE, // HUMAN_START
        UNIT_TARGETS.NONE, // ORC_START
        UNIT_TARGETS.ANY, // HUMAN_GUARD_TOWER
        UNIT_TARGETS.ANY, // ORC_GUARD_TOWER
        UNIT_TARGETS.LAND | UNIT_TARGETS.SEA, // HUMAN_CANNON_TOWER
        UNIT_TARGETS.LAND | UNIT_TARGETS.SEA, // ORC_CANNON_TOWER
        UNIT_TARGETS.NONE, // CIRCLE_OF_POWER
        UNIT_TARGETS.NONE, // DARK_PORTAL
        UNIT_TARGETS.NONE, // RUNESTONE
        UNIT_TARGETS.NONE, // HUMAN_WALL
        UNIT_TARGETS.NONE, // ORC_WALL
        UNIT_TARGETS.NONE, // CORPSE
        UNIT_TARGETS.NONE, // DESTROYED_BUILDING_1x1
        UNIT_TARGETS.NONE, // DESTROYED_BUILDING_2x2
        UNIT_TARGETS.NONE, // DESTROYED_BUILDING_3x3
        UNIT_TARGETS.NONE, // DESTROYED_BUILDING_4x4
    ],
    unitFlags: [
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // FOOTMAN
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // GRUNT
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_WORKER |
            UNIT_FLAGS.CAN_ATTACK, // PEASANT
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_WORKER |
            UNIT_FLAGS.CAN_ATTACK, // PEON
        UNIT_FLAGS.IS_CATAPULT |
            UNIT_FLAGS.CAN_GROUND_ATTACK |
            UNIT_FLAGS.CAN_ATTACK, // BALLISTA
        UNIT_FLAGS.IS_CATAPULT |
            UNIT_FLAGS.CAN_GROUND_ATTACK |
            UNIT_FLAGS.CAN_ATTACK, // CATAPULT
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // KNIGHT
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // OGRE
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // ARCHER
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // TROLL_AXETHROWER
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.IS_COWARD |
            UNIT_FLAGS.CAN_ATTACK, // MAGE
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_UNDEAD |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.IS_COWARD |
            UNIT_FLAGS.CAN_ATTACK, // DEATH_KNIGHT
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.CAN_ATTACK, // PALADIN
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.CAN_ATTACK, // OGRE_MAGE
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_SAPPERS_OR_DEMOLITION_SQUAD |
            UNIT_FLAGS.CAN_ATTACK, // DWARVEN_DEMOLITION_SQUAD
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_SAPPERS_OR_DEMOLITION_SQUAD |
            UNIT_FLAGS.CAN_ATTACK, // GOBLIN_SAPPER
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // ATTACK_PEASANT
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // ATTACK_PEON
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // RANGER
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // BERSERKER
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // ALLERIA
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_UNDEAD |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.IS_COWARD |
            UNIT_FLAGS.CAN_ATTACK, // TERON_GOREFIEND
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_AIR_UNIT |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.CAN_ATTACK, // KURDAN_AND_SKY_REE
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.CAN_ATTACK, // DENTARG
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.IS_COWARD |
            UNIT_FLAGS.CAN_ATTACK, // KHADGAR
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // GROM_HELLSCREAM
        UNIT_FLAGS.IS_SEA_UNIT | UNIT_FLAGS.IS_TANKER, // HUMAN_TANKER
        UNIT_FLAGS.IS_SEA_UNIT | UNIT_FLAGS.IS_TANKER, // ORC_TANKER
        UNIT_FLAGS.IS_SEA_UNIT | UNIT_FLAGS.IS_TRANSPORT, // HUMAN_TRANSPORT
        UNIT_FLAGS.IS_SEA_UNIT | UNIT_FLAGS.IS_TRANSPORT, // ORC_TRANSPORT
        UNIT_FLAGS.IS_SEA_UNIT | UNIT_FLAGS.CAN_ATTACK, // ELVEN_DESTROYER
        UNIT_FLAGS.IS_SEA_UNIT | UNIT_FLAGS.CAN_ATTACK, // TROLL_DESTROYER
        UNIT_FLAGS.IS_SEA_UNIT |
            UNIT_FLAGS.CAN_GROUND_ATTACK |
            UNIT_FLAGS.CAN_ATTACK, // BATTLESHIP
        UNIT_FLAGS.IS_SEA_UNIT |
            UNIT_FLAGS.CAN_GROUND_ATTACK |
            UNIT_FLAGS.CAN_ATTACK, // JUGGERNAUGHT
        UNIT_FLAGS.IS_NONE, // UNKNOWN
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_AIR_UNIT |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.CAN_ATTACK, // DEATHWING
        UNIT_FLAGS.IS_SEA_UNIT, // UNKNOWN
        UNIT_FLAGS.IS_SEA_UNIT, // UNKNOWN
        UNIT_FLAGS.IS_SEA_UNIT |
            UNIT_FLAGS.IS_SUBMARINE |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.CAN_ATTACK, // GNOMISH_SUBMARINE
        UNIT_FLAGS.IS_SEA_UNIT |
            UNIT_FLAGS.IS_SUBMARINE |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.CAN_ATTACK, // GIANT_TURTLE
        UNIT_FLAGS.IS_AIR_UNIT | UNIT_FLAGS.IS_DETECTOR, // GNOMISH_FLYING_MACHINE
        UNIT_FLAGS.IS_AIR_UNIT | UNIT_FLAGS.IS_DETECTOR, // GOBLIN_ZEPPLIN
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_AIR_UNIT |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.CAN_ATTACK, // GRYPHON_RIDER
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_AIR_UNIT |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.CAN_ATTACK, // DRAGON
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.CAN_ATTACK, // TURALYON
        UNIT_FLAGS.IS_AIR_UNIT | UNIT_FLAGS.IS_DETECTOR, // EYE_OF_KILROGG
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // DANATH
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.CAN_ATTACK, // KHORGATH_BLADEFIST
        UNIT_FLAGS.IS_NONE, // UNKNOWN
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_HERO, // CHO_GALL
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_HERO, // LOTHAR
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.IS_UNDEAD |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_HERO, // GUL_DAN
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_CAST_SPELLS |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_HERO, // UTHER_LIGHTBRINGER
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_HERO, // ZULJIN
        UNIT_FLAGS.IS_NONE, // UNKNOWN
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_LAND_UNIT |
            UNIT_FLAGS.IS_CRITTER |
            UNIT_FLAGS.IS_UNDEAD |
            UNIT_FLAGS.CAN_ATTACK, // SKELETON
        UNIT_FLAGS.IS_ORGANIC |
            UNIT_FLAGS.IS_AIR_UNIT |
            UNIT_FLAGS.IS_DETECTOR |
            UNIT_FLAGS.IS_CRITTER |
            UNIT_FLAGS.CAN_ATTACK, // DAEMON
        UNIT_FLAGS.IS_ORGANIC | UNIT_FLAGS.IS_LAND_UNIT | UNIT_FLAGS.IS_CRITTER, // CRITTER
        UNIT_FLAGS.IS_BUILDING, // FARM
        UNIT_FLAGS.IS_BUILDING, // PIG_FARM
        UNIT_FLAGS.IS_BUILDING, // HUMAN_BARRACKS
        UNIT_FLAGS.IS_BUILDING, // ORC_BARRACKS
        UNIT_FLAGS.IS_BUILDING, // CHURCH
        UNIT_FLAGS.IS_BUILDING, // ALTAR_OF_STORMS
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_DETECTOR, // SCOUT_TOWER
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_DETECTOR, // WATCH_TOWER
        UNIT_FLAGS.IS_BUILDING, // STABLES
        UNIT_FLAGS.IS_BUILDING, // OGRE_MOUND
        UNIT_FLAGS.IS_BUILDING, // GNOMISH_INVENTOR
        UNIT_FLAGS.IS_BUILDING, // GOBLIN_ALCHEMIST
        UNIT_FLAGS.IS_BUILDING, // GRYPHON_AVIARY
        UNIT_FLAGS.IS_BUILDING, // DRAGON_ROOST
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_SHORE_BUILDING |
            UNIT_FLAGS.IS_OIL_STORAGE, // HUMAN_SHIPYARD
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_SHORE_BUILDING |
            UNIT_FLAGS.IS_OIL_STORAGE, // ORC_SHIPYARD
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_GOLD_STORAGE, // TOWN_HALL
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_GOLD_STORAGE, // GREAT_HALL
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_WOOD_STORAGE, // ELVEN_LUMBER_MILL
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_WOOD_STORAGE, // TROLL_LUMBER_MILL
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_SHORE_BUILDING, // HUMAN_FOUNDRY
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_SHORE_BUILDING, // ORC_FOUNDRY
        UNIT_FLAGS.IS_BUILDING, // MAGE_TOWER
        UNIT_FLAGS.IS_BUILDING, // TEMPLE_OF_THE_DAMNED
        UNIT_FLAGS.IS_BUILDING, // HUMAN_BLACKSMITH
        UNIT_FLAGS.IS_BUILDING, // ORC_BLACKSMITH
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_SHORE_BUILDING |
            UNIT_FLAGS.IS_OIL_STORAGE, // HUMAN_REFINERY
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_SHORE_BUILDING |
            UNIT_FLAGS.IS_OIL_STORAGE, // ORC_REFINERY
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_OIL_PLATFORM, // HUMAN_OIL_WELL
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_OIL_PLATFORM, // ORC_OIL_WELL
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_GOLD_STORAGE, // KEEP
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_GOLD_STORAGE, // STRONGHOLD
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_GOLD_STORAGE, // CASTLE
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_GOLD_STORAGE, // FORTRESS
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_MINE, // GOLD_MINE
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_OIL_PATCH, // OIL_PATCH
        UNIT_FLAGS.IS_NONE, // HUMAN_START
        UNIT_FLAGS.IS_NONE, // ORC_START
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_TOWER |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_DETECTOR, // HUMAN_GUARD_TOWER
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_TOWER |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_DETECTOR, // ORC_GUARD_TOWER
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_TOWER |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_DETECTOR, // HUMAN_CANNON_TOWER
        UNIT_FLAGS.IS_BUILDING |
            UNIT_FLAGS.IS_TOWER |
            UNIT_FLAGS.CAN_ATTACK |
            UNIT_FLAGS.IS_DETECTOR, // ORC_CANNON_TOWER
        UNIT_FLAGS.IS_BUILDING, // CIRCLE_OF_POWER
        UNIT_FLAGS.IS_BUILDING, // DARK_PORTAL
        UNIT_FLAGS.IS_BUILDING, // RUNESTONE
        UNIT_FLAGS.IS_BUILDING, // HUMAN_WALL
        UNIT_FLAGS.IS_BUILDING, // ORC_WALL
        UNIT_FLAGS.IS_CORPSE, // CORPSE
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_CORPSE, // DESTROYED_BUILDING_1x1
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_CORPSE, // DESTROYED_BUILDING_2x2
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_CORPSE, // DESTROYED_BUILDING_3x3
        UNIT_FLAGS.IS_BUILDING | UNIT_FLAGS.IS_CORPSE, // DESTROYED_BUILDING_4x4
    ],
    swampGRPIds: [
        NO_GRP_FILE, // FOOTMAN
        NO_GRP_FILE, // GRUNT
        NO_GRP_FILE, // PEASANT
        NO_GRP_FILE, // PEON
        NO_GRP_FILE, // BALLISTA
        NO_GRP_FILE, // CATAPULT
        NO_GRP_FILE, // KNIGHT
        NO_GRP_FILE, // OGRE
        NO_GRP_FILE, // ARCHER
        NO_GRP_FILE, // TROLL_AXETHROWER
        NO_GRP_FILE, // MAGE
        NO_GRP_FILE, // DEATH_KNIGHT
        NO_GRP_FILE, // PALADIN
        NO_GRP_FILE, // OGRE_MAGE
        NO_GRP_FILE, // DWARVEN_DEMOLITION_SQUAD
        NO_GRP_FILE, // GOBLIN_SAPPER
        NO_GRP_FILE, // ATTACK_PEASANT
        NO_GRP_FILE, // ATTACK_PEON
        NO_GRP_FILE, // RANGER
        NO_GRP_FILE, // BERSERKER
        NO_GRP_FILE, // ALLERIA
        NO_GRP_FILE, // TERON_GOREFIEND
        NO_GRP_FILE, // KURDAN_AND_SKY_REE
        NO_GRP_FILE, // DENTARG
        NO_GRP_FILE, // KHADGAR
        NO_GRP_FILE, // GROM_HELLSCREAM
        NO_GRP_FILE, // HUMAN_TANKER
        NO_GRP_FILE, // ORC_TANKER
        NO_GRP_FILE, // HUMAN_TRANSPORT
        NO_GRP_FILE, // ORC_TRANSPORT
        NO_GRP_FILE, // ELVEN_DESTROYER
        NO_GRP_FILE, // TROLL_DESTROYER
        NO_GRP_FILE, // BATTLESHIP
        NO_GRP_FILE, // JUGGERNAUGHT
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // DEATHWING
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // UNKNOWN
        GROUP_FILES_HUMAN.GNOMISH_SUBMARINE_SWAMP, // GNOMISH_SUBMARINE
        GROUP_FILES_ORC.GIANT_TURTLE_SWAMP, // GIANT_TURTLE
        NO_GRP_FILE, // GNOMISH_FLYING_MACHINE
        NO_GRP_FILE, // GOBLIN_ZEPPLIN
        NO_GRP_FILE, // GRYPHON_RIDER
        NO_GRP_FILE, // DRAGON
        NO_GRP_FILE, // TURALYON
        NO_GRP_FILE, // EYE_OF_KILROGG
        NO_GRP_FILE, // DANATH
        NO_GRP_FILE, // KHORGATH_BLADEFIST
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // CHO_GALL
        NO_GRP_FILE, // LOTHAR
        NO_GRP_FILE, // GUL_DAN
        NO_GRP_FILE, // UTHER_LIGHTBRINGER
        NO_GRP_FILE, // ZULJIN
        NO_GRP_FILE, // UNKNOWN
        NO_GRP_FILE, // SKELETON
        NO_GRP_FILE, // DAEMON
        GROUP_FILES_MONSTER.HELLHOG, // CRITTER
        GROUP_FILES_HUMAN.FARM_SWAMP, // FARM
        GROUP_FILES_ORC.PIG_FARM_SWAMP, // PIG_FARM
        GROUP_FILES_HUMAN.BARRACKS_SWAMP, // HUMAN_BARRACKS
        GROUP_FILES_ORC.BARRACKS_SWAMP, // ORC_BARRACKS
        GROUP_FILES_HUMAN.CHURCH_SWAMP, // CHURCH
        GROUP_FILES_ORC.ALTAR_OF_STORMS_SWAMP, // ALTAR_OF_STORMS
        GROUP_FILES_HUMAN.SCOUT_TOWER_SWAMP, // SCOUT_TOWER
        GROUP_FILES_ORC.WATCH_TOWER_SWAMP, // WATCH_TOWER
        GROUP_FILES_HUMAN.STABLES_SWAMP, // STABLES
        GROUP_FILES_ORC.OGRE_MOUND_SWAMP, // OGRE_MOUND
        GROUP_FILES_HUMAN.GNOMISH_INVENTOR_SWAMP, // GNOMISH_INVENTOR
        GROUP_FILES_ORC.GOBLIN_ALCHEMIST_SWAMP, // GOBLIN_ALCHEMIST
        GROUP_FILES_HUMAN.GRYPHON_AVIARY_SWAMP, // GRYPHON_AVIARY
        GROUP_FILES_ORC.DRAGON_ROOST_SWAMP, // DRAGON_ROOST
        GROUP_FILES_HUMAN.SHIPYARD_SWAMP, // HUMAN_SHIPYARD
        GROUP_FILES_ORC.SHIPYARD_SWAMP, // ORC_SHIPYARD
        GROUP_FILES_HUMAN.TOWN_HALL_SWAMP, // TOWN_HALL
        GROUP_FILES_ORC.GREAT_HALL_SWAMP, // GREAT_HALL
        GROUP_FILES_HUMAN.ELVEN_LUMBER_MILL_SWAMP, // ELVEN_LUMBER_MILL
        GROUP_FILES_ORC.TROLL_LUMBER_MILL_SWAMP, // TROLL_LUMBER_MILL
        GROUP_FILES_HUMAN.FOUNDRY_SWAMP, // HUMAN_FOUNDRY
        GROUP_FILES_ORC.FOUNDRY_SWAMP, // ORC_FOUNDRY
        GROUP_FILES_HUMAN.MAGE_TOWER, // MAGE_TOWER
        GROUP_FILES_ORC.TEMPLE_OF_THE_DAMNED_SWAMP, // TEMPLE_OF_THE_DAMNED
        GROUP_FILES_HUMAN.BLACKSMITH_SWAMP, // HUMAN_BLACKSMITH
        GROUP_FILES_ORC.BLACKSMITH_SWAMP, // ORC_BLACKSMITH
        GROUP_FILES_HUMAN.REFINERY_SWAMP, // HUMAN_REFINERY
        GROUP_FILES_ORC.REFINERY_SWAMP, // ORC_REFINERY
        GROUP_FILES_HUMAN.OIL_PLATFORM_SWAMP, // HUMAN_OIL_WELL
        GROUP_FILES_ORC.OIL_PLATFORM_SWAMP, // ORC_OIL_WELL
        GROUP_FILES_HUMAN.KEEP_SWAMP, // KEEP
        GROUP_FILES_ORC.STRONGHOLD_SWAMP, // STRONGHOLD
        GROUP_FILES_HUMAN.CASTLE_SWAMP, // CASTLE
        GROUP_FILES_ORC.FORTRESS_SWAMP, // FORTRESS
        GROUP_FILES_OTHER.MINE_SWAMP, // GOLD_MINE
        GROUP_FILES_OTHER.OIL_PATCH_SWAMP, // OIL_PATCH
        NO_GRP_FILE, // HUMAN_START
        NO_GRP_FILE, // ORC_START
        GROUP_FILES_HUMAN.GUARD_TOWER, // HUMAN_GUARD_TOWER
        GROUP_FILES_ORC.GUARD_TOWER_SWAMP, // ORC_GUARD_TOWER
        GROUP_FILES_HUMAN.CANNON_TOWER, // HUMAN_CANNON_TOWER
        GROUP_FILES_ORC.CANNON_TOWER_SWAMP, // ORC_CANNON_TOWER
        GROUP_FILES_OTHER.CIRCLE_OF_POWER_SWAMP, // CIRCLE_OF_POWER
        GROUP_FILES_OTHER.DARK_PORTAL_SWAMP, // DARK_PORTAL
        GROUP_FILES_OTHER.RUNESTONE_SWAMP, // RUNESTONE
        GROUP_FILES_OTHER.WALL_UNIT_WASTELAND, // HUMAN_WALL
        GROUP_FILES_OTHER.WALL_UNIT_WASTELAND, // ORC_WALL
        NO_GRP_FILE, // CORPSE
        GROUP_FILES_OTHER.WALL_DEATH_SWAMP, // DESTROYED_BUILDING_1x1
        GROUP_FILES_OTHER.BUILDING_DEATH_SWAMP, // DESTROYED_BUILDING_2x2
        GROUP_FILES_OTHER.BUILDING_DEATH_SWAMP | 0x8000, // DESTROYED_BUILDING_3x3
        GROUP_FILES_OTHER.BUILDING_DEATH_SWAMP | 0x8000, // DESTROYED_BUILDING_4x4
    ],
};
