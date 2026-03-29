export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCasinos, getCasinosByProvince } from '@/lib/data';
import CasinoCard from '@/components/CasinoCard';

export const metadata: Metadata = {
  title: 'Best Online Casinos in Ontario & Alberta',
  description:
    'Compare all licensed online casinos in Ontario and Alberta. Expert ratings, honest reviews, and exclusive bonuses for Canadian players.',
};

// Revalidate every hour so changes in the CMS are reflected
export const revalidate = 3600;

interface PageProps {
  searchParams: Promise<{ province?: string }>;
}

export default async function CasinosPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const provinceFilter = params.province as 'Ontario' | 'Alberta' | undefined;

  const filtered = provinceFilter
    ? await getCasinosByProvince(provinceFilter)
    : await getAllCasinos();

  return (
    <>
      {/* Header */}
      <section className="bg-hero-pattern py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-800/60 border border-green-600 rounded-full px-4 py-1.5 text-sm text-gold-300 font-medium mb-4">
            🛡️ All casinos verified & licensed
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {provinceFilter ? `${provinceFilter} Online Casinos` : 'Best Canadian Online Casinos'}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {provinceFilter
              ? `${filtered.length} licensed casinos available in ${provinceFilter}. All regulated by ${provinceFilter === 'Ontario' ? 'AGCO' : 'AGLC'}.`
              : `${filtered.length} licensed, reviewed, and ranked casinos for Canadian players.`}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-50" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-600 mr-1">Filter:</span>
            <Link
              href="/casinos"
              className={`badge text-sm px-4 py-1.5 ${!provinceFilter ? 'bg-green-700 text-white border border-green-700' : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-green-400'}`}
            >
              All Provinces
            </Link>
            <Link
              href="/casinos?province=Ontario"
              className={`badge text-sm px-4 py-1.5 ${provinceFilter === 'Ontario' ? 'bg-green-700 text-white border border-green-700' : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-green-400'}`}
            >
              📍 Ontario
            </Link>
            <Link
              href="/casinos?province=Alberta"
              className={`badge text-sm px-4 py-1.5 ${provinceFilter === 'Alberta' ? 'bg-green-700 text-white border border-green-700' : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-green-400'}`}
            >
              📍 Alberta
            </Link>
          </div>
        </div>
      </section>

      {/* Casino list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <strong className="text-gray-800">{filtered.length}</strong> casinos
            {provinceFilter ? ` in ${provinceFilter}` : ''}
          </p>
          <p className="text-xs text-gray-400 hidden sm:block">Sorted by Expert Rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((casino, i) => (
            <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">😔</p>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No casinos found</h3>
            <p className="text-gray-500">Try removing your province filter.</p>
            <Link href="/casinos" className="btn-green mt-6 inline-flex">View all casinos</Link>
          </div>
        )}
      </section>

      {/* Info box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-forest-900 mb-3">
            How We Choose the Best Canadian Casinos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> <span><strong>Licence Check</strong> — Only AGCO (Ontario) and AGLC (Alberta) licensed operators</span></p>
              <p className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> <span><strong>Bonus Fairness</strong> — We review wagering requirements, eligible games, and expiry dates</span></p>
              <p className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> <span><strong>Game Quality</strong> — RNG-certified slots and verified live dealer tables</span></p>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> <span><strong>Interac Support</strong> — Must accept Interac e-Transfer for Canadian convenience</span></p>
              <p className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> <span><strong>Payout Speed</strong> — Withdrawal processing time is tested, not self-reported</span></p>
              <p className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> <span><strong>Responsible Gambling</strong> — Deposit limits, self-exclusion, and reality checks required</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
