import type { Metadata } from 'next';
import Link from 'next/link';
import { casinos } from '@/lib/casinos';
import StarRating from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'Best Casino Bonuses in Canada 2024',
  description:
    'Find the best casino bonuses for Ontario and Alberta players. Welcome bonuses, free spins, and no-deposit offers from licensed Canadian casinos.',
};

const bonusTypes = [
  { id: 'welcome', label: '🎁 Welcome Bonuses', icon: '🎁' },
  { id: 'no-deposit', label: '🆓 No Deposit', icon: '🆓' },
  { id: 'free-spins', label: '🎰 Free Spins', icon: '🎰' },
  { id: 'reload', label: '🔄 Reload Bonuses', icon: '🔄' },
];

const bonusGuide = [
  {
    q: 'What is a wagering requirement?',
    a: 'A wagering requirement (also called playthrough) is the number of times you must bet your bonus amount before you can withdraw winnings. For example, a $100 bonus with 30x wagering means you must wager $3,000 in total.',
  },
  {
    q: 'Are casino bonuses worth it?',
    a: 'It depends on the terms. Bonuses with low wagering requirements (under 30x) on high-RTP slots are generally worthwhile. Always read the full T&Cs before claiming.',
  },
  {
    q: 'What is a no-deposit bonus?',
    a: "A no-deposit bonus gives you free credits or spins without needing to deposit first. They're typically small ($10-$25) but let you try a casino risk-free.",
  },
  {
    q: 'Which casino has the best bonus in Ontario?',
    a: 'BetMGM currently offers the largest total package ($1,000 + $25 free), while PointsBet has the most player-friendly terms with no wagering requirements on credits.',
  },
];

