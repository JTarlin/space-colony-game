// ============================================================
// SHIP DEFINITIONS
// ============================================================
const SHIPS = {
  hovertranspo:  { name: 'Hover Transpo',  cost: { minerals: 3 },                  speed: 2, cargo: 8,  combat: 1,  hp: 3,  range: 1, armor: 0, desc: 'Fast scout. 8 cargo, 2 speed.' },
  hauler: { name: 'Hauler', cost: { minerals: 6, credits: 3 },      speed: 2, cargo: 20, combat: 0,  hp: 6,  range: 0, armor: 0, desc: 'Heavy hauler. 20 cargo, slow.' },
  fighter:   { name: 'Fighter',   cost: { minerals: 5, credits: 3 },      speed: 3, cargo: 0,  combat: 3,  hp: 2,  range: 1, armor: 0, desc: 'Fast attack. 6 combat, no armor.' },
  corvette:  { name: 'Corvette',  cost: { minerals: 10, credits: 5 },     speed: 3, cargo: 5,  combat: 2,  hp: 6,  range: 2, armor: 1, desc: 'Multi-role. Range 2, 2 armor.' },
  starship:  { name: 'Starship',  cost: { minerals: 20, credits: 10 },    speed: 4, cargo: 0,  combat: 4, hp: 14, range: 3, armor: 1, desc: 'Capital ship. Range 3, 4 armor.' },
  stellar_clipper: { name: 'Stellar Clipper', cost: { minerals: 10, stardust: 3, credits: 5 }, speed: 6, cargo: 15, combat: 2, hp: 8, range: 1, armor: 1, desc: 'Fast transport. 4 speed, 15 cargo.' },
  battlecruiser: { name: 'Battlecruiser', cost: { minerals: 30, stardust: 6, credits: 15 }, speed: 5, cargo: 0, combat: 3, hp: 24, range: 3, armor: 2, attacks: 2, desc: 'Dreadnought. 2 attacks/turn, range 3, 5 armor.' },
};
