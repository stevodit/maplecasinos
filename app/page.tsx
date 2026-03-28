import Link from 'next/link';
import { casinos, getFeaturedCasinos } from '@/lib/casinos';
import CasinoCard from '@/components/CasinoCard';
import StarRating from '@/components/StarRating';

export default function HomePage() {
  const featured = getFeaturedCasinos().slice(0, 5);
  const topThree = featured.slice(0, 3);

  return (
    <>
      {/* section */}
      <section className="bg-hero-pattern relative overflow-hidden">
        {/* decorative maple leaves */}
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
          <div className="text-[20rem] absolute -top-20 -right-20 leading-none">🍁</div>
          <div className="text-[12rem] absolute bottom-0 -left-10 leading-none">🍁</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-800/60 border border-green-600 rounded-full px-4 py-1.5 text-sm text-gold-300 font-medium mb-6">
              <span>🍁</span>
              <span>Canada's #1 Casino Review Site</span>
              <span className="bg-gold-500 text-forest-900 text-xs font-bold px-2 py-0.5 rounded-full">2024</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              The Best Online Casinos
              <span className="block text-gold-400">in Ontario & Alberta</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              We test, verify, and rank every licensed casino so you don't have to.
              All sites listed are fully regulated by <strong className="text-white">AGCO</strong> and <strong className="text-white">AGLC</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/casinos" className="btn-primary text-base py-4 px-8 text-lg">
                🎰 View All Casinos
              </Link>
              <Link href="/bonuses" className="btn-outline border-white text-white hover:bg-white hover:text-forest-900 text-base py-4 px-8">
                🎁 Best Bonuses
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✅</span>
                <span>AGCO Licensed Only</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-400 text-lg">⭐</span>
                <span>Expert Reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-lg">🔒</span>
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-lg">🎯</span>
                <span>Updated Monthly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '6', label: 'Licensed Casinos Reviewed', icon: '🏆' },
              { value: '50+', label: 'Bonuses Tracked', icon: '🎁' },
              { value: '100%', label: 'AGCO Regulated', icon: '🛡️' },
              { value: '19+', label: 'Age Restriction', icon: '🔞' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl mb-1">{stat.icon}</span>
                <div className="text-2xl font-black text-forest-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-1">Editor's Picks</p>
            <h2 className="section-title">Top Rated Casinos</h2>
            <p className="text-gray-500 mt-2">All verified, licensed, and tested by our team</p>
          </div>
          <Link href="/casinos" className="hidden sm:block text-green-700 font-semibold hover:text-green-600 text-sm">
            See all casinos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topThree.map((casino, i) => (
            <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
          ))}
        </div>

        {/* Remaining as compact */}
        <div className="mt-6 space-y-3">
          {featured.slice(3).map((casino, i) => (
            <CasinoCard key={casino.slug} casino={casino} rank={i + 4} variant="compact" />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/casinos" className="btn-green text-base py-3 px-8">
            View All Ontario & Alberta Casinos →
          </Link>
        </div>
      </section>

      {/* section */}
      <section className="bg-gradient-to-b from-forest-900 to-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-1">Limited Time Offers</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Top Casino Bonuses</h2>
            <p className="text-gray-300 mt-2">Exclusive offers for Canadian players</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.slice(0, 6).map((casino) => (
              <div key={casino.slug} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-forest-900 font-black text-xl">{casino.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{casino.name}</h3>
                    <StarRating rating={casino.rating} size="sm" />
                  </div>
                </div>
                <div className="bg-gold-500/20 border border-gold-400/30 rounded-xl p-3 mb-4">
                  <div className="text-gold-300 text-xs uppercase tracking-wide font-medium mb-0.5">Welcome Bonus</div>
                  <div className="text-white font-bold text-base">{casino.welcomeBonus}</div>
                  {casino.bonusCode && (
                    <div className="mt-1.5 inline-block text-xs font-mono font-bold bg-gold-500 text-forest-900 px-2 py-0.5 rounded">
                      {casino.bonusCode}
                    </div>
                  )}
                </div>
                <Link
                  href={`/go/${casino.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm py-2.5"
                >
                  Claim Bonus
                </Link>
                <p className="text-center text-xs text-gray-400 mt-2">T&Cs apply · 19+ · Play Responsibly</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/bonuses" className="btn-primary text-base py-3 px-8">
              See All Bonus Offers 🎁
            </Link>
          </div>
        </div>
      </section>

      {/* section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-1">Our Process</p>
            <h2 className="section-title">Why Trust Maple Casinos?</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
              We're Canadians reviewing casinos for Canadians. Every rating is based on hands-on testing, 
              not advertising spend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'Licence Verified',
                desc: 'We only list casinos holding a valid iGaming Ontario (AGCO) or AGLC Alberta licence. No grey-market operators, ever.',
              },
              {
                icon: '🧪',
                title: 'Hands-On Testing',
                desc: 'Our reviewers create real accounts, make real deposits, and test withdrawals before publishing any rating.',
              },
              {
                icon: '⭐',
                title: 'Transparent Ratings',
                desc: 'Our 5-star system covers 8 categories: bonuses, games, payments, support, mobile, security, fairness, and trust.',
              },
              {
                icon: '🔄',
                title: 'Updated Monthly',
                desc: 'Casino terms change. We revisit every review monthly to ensure ratings and bonus info stay accurate.',
              },
              {
                icon: '🇨🇦',
                title: 'Canadian Focus',
                desc: 'We prioritize Interac support, CAD currency, and Canadian customer service hours in every evaluation.',
              },
              {
                icon: '💰',
                title: 'Honest About Affiliates',
                desc: "Yes, we earn commissions. No, it doesn't affect our scores. Low-rated casinos stay low-rated regardless.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 hover:border-l-4 hover:border-l-gold-400 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-forest-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="section-title">Find Casinos Near You</h2>
          <p className="text-gray-500 mt-2">Regulated options for every Canadian province we cover</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ontario */}
          <Link href="/casinos?province=Ontario" className="group card p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-400 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🏙️</span>
              <div>
                <h3 className="font-display text-2xl font-bold text-forest-900">Ontario</h3>
                <p className="text-gray-500 text-sm">{casinos.filter(c => c.province.includes('Ontario')).length} Licensed Casinos</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Ontario has the most competitive regulated online casino market in Canada, overseen by iGaming Ontario (AGCO). 
              Enjoy the biggest brands and best bonuses.
            </p>
            <span className="text-green-700 font-semibold text-sm group-hover:text-green-600">
              View Ontario Casinos →
            </span>
          </Link>

          {/* Alberta */}
          <Link href="/casinos?province=Alberta" className="group card p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 hover:border-amber-400 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🏔️</span>
              <div>
                <h3 className="font-display text-2xl font-bold text-forest-900">Alberta</h3>
                <p className="text-gray-500 text-sm">{casinos.filter(c => c.province.includes('Alberta')).length} Licensed Casinos</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Alberta casinos are regulated by the Alberta Gaming, Liquor & Cannabis Commission (AGLC). 
              A growing market with trusted operators and strong consumer protections.
            </p>
            <span className="text-amber-700 font-semibold text-sm group-hover:text-amber-600">
              View Alberta Casinos →
            </span>
          </Link>
        </div>
      </section>

      {/* section */}
      <section className="bg-gradient-to-r from-forest-900 via-green-800 to-forest-900 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Casino?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Compare bonuses, read expert reviews, and claim your welcome offer today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/casinos" className="btn-primary text-base py-4 px-8">
              🎰 Compare Casinos
            </Link>
            <Link href="/bonuses" className="text-white border-2 border-white hover:bg-white hover:text-forest-900 inline-flex items-center justify-center gap-2 rounded-lg font-bold py-4 px-8 transition-all">
              🎁 Top Bonuses
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-6">19+ only. T&Cs apply. Gamble responsibly. <a href="https://www.problemgambling.ca/" className="underline hover:text-gray-400" target="_blank" rel="noopener noreferrer">problemgambling.ca</a></p>
        </div>
      </section>
    </>
  );
}
