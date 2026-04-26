// ============================================================
// VOTON EMPIRE — SHIP DEFINITIONS
// ============================================================
// Voton ships use shields (shieldMax) that recharge each turn.
// Shields absorb damage before HP. Shields recharge fully at turn start.
// Drones are small and cheap — the Voton start with 3.

const VOTON_SHIPS = {
  drone:          { name: 'Drone',          cost: { minerals: 2 },                            speed: 3, cargo: 2,  combat: 1,  hp: 1,  range: 1, armor: 0, shieldMax: 1, desc: 'Tiny scout. 2 cargo, 1 shield.' },
  crystal_barge:  { name: 'Crystal Barge',  cost: { minerals: 7, cores: 2 },                  speed: 2, cargo: 16, combat: 0,  hp: 5,  range: 0, armor: 0, shieldMax: 3, desc: 'Heavy hauler. 16 cargo, 3 shields, no weapons.' },
  shard:          { name: 'Shard',          cost: { minerals: 6, cores: 4 },                  speed: 4, cargo: 0,  combat: 3,  hp: 2,  range: 1, armor: 0, shieldMax: 2, crystalReq: 1, desc: 'Fast interceptor. 3 combat, 2 shields. Crystal 1.' },
  prism_cruiser:  { name: 'Prism Cruiser',  cost: { minerals: 12, cores: 6 },                 speed: 3, cargo: 4,  combat: 2,  hp: 7,  range: 2, armor: 1, shieldMax: 4, crystalReq: 2, desc: 'Multi-role. Range 2, 4 shields, 1 armor. Crystal 2.' },
  void_lancer:    { name: 'Void Lancer',    cost: { minerals: 22, stardust: 2, cores: 10 },   speed: 4, cargo: 0,  combat: 4,  hp: 12, range: 3, armor: 1, shieldMax: 6, crystalReq: 3, desc: 'Capital ship. Range 3, 6 shields. Crystal 3.' },
  crystal_clipper: { name: 'Crystal Clipper', cost: { minerals: 12, stardust: 3, cores: 5 },  speed: 6, cargo: 12, combat: 2,  hp: 6,  range: 1, armor: 0, shieldMax: 4, crystalReq: 2, desc: 'Fast transport. 6 speed, 12 cargo, 4 shields. Crystal 2.' },
  monolith:       { name: 'Monolith',       cost: { minerals: 34, stardust: 8, cores: 18 },   speed: 3, cargo: 0,  combat: 3,  hp: 20, range: 3, armor: 2, shieldMax: 10, attacks: 2, crystalReq: 4, desc: 'Dreadnought. 2 attacks, range 3, 10 shields, 2 armor. Crystal 4.' },
};
