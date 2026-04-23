// ============================================================
// TRADE POST DEFINITIONS
// ============================================================
// Each trade post offers two deals: one buy (you sell goods for credits)
// and one sell (you buy goods with credits).
// One deal is typically a 'good deal' and the other a 'bad deal'.
// amount = quantity per transaction, price = credits per transaction.

const TRADE_POSTS = {
  smuggler_den: {
    name: 'Smuggler Den', sym: 'SD',
    hp: 12,
    deals: [
      { type: 'buy', resource: 'minerals', amount: 5, price: 12, label: 'Sell 5◆ → 12¤' },   // good deal
      { type: 'sell', resource: 'food',     amount: 3, price: 5, label: 'Buy 3🌿 ← 5¤' },   // bad deal
    ],
    desc: 'Shady traders. Good mineral buyers, overpriced food.',
  },
  fuel_depot: {
    name: 'Fuel Depot', sym: 'FD',
    hp: 10,
    deals: [
      { type: 'buy', resource: 'food',     amount: 4, price: 10, label: 'Sell 4🌿 → 10¤' },   // bad deal
      { type: 'sell', resource: 'minerals', amount: 8, price: 2, label: 'Buy 8◆ ← 2¤' },   // good deal
    ],
    desc: 'Industrial outpost. Cheap minerals, will pay a lot for food.',
  },
  free_market: {
    name: 'Free Market', sym: 'FM',
    hp: 15,
    deals: [
      { type: 'buy', resource: 'minerals', amount: 8, price: 5, label: 'Sell 8◆ → 5¤' },   // bad deal
      { type: 'sell', resource: 'food',     amount: 4, price: 3, label: 'Buy 4🌿 ← 3¤' },   // good deal
    ],
    desc: 'Open bazaar. Cheap food, minerals sell low.',
  },
};
