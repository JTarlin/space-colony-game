// ============================================================
// SHIP DEFINITIONS
// ============================================================
const SHIPS = {
  hovertranspo:  { name: 'Hover Transpo',  cost: { minerals: 3 },                  speed: 2, cargo: 8,  combat: 1,  hp: 3,  range: 1, armor: 0, desc: 'Fast scout. 8 cargo, 1 combat, 3 HP.' },
  hauler: { name: 'Hauler', cost: { minerals: 6, credits: 3 },      speed: 2, cargo: 20, combat: 0,  hp: 6,  range: 0, armor: 0, desc: 'Heavy hauler. 20 cargo, no weapons, 6 HP.' },
  fighter:   { name: 'Fighter',   cost: { minerals: 5, credits: 3 },      speed: 3, cargo: 0,  combat: 3,  hp: 2,  range: 1, armor: 0, desc: 'Fast attack. 3 combat, no armor, 2 HP.' },
  corvette:  { name: 'Corvette',  cost: { minerals: 10, credits: 5 },     speed: 3, cargo: 5,  combat: 2,  hp: 6,  range: 2, armor: 1, desc: 'Multi-role. 5 cargo, range 2, 1 armor.' },
  starship:  { name: 'Starship',  cost: { minerals: 20, credits: 10 },    speed: 4, cargo: 0,  combat: 4, hp: 14, range: 3, armor: 1, desc: 'Capital ship. 4 combat, range 3, 1 armor, 14 HP.' },
  stellar_clipper: { name: 'Stellar Clipper', cost: { minerals: 10, stardust: 3, credits: 5 }, speed: 6, cargo: 15, combat: 2, hp: 8, range: 1, armor: 1, desc: 'Fast transport. 6 speed, 15 cargo, 1 armor.' },
  battlecruiser: { name: 'Battlecruiser', cost: { minerals: 30, stardust: 6, credits: 15 }, speed: 5, cargo: 0, combat: 3, hp: 24, range: 3, armor: 2, attacks: 2, desc: 'Dreadnought. 2 attacks/turn, range 3, 2 armor, 24 HP.' },
};
