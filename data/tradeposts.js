// ============================================================
// TRADE POST DEFINITIONS
// ============================================================
// Each trade post offers two deals: one buy (you sell goods for credits)
// and one sell (you buy goods with credits).
// One deal is typically a 'good deal' and the other a 'bad deal'.
// amount = quantity per transaction, price = credits per transaction.

const TRADE_POSTS = {
  smuggler_den: {
    name: 'Smuggler Den', sym: 'SD', faction: 'Smugglers Guild', portrait: 'assets/smuggler.png',
    hp: 12,
    deals: [
      { type: 'buy', resource: 'minerals', amount: 3, price: 15, label: 'Sell 3◆ → 15¤' },
      { type: 'sell', resource: 'food',     amount: 6, price: 4, label: 'Buy 6🌿 ← 4¤' },
    ],
    desc: 'Shady traders. Great mineral prices and bulk food on the cheap.',
  },
  fuel_depot: {
    name: 'Fuel Depot', sym: 'FD', faction: 'Fuel Corp', portrait: 'assets/fuel_depot.png',
    hp: 10,
    deals: [
      { type: 'buy', resource: 'food',     amount: 3, price: 12, label: 'Sell 3🌿 → 12¤' },
      { type: 'sell', resource: 'minerals', amount: 10, price: 3, label: 'Buy 10◆ ← 3¤' },
    ],
    desc: 'Industrial outpost. Dirt-cheap bulk minerals, pays premium for food.',
  },
  free_market: {
    name: 'Free Market', sym: 'FM', faction: 'Free Market Consortium', portrait: 'assets/free_market.png',
    hp: 15,
    deals: [
      { type: 'sell', resource: 'minerals', amount: 6, price: 2, label: 'Buy 6◆ ← 2¤' },
      { type: 'sell', resource: 'food',     amount: 6, price: 2, label: 'Buy 6🌿 ← 2¤' },
    ],
    desc: 'Open bazaar. Cheap supplies of everything — a lifeline in a crisis.',
  },
  stardust_broker: {
    name: 'Stardust Broker', sym: 'SB', faction: 'Stardust Brokers', portrait: 'assets/stardust_broker.png',
    hp: 12,
    deals: [
      { type: 'buy', resource: 'stardust', amount: 2, price: 20, label: 'Sell 2✦ → 20¤' },
      { type: 'sell', resource: 'stardust', amount: 3, price: 8, label: 'Buy 3✦ ← 8¤' },
    ],
    desc: 'Exotic dealer. Buys stardust at a premium and sells in bulk.',
  },
  arcane_exchange: {
    name: 'Arcane Exchange', sym: 'AE', faction: 'Arcane Exchange', portrait: 'assets/arcane_exchange.png',
    hp: 10,
    deals: [
      { type: 'sell', resource: 'stardust', amount: 5, price: 12, label: 'Buy 5✦ ← 12¤' },
      { type: 'sell', resource: 'minerals', amount: 8, price: 5, label: 'Buy 8◆ ← 5¤' },
    ],
    desc: 'Mystical traders offering bulk stardust and minerals for credits.',
  },
  void_emporium: {
    name: 'Void Emporium', sym: 'VE', faction: 'Void Emporium', portrait: 'assets/void_emporium.png',
    hp: 14,
    deals: [
      { type: 'buy', resource: 'stardust',  amount: 1, price: 12, label: 'Sell 1✦ → 12¤' },
      { type: 'buy', resource: 'minerals', amount: 4, price: 18, label: 'Sell 4◆ → 18¤' },
    ],
    desc: 'Wealthy collectors. Top-tier prices for stardust and minerals.',
  },
};
