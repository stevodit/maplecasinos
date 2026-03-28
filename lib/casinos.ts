export interface Casino {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  welcomeBonus: string;
  bonusCode?: string;
  affiliateUrl: string;
  province: ('Ontario' | 'Alberta')[];
  tags: string[];
  pros: string[];
  cons: string[];
  shortReview: string;
  fullReview: string;
  minDeposit: string;
  withdrawalTime: string;
  paymentMethods: string[];
  established: number;
  licenseInfo: string;
  gameCount: number;
  featured: boolean;
}

export const casinos: Casino[] = [
  {
    slug: 'bet99',
    name: 'Bet99',
    logo: '/logos/bet99.svg',
    rating: 4.7,
    reviewCount: 1284,
    welcomeBonus: '100% up to $500',
    bonusCode: 'MAPLE99',
    affiliateUrl: 'https://bet99.com',
    province: ['Ontario', 'Alberta'],
    tags: ['Top Pick', 'Best Bonus', 'Live Casino'],
    pros: [
      'Generous welcome bonus up to $500',
      'Huge selection of slots and table games',
      'Fully licensed by AGCO (Ontario)',
      'Fast withdrawals within 24 hours',
      'Excellent live dealer section',
    ],
    cons: [
      'No dedicated mobile app on iOS',
      'Bonus wagering requirements can be high (35x)',
      'Limited cryptocurrency options',
    ],
    shortReview:
      'Bet99 is one of Canada\'s top-rated online casinos, offering a massive game library and a competitive welcome bonus. Licensed by AGCO, it\'s a trusted choice for Ontario and Alberta players.',
    fullReview: `Bet99 has quickly established itself as one of the premier destinations for Canadian online casino players, particularly those in Ontario and Alberta. Since obtaining its AGCO licence, the platform has continued to grow its game library to over 1,000 titles from top providers including NetEnt, Evolution Gaming, and Pragmatic Play.

The welcome bonus is among the most competitive in the market — a 100% match up to $500 on your first deposit, with a bonus code MAPLE99 unlocking the full amount. While the 35x wagering requirement is slightly above industry average, the sheer volume of eligible games makes clearing it manageable.

Where Bet99 truly shines is its live casino section, powered by Evolution Gaming. From live blackjack and roulette to game shows like Crazy Time and Monopoly Live, the real-time experience is second to none. The sportsbook integration is also a major plus for players who enjoy mixing casino action with sports betting.

Payment processing is reliable and fast, with e-wallets like Interac and InstaDebit facilitating near-instant deposits and withdrawals processed within 24 hours. Customer support is available 24/7 via live chat and email, with knowledgeable agents who can handle most issues efficiently.

Overall, Bet99 earns its place at the top of our Ontario casino rankings. It\'s a well-rounded platform that delivers on both quality and trust.`,
    minDeposit: '$10',
    withdrawalTime: '24 hours',
    paymentMethods: ['Interac', 'Visa', 'Mastercard', 'InstaDebit', 'iDebit'],
    established: 2020,
    licenseInfo: 'AGCO Licensed (iGaming Ontario)',
    gameCount: 1200,
    featured: true,
  },
  {
    slug: 'pointsbet',
    name: 'PointsBet Casino',
    logo: '/logos/pointsbet.svg',
    rating: 4.5,
    reviewCount: 987,
    welcomeBonus: '$200 in Casino Credits',
    bonusCode: 'MAPLE200',
    affiliateUrl: 'https://pointsbet.ca',
    province: ['Ontario'],
    tags: ['No Wagering', 'Sportsbook', 'Trusted'],
    pros: [
      'No wagering requirements on credits',
      'Seamless sportsbook and casino integration',
      'Regular promotions and loyalty rewards',
      'Licensed and regulated by AGCO',
      'Excellent mobile experience',
    ],
    cons: [
      'Smaller game library vs competitors',
      'Alberta not yet available',
      'Bonus credits have 30-day expiry',
    ],
    shortReview:
      'PointsBet Casino offers a unique no-wagering-requirement bonus and seamlessly integrates sports betting with casino play. A great option for Ontario players looking for a trusted, all-in-one platform.',
    fullReview: `PointsBet Casino has carved out a unique niche in the Ontario market by offering something rare: casino credits with no wagering requirements. The $200 welcome offer is straightforward — credits are earned and can be converted to real cash without the usual rollover hoops, making it a genuinely player-friendly deal.

The game library, while not the largest at around 600 titles, covers all the essentials. Slots from providers like IGT and Scientific Games sit alongside a solid table game section. The live casino, powered by Evolution and Ezugi, is a highlight, featuring multiple blackjack and roulette variants.

One of PointsBet's greatest strengths is its unified platform experience. Players can seamlessly switch between sports betting and casino play within the same account, sharing the same wallet and promotions. This integration is among the smoothest in the industry.

The mobile app (available on both iOS and Android) is polished and fast, making it ideal for on-the-go play. Banking is handled via Interac, credit cards, and several e-wallet options, with withdrawals typically processed within 48 hours.

For Ontario players who value transparency and simplicity over raw game volume, PointsBet Casino is a top contender.`,
    minDeposit: '$10',
    withdrawalTime: '48 hours',
    paymentMethods: ['Interac', 'Visa', 'Mastercard', 'PayPal'],
    established: 2021,
    licenseInfo: 'AGCO Licensed (iGaming Ontario)',
    gameCount: 600,
    featured: true,
  },
  {
    slug: 'betmgm',
    name: 'BetMGM Casino',
    logo: '/logos/betmgm.svg',
    rating: 4.6,
    reviewCount: 2103,
    welcomeBonus: 'Up to $1,000 Bonus + $25 Free',
    bonusCode: 'MAPLECA',
    affiliateUrl: 'https://betmgm.ca',
    province: ['Ontario'],
    tags: ['#1 Bonus', 'VIP Program', 'Slots Heaven'],
    pros: [
      'Largest welcome bonus — up to $1,000',
      '$25 free on sign-up (no deposit needed)',
      'Massive MGM Rewards loyalty programme',
      'Over 1,500 slots and table games',
      'Industry-leading customer support',
    ],
    cons: [
      'Complex bonus terms and conditions',
      'Only available in Ontario (not Alberta)',
      'KYC verification can take time',
    ],
    shortReview:
      'BetMGM Casino brings the prestige of one of the world\'s most iconic casino brands to Ontario. With a $1,000 welcome bonus, a $25 no-deposit freebie, and a world-class game library, it\'s hard to beat.',
    fullReview: `BetMGM Casino Ontario represents the gold standard for licensed online casino gaming in Canada. Backed by the MGM Resorts International brand, this platform delivers an experience that rivals Las Vegas in quality and variety.

The welcome package is the most generous we've reviewed: up to $1,000 in bonus funds on your first deposit, plus a $25 free bonus just for registering — no deposit required. While the 30x wagering requirement applies to the deposit match, the free $25 comes with more relaxed terms, making it an excellent entry point for new players.

The game library is extraordinary. Over 1,500 titles span slots, table games, video poker, and live dealer options. MGM has secured exclusive content from Inspired Entertainment and WMS, giving players access to games they won't find elsewhere. The live casino section, powered by Evolution, includes high-limit tables and exclusive Ontario variants.

BetMGM's MGM Rewards loyalty programme is one of the most sophisticated in the industry. Players earn tier points on every wager, unlocking progressively better rewards including cashback, free spins, and real-world hotel vouchers at MGM properties.

Customer support is exemplary, with 24/7 live chat staffed by agents who genuinely know the product. Banking is comprehensive, supporting Interac, major credit cards, PayPal, and several other e-wallets.

For Ontario players seeking a premium, brand-name experience, BetMGM Casino is the benchmark.`,
    minDeposit: '$10',
    withdrawalTime: '24-48 hours',
    paymentMethods: ['Interac', 'Visa', 'Mastercard', 'PayPal', 'Skrill'],
    established: 2021,
    licenseInfo: 'AGCO Licensed (iGaming Ontario)',
    gameCount: 1500,
    featured: true,
  },
  {
    slug: 'draftkings',
    name: 'DraftKings Casino',
    logo: '/logos/draftkings.svg',
    rating: 4.4,
    reviewCount: 1456,
    welcomeBonus: '100% up to $2,000',
    bonusCode: 'MAPLEDRAFT',
    affiliateUrl: 'https://draftkings.ca',
    province: ['Ontario'],
    tags: ['Huge Match', 'DFS Integration', 'Daily Promos'],
    pros: [
      'Massive $2,000 welcome bonus',
      'Deep integration with DraftKings Sportsbook',
      'Daily promotions and reload bonuses',
      'Sleek, modern interface',
      'Strong responsible gambling tools',
    ],
    cons: [
      'High wagering requirement (40x)',
      'Limited to Ontario only',
      'Game library smaller than MGM',
    ],
    shortReview:
      'DraftKings Casino Ontario offers one of the biggest welcome bonuses in the market at $2,000, backed by the trusted DraftKings brand. Ideal for sports bettors who also love casino action.',
    fullReview: `DraftKings has leveraged its dominant position in the daily fantasy sports world to build a compelling online casino product in Ontario. The $2,000 welcome bonus is technically the largest dollar amount in our rankings, though the 40x wagering requirement means it requires patience to unlock.

The platform's greatest strength is its ecosystem approach. Players who use DraftKings for fantasy sports, sportsbook, and casino share the same account, wallet, and rewards — creating a seamless experience across all product verticals. Daily promotions are plentiful, with odds boosts, casino missions, and free spin offers refreshed regularly.

The game library features around 900 titles, including a strong selection of progressive jackpot slots and exclusive DraftKings-branded content. The live casino section covers the essentials, though it's not as expansive as BetMGM's offering.

The mobile app is genuinely excellent — fast, intuitive, and reliable. Banking includes Interac e-Transfer, which is the preferred deposit method for most Canadian players, alongside the usual credit/debit card options.

DraftKings takes responsible gambling seriously, offering deposit limits, self-exclusion, and reality check tools that are among the most comprehensive in the Ontario market.

A strong all-rounder that particularly appeals to the sports betting crossover audience.`,
    minDeposit: '$5',
    withdrawalTime: '24-72 hours',
    paymentMethods: ['Interac', 'Visa', 'Mastercard', 'Online Banking'],
    established: 2021,
    licenseInfo: 'AGCO Licensed (iGaming Ontario)',
    gameCount: 900,
    featured: true,
  },
  {
    slug: 'fanduel',
    name: 'FanDuel Casino',
    logo: '/logos/fanduel.svg',
    rating: 4.5,
    reviewCount: 1789,
    welcomeBonus: 'Play $5, Get $200 in Bonus Bets',
    bonusCode: 'MAPLEFAN',
    affiliateUrl: 'https://fanduel.ca',
    province: ['Ontario'],
    tags: ['Low Risk Bonus', 'Top App', 'Fast Payouts'],
    pros: [
      'Low-risk promo: only $5 to trigger $200 bonus',
      'Best-rated mobile app in Ontario',
      'Lightning-fast payouts (same-day available)',
      'Excellent live casino selection',
      'Trusted American brand with Canadian licence',
    ],
    cons: [
      'Lower traditional welcome bonus value',
      'Ontario-only (no Alberta)',
      'Limited slots vs BetMGM',
    ],
    shortReview:
      'FanDuel Casino Ontario keeps it simple and player-friendly with a low-risk $200 bonus offer and the highest-rated casino app in the province. Same-day payouts and stellar live tables seal the deal.',
    fullReview: `FanDuel Casino Ontario has rapidly built a loyal following by focusing on what matters most to players: simplicity, reliability, and speed. The "play $5, get $200" welcome offer is brilliantly designed — the barrier to claim your bonus is as low as it gets, making it ideal for cautious new players.

The mobile app is consistently rated #1 in Ontario across both the App Store and Google Play. It's fast, beautifully designed, and covers every feature available on desktop. For mobile-first players, FanDuel is the clear leader.

The game library, while not the largest, is curated with quality in mind. Around 800 titles span all major categories, with particular strength in live dealer games. FanDuel has invested heavily in its Evolution Gaming live casino partnership, resulting in an immersive real-time experience with multiple camera angles and professional dealers.

Where FanDuel truly differentiates itself is payout speed. Same-day withdrawals via Interac e-Transfer are available to verified players, with a 98%+ payout request approval rate. For players who value quick access to their winnings, this is unmatched in the Ontario market.

Customer support is available 24/7 and consistently earns high ratings for response time and issue resolution. The platform's integration with FanDuel Sportsbook is smooth, making it a great home base for Canadian sports fans who want casino action alongside their bets.`,
    minDeposit: '$10',
    withdrawalTime: 'Same day',
    paymentMethods: ['Interac', 'Visa', 'Mastercard', 'PayPal', 'VIP Preferred'],
    established: 2022,
    licenseInfo: 'AGCO Licensed (iGaming Ontario)',
    gameCount: 800,
    featured: true,
  },
  {
    slug: 'sports-interaction',
    name: 'Sports Interaction Casino',
    logo: '/logos/si.svg',
    rating: 4.2,
    reviewCount: 743,
    welcomeBonus: '100% up to $300',
    affiliateUrl: 'https://sportsinteraction.com',
    province: ['Ontario', 'Alberta'],
    tags: ['Canadian Brand', 'Both Provinces', 'Great Odds'],
    pros: [
      'Canadian-owned and operated',
      'Available in both Ontario and Alberta',
      'Long track record since 1997',
      'Great sportsbook with casino combo',
      'Bilingual support (English & French)',
    ],
    cons: [
      'Smaller casino game library',
      'Outdated mobile interface',
      'Slower withdrawal processing',
    ],
    shortReview:
      'Sports Interaction is one of Canada\'s original online betting brands, now fully licensed for Ontario and Alberta. A trusted homegrown option with solid bonuses and bilingual support.',
    fullReview: `Sports Interaction holds a special place in the Canadian gambling landscape — it's one of the few truly homegrown brands that has navigated the regulatory landscape to emerge fully licensed in both Ontario and Alberta. Founded in 1997, the platform has nearly three decades of experience serving Canadian players.

The casino product has grown significantly in recent years, now featuring around 500 games from providers including Microgaming and NetEnt. While the library isn't as vast as the American-backed newcomers, the quality is consistent and the titles are well-curated for Canadian tastes.

The welcome bonus of 100% up to $300 is respectable, with 30x wagering requirements that are among the most player-friendly in the market. The sportsbook integration remains the platform's crown jewel — odds are consistently competitive, and the variety of Canadian sports markets (including CFL and OHL hockey) is unmatched.

Banking is straightforward with Interac e-Transfer, credit cards, and a handful of e-wallet options. Withdrawals take 2-3 business days, which is slower than the American brands but in line with Canadian-operated expectations.

Bilingual support (English and French) is a genuine differentiator for Quebec-origin players who relocate to Ontario or Alberta. For Canadian players who value heritage and trust over flashy bonuses, Sports Interaction is a solid, reliable choice.`,
    minDeposit: '$10',
    withdrawalTime: '2-3 business days',
    paymentMethods: ['Interac', 'Visa', 'Mastercard', 'iDebit'],
    established: 1997,
    licenseInfo: 'AGCO Licensed + AGLC Registered',
    gameCount: 500,
    featured: false,
  },
];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}

export function getFeaturedCasinos(): Casino[] {
  return casinos.filter((c) => c.featured);
}

export function getCasinosByProvince(province: 'Ontario' | 'Alberta'): Casino[] {
  return casinos.filter((c) => c.province.includes(province));
}

export function renderStars(rating: number): { full: number; half: boolean; empty: number } {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}
