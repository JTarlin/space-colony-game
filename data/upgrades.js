// ============================================================
// UPGRADE DEFINITIONS
// ============================================================
// Each upgrade can be purchased once at a Research Lab.
// cost: { minerals, stardust } — tile resources consumed from adjacent.
// effect: string key used by game logic to apply the bonus.
// Upgrades are permanent once purchased.

const UPGRADES = {
  plasma_thrusters: {
    name: 'Plasma Thrusters',
    cost: { minerals: 6, stardust: 6 },
    effect: 'ship_speed',
    bonus: 1,
    desc: 'All ships gain +1 speed.',
  },
  harmonic_containment: {
    name: 'Harmonic Containment',
    cost: { minerals: 10, stardust: 5 },
    effect: 'reactor_energy',
    bonus: 10,
    desc: 'Reactors produce +10 energy.',
  },
  ceramic_plating: {
    name: 'Ceramic Plating',
    cost: { minerals: 4, stardust: 4 },
    effect: 'building_toughness',
    bonusHp: 6,
    bonusArmor: 2,
    desc: 'All buildings gain +6 max HP and +2 armor.',
  },
  advanced_targeting: {
    name: 'Advanced Targeting',
    cost: { minerals: 8, stardust: 6 },
    effect: 'turret_damage',
    bonus: 4,
    desc: 'Turrets deal +4 combat damage.',
  },
  reinforced_hulls: {
    name: 'Reinforced Hulls',
    cost: { minerals: 6, stardust: 5 },
    effect: 'ship_hp',
    bonus: 4,
    desc: 'All ships gain +4 max HP.',
  },
  extended_sensors: {
    name: 'Extended Sensors',
    cost: { minerals: 5, stardust: 8 },
    effect: 'ship_range',
    bonus: 1,
    desc: 'All combat ships gain +1 attack range.',
  },
};
