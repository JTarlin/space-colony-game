// ============================================================
// BUILDING DEFINITIONS
// ============================================================
// Player buildings
const BLDG = {
  command_center: {
    name: 'Command Center', sym: 'CC',
    cost: {}, prod: { minerals: 2, energy: 2, food: 1, credits: 1 }, cons: {},
    hp: 20, combat: 2, canBuild: false, pop: 0, popCap: 5,
    desc: 'Colony HQ. Produces basic resources. +5 Pop cap. Lose this = defeat.',
  },
  relay: {
    name: 'Relay Station', sym: 'RS',
    cost: { minerals: 3 }, prod: {}, cons: {},
    hp: 3, combat: 0, pop: 1,
    desc: 'Network extender. Transfers resources to/from adjacent once per turn.',
  },
  solar_array: {
    name: 'Solar Array', sym: 'SA',
    cost: { minerals: 5 }, prod: { energy: 4 }, cons: {},
    hp: 5, combat: 0, pop: 0,
    desc: '+4 Energy/turn.',
  },
  reactor: {
    name: 'Reactor', sym: 'RC',
    cost: { minerals: 20 }, prod: { energy: 20 }, cons: {},
    hp: 16, combat: 0, pop: 4,
    desc: '+20 Energy/turn. Efficient but expensive.',
  },
  mine: {
    name: 'Mine', sym: 'MI',
    cost: { minerals: 6 }, prod: { minerals: 5 }, cons: { energy: 1 },
    hp: 6, combat: 0, pop: 2, needsTerrain: 'asteroid',
    desc: '+5 Minerals, -1 Energy. Asteroid only.',
  },
  reprocessor: {
    name: 'Reprocessor', sym: 'RP',
    cost: { minerals: 4 }, prod: { food: 1 }, cons: { energy: 1 },
    hp: 6, combat: 0, pop: 0,
    desc: '+1 Food, -1 Energy.',
  },
  hydroponics: {
    name: 'Hydroponics', sym: 'HY',
    cost: { minerals: 8 }, prod: { food: 5 }, cons: { energy: 1 },
    hp: 8, combat: 0, pop: 2,
    desc: '+5 Food, -1 Energy.',
  },
  habitat: {
    name: 'Habitat', sym: 'HB',
    cost: { minerals: 10 }, prod: {}, cons: { food: 2 },
    hp: 6, combat: 0, pop: 0, popCap: 10,
    desc: 'Housing. +10 Pop cap, consumes 2 Food from adjacent.',
  },
  factory: {
    name: 'Factory', sym: 'FA',
    cost: { minerals: 12 }, prod: { credits: 5 }, cons: { minerals: 2, energy: 2 },
    hp: 8, combat: 0, pop: 3,
    desc: '-2◆, -2⚡ → +5¤/turn.',
  },
  spaceport: {
    name: 'Spaceport', sym: 'SP',
    cost: { minerals: 16, credits: 5 }, prod: {}, cons: { energy: 1 },
    hp: 10, combat: 0, pop: 3,
    desc: 'Build ships here. -1 Energy/turn.',
  },
  defense_turret: {
    name: 'Defense Turret', sym: 'DT',
    cost: { minerals: 10, credits: 2 }, prod: {}, cons: { energy: 2 },
    hp: 14, combat: 7, range: 1, armor: 0, pop: 1,
    desc: 'Auto-attacks adjacent. 7 combat. -2 Energy/turn.',
  },
  missile_battery: {
    name: 'Missile Battery', sym: 'MB',
    cost: { minerals: 14, credits: 5 }, prod: {}, cons: { energy: 3 },
    hp: 10, combat: 5, range: 3, armor: 2, pop: 2,
    desc: 'Long-range turret. Range 3, 5 combat, 2 armor. -3 Energy/turn.',
  },
  dust_siphon: {
    name: 'Dust Siphon', sym: 'DS',
    cost: { minerals: 12, credits: 4 }, prod: { stardust: 2 }, cons: { energy: 2 },
    hp: 8, combat: 0, pop: 2, needsTerrain: 'nebula',
    desc: '+2 Stardust, -2 Energy. Nebula only.',
  },
  research_lab: {
    name: 'Research Lab', sym: 'RL',
    cost: { minerals: 18, stardust: 4, credits: 6 }, prod: {}, cons: { energy: 3 },
    hp: 10, combat: 0, pop: 3,
    desc: 'Unlocks upgrades. Select to purchase research.',
  },
};

// Enemy buildings
const EBLDG = {
  pirate_base:   { name: 'Pirate Base',   sym: 'PB', hp: 25, combat: 5, range: 1, armor: 2 },
  pirate_turret: { name: 'Pirate Turret', sym: 'PT', hp: 15, combat: 8, range: 2, armor: 1 },
  // Rival buildings — full economy like player
  rival_hq: {
    name: 'Rival HQ', sym: 'RH', hp: 30, combat: 6, range: 1, armor: 3,
    prod: { minerals: 2, energy: 2, food: 1 }, cons: {}, pop: 0, popCap: 5,
  },
  rival_solar: {
    name: 'Rival Solar', sym: 'RS', hp: 5, combat: 0, range: 0, armor: 0,
    cost: { minerals: 5 }, prod: { energy: 4 }, cons: {}, pop: 0,
  },
  rival_mine: {
    name: 'Rival Mine', sym: 'RM', hp: 10, combat: 0, range: 0, armor: 0,
    cost: { minerals: 6 }, prod: { minerals: 5 }, cons: { energy: 1 }, needsTerrain: 'asteroid', pop: 2,
  },
  rival_hydro: {
    name: 'Rival Farm', sym: 'RF', hp: 8, combat: 0, range: 0, armor: 0,
    cost: { minerals: 8 }, prod: { food: 5 }, cons: { energy: 1 }, pop: 2,
  },
  rival_habitat: {
    name: 'Rival Habitat', sym: 'RB', hp: 6, combat: 0, range: 0, armor: 0,
    cost: { minerals: 10 }, prod: {}, cons: { food: 2 }, pop: 0, popCap: 10,
  },
  rival_factory: {
    name: 'Rival Factory', sym: 'RW', hp: 8, combat: 0, range: 0, armor: 0,
    cost: { minerals: 12 }, prod: { credits: 5 }, cons: { minerals: 2, energy: 2 }, pop: 3,
  },
  rival_spaceport: {
    name: 'Rival Spaceport', sym: 'RP', hp: 10, combat: 0, range: 0, armor: 0,
    cost: { minerals: 16 }, prod: {}, cons: { energy: 1 }, pop: 3,
  },
  rival_turret: {
    name: 'Rival Turret', sym: 'RT', hp: 15, combat: 8, range: 2, armor: 1,
    cost: { minerals: 10 }, prod: {}, cons: { energy: 2 }, pop: 1,
  },
  rival_relay: {
    name: 'Rival Relay', sym: 'RR', hp: 3, combat: 0, range: 0, armor: 0,
    cost: { minerals: 3 }, prod: {}, cons: {}, pop: 1,
  },
  ruins: { name: 'Ruins', sym: '~~', hp: 0, combat: 0 },
};
