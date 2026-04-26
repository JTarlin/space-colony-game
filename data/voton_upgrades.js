// ============================================================
// VOTON EMPIRE — UPGRADE DEFINITIONS
// ============================================================
// Purchased at an Arcanum (Voton research lab).

const VOTON_UPGRADES = {
  crystal_drives: {
    name: 'Crystal Drives',
    cost: { minerals: 8, stardust: 6 },
    effect: 'ship_speed',
    bonus: 1,
    desc: 'All ships gain +1 speed.',
  },
  resonant_shields: {
    name: 'Resonant Shields',
    cost: { minerals: 6, stardust: 8 },
    effect: 'ship_shields',
    bonus: 3,
    desc: 'All ships gain +3 max shields.',
  },
  crystal_lattice: {
    name: 'Crystal Lattice',
    cost: { minerals: 10, stardust: 6 },
    effect: 'building_toughness',
    bonusHp: 6,
    bonusArmor: 2,
    desc: 'All buildings gain +6 max HP and +2 armor.',
  },
  focused_prisms: {
    name: 'Focused Prisms',
    cost: { minerals: 8, stardust: 7 },
    effect: 'turret_damage',
    bonus: 4,
    desc: 'Crystal Cannons and Prism Arrays deal +4 combat damage.',
  },
  reinforced_hulls: {
    name: 'Reinforced Hulls',
    cost: { minerals: 7, stardust: 5 },
    effect: 'ship_hp',
    bonus: 4,
    desc: 'All ships gain +4 max HP.',
  },
  extended_sensors: {
    name: 'Extended Sensors',
    cost: { minerals: 6, stardust: 8 },
    effect: 'ship_range',
    bonus: 1,
    desc: 'All combat ships gain +1 attack range.',
  },
  instant_deployment: {
    name: 'Instant Deployment',
    cost: { minerals: 8, stardust: 7 },
    effect: 'ship_ready',
    desc: 'Newly built ships can move and act immediately.',
  },
  warp_conduit: {
    name: 'Warp Conduit',
    cost: { minerals: 8, stardust: 8 },
    effect: 'teleporter_double',
    desc: 'Teleporters can transfer twice per turn.',
  },
  shield_amplifier: {
    name: 'Shield Amplifier',
    cost: { minerals: 10, stardust: 10 },
    effect: 'shield_boost',
    bonus: 4,
    desc: 'Shield Generators project +4 additional shield HP.',
  },
};