export default function BonusesPage() {
  const sortedCasinos = [...casinos].sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-800/60 border border-green-600 rounded-full px-4 py-1.5 text-sm text-gold-300 font-medium mb-4">
            🎁 Updated {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Best Casino Bonuses in Canada
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Exclusive welcome offers, no-deposit bonuses, and free spins for Ontario and Alberta players. 
            All from fully licensed operators.
          </p>
        </div>
      </section>

      {/* Bonus type filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {bonusTypes.map((type) => (
              <a
                key={type.id}
                href={`#${type.id}`}
                className="badge text-sm px-4 py-1.5 bg-gray-100 text-gray-600 border border-gray-200 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all"
              >
                {type.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Bonuses Table / Cards */}
      <section id="welcome" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h2 className="section-title mb-2">🎁 Welcome Bonuses</h2>
          <p className="text-gray-500">All welcome bonuses listed are from AGCO or AGLC licensed operators</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-forest-900 text-white text-sm">
                <th className="text-left px-5 py-4 font-semibold">#</th>
                <th className="text-left px-5 py-4 font-semibold">Casino</th>
                <th className="text-left px-5 py-4 font-semibold">Welcome Bonus</th>
                <th className="text-left px-5 py-4 font-semibold">Bonus Code</th>
                <th className="text-left px-5 py-4 font-semibold">Province</th>
                <th className="text-left px-5 py-4 font-semibold">Rating</th>
                <th className="text-center px-5 py-4 font-semibold">Claim</th>
              </tr>
            </thead>
            <tbody>
              {sortedCasinos.map((casino, i) => (
                <tr key={casino.slug} className="border-t border-gray-100 hover:bg-gold-50/30 transition-colors group">
                  <td className="px-5 py-4">
                    <span className="w-7 h-7 rounded-full bg-forest-900 text-gold-400 text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-700 to-forest-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold-400 font-black">{casino.name.charAt(0)}</span>
                      </div>
                      <div>
                        <Link href={`/casinos/${casino.slug}`} className="font-bold text-gray-900 hover:text-green-700">
                          {casino.name}
                        </Link>
                        <div className="text-xs text-green-600 font-medium">{casino.licenseInfo}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-bold text-forest-900">{casino.welcomeBonus}</div>
                  </td>
                  <td className="px-5 py-4">
                    {casino.bonusCode ? (
                      <span className="font-mono font-bold text-sm bg-gold-100 text-gold-800 border border-gold-300 px-2 py-1 rounded">
                        {casino.bonusCode}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">Auto-applied</span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {casino.province.map((p) => (
                        <span key={p} className="badge badge-green text-xs">{p}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <StarRating rating={casino.rating} size="sm" />
                  </td>
                  <td className="px-5 py-4 text-center">
                    <Link
                      href={`/go/${casino.slug}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="btn-primary text-xs py-2 px-4"
                    >
                      Claim
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              All bonuses subject to T&Cs. 19+. Gamble responsibly.{' '}
              <a href="https://www.problemgambling.ca/" className="underline" target="_blank" rel="noopener noreferrer">problemgambling.ca</a>
            </p>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {sortedCasinos.map((casino, i) => (
            <div key={casino.slug} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-forest-900 text-gold-400 text-xs font-black flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-700 to-forest-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-black">{casino.name.charAt(0)}</span>
                </div>
                <div>
                  <Link href={`/casinos/${casino.slug}`} className="font-bold text-gray-900 hover:text-green-700">{casino.name}</Link>
                  <StarRating rating={casino.rating} size="sm" />
                </div>
              </div>
              <div className="bg-gold-50 rounded-xl p-3 mb-3">
                <div className="text-xs text-gray-500 mb-0.5">Welcome Bonus</div>
                <div className="font-bold text-forest-900">{casino.welcomeBonus}</div>
                {casino.bonusCode && (
                  <div className="text-xs mt-1">Code: <span className="font-mono font-bold text-gold-700">{casino.bonusCode}</span></div>
                )}
              </div>
              <div className="flex gap-2">
                <Link href={`/go/${casino.slug}`} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex-1 text-sm py-2.5">
                  Claim Bonus
                </Link>
                <Link href={`/casinos/${casino.slug}`} className="btn-outline flex-1 text-sm py-2.5">
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* No Deposit section */}
      <section id="no-deposit" className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="section-title mb-2">🆓 No Deposit Bonuses</h2>
          <p className="text-gray-500 mb-8">Try before you deposit — risk-free offers for new Canadian players</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { casino: 'BetMGM Casino', offer: '$25 Free on Sign-Up', note: 'No deposit needed. 30x wagering on winnings.', slug: 'betmgm' },
              { casino: 'FanDuel Casino', offer: '$10 Free Bonus Bet', note: 'Auto-credited after registration. No code needed.', slug: 'fanduel' },
              { casino: 'PointsBet Casino', offer: '$10 in Casino Credits', note: 'No wagering required on credits.', slug: 'pointsbet' },
            ].map((item) => (
              <div key={item.casino} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🆓</span>
                  <h3 className="font-bold text-gray-900">{item.casino}</h3>
                </div>
                <div className="text-xl font-bold text-forest-900 mb-1">{item.offer}</div>
                <p className="text-sm text-gray-500 mb-4">{item.note}</p>
                <Link href={`/go/${item.slug}`} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary w-full text-sm py-2.5">
                  Claim Free Bonus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Spins */}
      <section id="free-spins" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="section-title mb-2">🎰 Free Spins Offers</h2>
        <p className="text-gray-500 mb-8">Free spins on popular slots — included with welcome packages</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { casino: 'Bet99', offer: '100 Free Spins on Book of Dead', note: 'Awarded after $50+ first deposit. Value: $0.20/spin.', slug: 'bet99' },
            { casino: 'DraftKings Casino', offer: '50 Free Spins on Starburst', note: 'Included in welcome package. $0.40/spin.', slug: 'draftkings' },
            { casino: 'Sports Interaction', offer: '30 Free Spins on Mega Moolah', note: 'Available to new players on first deposit.', slug: 'sports-interaction' },
          ].map((item) => (
            <div key={item.casino} className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎰</span>
                <h3 className="font-bold text-gray-900">{item.casino}</h3>
              </div>
              <div className="text-xl font-bold text-forest-900 mb-1">{item.offer}</div>
              <p className="text-sm text-gray-500 mb-4">{item.note}</p>
              <Link href={`/go/${item.slug}`} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary w-full text-sm py-2.5">
                Get Free Spins
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Guide FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-3">Casino Bonus Guide</h2>
          <p className="text-gray-500 text-center mb-10">Everything you need to know before claiming a bonus</p>
          <div className="space-y-4">
            {bonusGuide.map((item) => (
              <div key={item.q} className="card p-5">
                <h3 className="font-bold text-forest-900 mb-2 flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
