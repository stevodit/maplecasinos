import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-gray-300 mt-20">
      {/* Responsible Gambling Banner */}
      <div className="bg-green-800/50 border-y border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-center">
            <span className="flex items-center gap-2 font-semibold text-white">
              <span>🛡️</span> Gamble Responsibly
            </span>
            <span className="hidden sm:block text-green-500">|</span>
            <span>18+ Only</span>
            <span className="hidden sm:block text-green-500">|</span>
            <a href="https://www.connexontario.ca/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 underline">
              ConnexOntario: 1-866-531-2600
            </a>
            <span className="hidden sm:block text-green-500">|</span>
            <a href="https://www.problemgambling.ca/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 underline">
              Responsible Gambling Council
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                <span className="text-forest-900 font-black text-sm">🍁</span>
              </div>
              <span className="font-display text-xl font-bold text-white">
                Maple<span className="text-gold-400">Casinos</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Canada's trusted guide to licensed online casinos in Ontario and Alberta. 
              Independent reviews, honest ratings.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="badge badge-green text-xs">🏛️ AGCO</span>
              <span className="badge badge-green text-xs">✅ Licensed</span>
            </div>
          </div>

          {/* Casino Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Top Casinos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/casinos/bet99" className="hover:text-gold-400 transition-colors">Bet99 Review</Link></li>
              <li><Link href="/casinos/betmgm" className="hover:text-gold-400 transition-colors">BetMGM Review</Link></li>
              <li><Link href="/casinos/fanduel" className="hover:text-gold-400 transition-colors">FanDuel Review</Link></li>
              <li><Link href="/casinos/draftkings" className="hover:text-gold-400 transition-colors">DraftKings Review</Link></li>
              <li><Link href="/casinos/pointsbet" className="hover:text-gold-400 transition-colors">PointsBet Review</Link></li>
              <li><Link href="/casinos" className="text-gold-400 hover:text-gold-300 transition-colors">All Casinos →</Link></li>
            </ul>
          </div>

          {/* Province Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">By Province</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/casinos?province=Ontario" className="hover:text-gold-400 transition-colors">Ontario Casinos</Link></li>
              <li><Link href="/casinos?province=Alberta" className="hover:text-gold-400 transition-colors">Alberta Casinos</Link></li>
              <li><Link href="/bonuses" className="hover:text-gold-400 transition-colors">Casino Bonuses</Link></li>
              <li><Link href="/bonuses#no-deposit" className="hover:text-gold-400 transition-colors">No Deposit Bonuses</Link></li>
              <li><Link href="/bonuses#free-spins" className="hover:text-gold-400 transition-colors">Free Spins Offers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/how-we-rate" className="hover:text-gold-400 transition-colors">How We Rate</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Use</Link></li>
              <li><Link href="/responsible-gambling" className="hover:text-gold-400 transition-colors">Responsible Gambling</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-green-800/60">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            <strong className="text-gray-400">Affiliate Disclosure:</strong> MapleCasinos.ca is an independent affiliate website. We may earn a commission when you click links to casino partners. This does not affect our reviews, which are based on independent research and testing. All bonuses are subject to each operator's terms and conditions. 
          </p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mt-2">
            <strong className="text-gray-400">Gambling Disclaimer:</strong> Online gambling is legal and regulated in Ontario and Alberta for players 19+. Gambling should be for entertainment only. If you or someone you know has a gambling problem, please contact the Responsible Gambling Council at <a href="https://www.problemgambling.ca/" className="text-gold-500 hover:underline">problemgambling.ca</a>.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © {currentYear} MapleCasinos.ca — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
