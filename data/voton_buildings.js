// ============================================================
// VOTON EMPIRE — BUILDING DEFINITIONS
// ============================================================
// The Voton use crystal energy instead of electrical energy.
// Crystal Shrines raise your Crystal Level (like a tech tier).
// Some buildings/ships require a minimum crystal level.
// Teleporters replace Relays — instant goods transport to ANY other teleporter.
// Shield Generators project shields over all buildings in the same cluster.

const VOTON_BLDG = {
  voton_nexus: {
    name: 'Nexus', sym: 'VN',
    cost: {}, prod: { minerals: 2, food: 1 }, cons: {},
    hp: 24, combat: 3, canBuild: false, pop: 0, popCap: 4,
    crystalProd: 1,
    desc: 'Voton HQ. Produces resources, grants Crystal Level 1. +4 Pop cap. Lose this = defeat.',
  },
  teleporter: {
    name: 'Teleporter', sym: 'TP',
    cost: { minerals: 5 }, prod: {}, cons: {},
    hp: 2, combat: 0, pop: 1,
    desc: 'Blinks resources instantly to any other Teleporter. Unlimited range.',
  },
  crystal_shrine: {
    name: 'Crystal Shrine', sym: 'CS',
    cost: { minerals: 14, stardust: 2 }, prod: {}, cons: { food: 1 },
    hp: 6, combat: 0, pop: 2,
    crystalProd: 1,
    desc: '+1 Crystal Level. Consumes 1 Food. Powers Voton technology.',
  },
  voton_mine: {
    name: 'Excavator', sym: 'EX',
    cost: { minerals: 8 }, prod: { minerals: 6 }, cons: {},
    hp: 5, combat: 0, pop: 2, needsTerrain: 'asteroid',
    crystalReq: 1,
    desc: '+6 Minerals. Asteroid only. Requires Crystal 1.',
  },
  voton_farm: {
    name: 'Biovault', sym: 'BV',
    cost: { minerals: 10 }, prod: { food: 4 }, cons: {},
    hp: 6, combat: 0, pop: 2,
    crystalReq: 1,
    desc: '+4 Food/turn. Requires Crystal 1.',
  },
  voton_habitat: {
    name: 'Dwelling Spire', sym: 'DS',
    cost: { minerals: 14 }, prod: {}, cons: { food: 3 },
    hp: 8, combat: 0, pop: 0, popCap: 8,
    crystalReq: 1,
    desc: 'Housing. +8 Pop cap, consumes 3 Food. Requires Crystal 1.',
  },
  voton_factory: {
    name: 'Forge', sym: 'FG',
    cost: { minerals: 14 }, prod: { cores: 4 }, cons: { stardust: 1 },
    hp: 10, combat: 0, pop: 3,
    crystalReq: 2,
    desc: '-1 Stardust → +4 Stellar Cores/turn. Requires Crystal 2.',
  },
  voton_spaceport: {
    name: 'Launch Cradle', sym: 'LC',
    cost: { minerals: 18 }, prod: {}, cons: {},
    hp: 12, combat: 0, pop: 3,
    crystalReq: 2,
    desc: 'Build Voton ships here. Requires Crystal 2.',
  },
  shield_generator: {
    name: 'Shield Generator', sym: 'SG',
    cost: { minerals: 16, stardust: 3 }, prod: {}, cons: { food: 1 },
    hp: 6, combat: 0, pop: 2,
    crystalReq: 2,
    shieldRadius: 2,
    shieldHP: 8,
    desc: 'Projects shields over buildings within 2 hexes. 8 shield HP, recharges each turn. Requires Crystal 2.',
  },
  voton_turret: {
    name: 'Crystal Cannon', sym: 'CC',
    cost: { minerals: 12 }, prod: {}, cons: {},
    hp: 4, combat: 6, range: 1, armor: 1, pop: 1,
    crystalReq: 1,
    desc: 'Defensive turret. 6 combat, 1 armor. Requires Crystal 1.',
  },
  voton_artillery: {
    name: 'Prism Array', sym: 'PA',
    cost: { minerals: 16, stardust: 2, cores: 6 }, prod: {}, cons: { food: 1 },
    hp: 4, combat: 5, range: 3, armor: 1, pop: 2,
    crystalReq: 3,
    desc: 'Long-range. Range 3, 5 combat. Requires Crystal 3.',
  },
  voton_dust_siphon: {
    name: 'Ether Well', sym: 'EW',
    cost: { minerals: 14 }, prod: { stardust: 2 }, cons: {},
    hp: 8, combat: 0, pop: 2, needsTerrain: 'nebula',
    crystalReq: 2,
    desc: '+2 Stardust. Nebula only. Requires Crystal 2.',
  },
  voton_research_lab: {
    name: 'Arcanum', sym: 'AR',
    cost: { minerals: 20, stardust: 5, cores: 8 }, prod: {}, cons: { food: 1 },
    hp: 10, combat: 0, pop: 3,
    crystalReq: 3,
    desc: 'Unlocks Voton upgrades. Requires Crystal 3.',
  },
};
