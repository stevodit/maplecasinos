import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCasinoSlugs, getAllCasinos, getCasinoBySlug } from '@/lib/data';
import StarRating from '@/components/StarRating';
import CasinoCard from '@/components/CasinoCard';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllCasinoSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const casino = await getCasinoBySlug(slug);
  if (!casino) return { title: 'Casino Not Found' };
  return {
    title: `${casino.name} Review ${new Date().getFullYear()} — Bonus, Ratings & More`,
    description: casino.shortReview,
  };
}

const ratingCategories = [
  { label: 'Bonus & Promotions', weight: 0.2 },
  { label: 'Game Selection', weight: 0.15 },
  { label: 'Payment Methods', weight: 0.15 },
  { label: 'Mobile Experience', weight: 0.1 },
  { label: 'Customer Support', weight: 0.15 },
  { label: 'Security & Licence', weight: 0.15 },
  { label: 'Responsible Gambling', weight: 0.1 },
];

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = await getCasinoBySlug(slug);
  if (!casino) notFound();

  // Generate mock per-category ratings from the overall rating
  const seed = casino.rating;
  const catRatings = ratingCategories.map((cat, i) => {
    const variance = ((i * 0.17 + seed * 0.13) % 0.6) - 0.3;
    return Math.max(3, Math.min(5, Math.round((seed + variance) * 10) / 10));
  });

  const allCasinos = await getAllCasinos();
  const otherCasinos = allCasinos.filter((c) => c.slug !== casino.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span>›</span>
            <Link href="/casinos" className="hover:text-green-700">Casinos</Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">{casino.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ─── Main Content ─── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Hero block */}
            <div className="card p-6 md:p-8">
              {casino.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {casino.tags.map((tag) => (
                    <span key={tag} className="badge badge-gold">{tag}</span>
                  ))}
                </div>
              )}

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-green-700 to-forest-900 flex items-center justify-center shadow-xl">
                  <span className="text-gold-400 font-black text-4xl">{casino.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-forest-900">{casino.name} Review</h1>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <StarRating rating={casino.rating} size="lg" />
                    {casino.reviewCount > 0 && (
                      <span className="text-sm text-gray-500">({casino.reviewCount.toLocaleString()} player reviews)</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {casino.province.map((p) => (
                      <span key={p} className="badge badge-green">📍 {p}</span>
                    ))}
                    {casino.licenseInfo && (
                      <span className="badge bg-blue-50 text-blue-700 border border-blue-200">✅ {casino.licenseInfo}</span>
                    )}
                    {casino.established > 0 && (
                      <span className="badge bg-gray-100 text-gray-600 border border-gray-200">Est. {casino.established}</span>
                    )}
                  </div>
                </div>
              </div>

              {casino.shortReview && (
                <p className="mt-5 text-gray-700 leading-relaxed">{casino.shortReview}</p>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/go/${casino.slug}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-primary flex-1 text-base py-3.5"
                >
                  🎰 Claim Bonus at {casino.name}
                </Link>
                <div className="bg-gold-50 border border-gold-200 rounded-xl px-5 py-3 flex flex-col justify-center">
                  <div className="text-xs text-gray-500 font-medium">Welcome Bonus</div>
                  <div className="font-bold text-forest-900">{casino.welcomeBonus}</div>
                  {casino.bonusCode && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      Code: <span className="font-mono font-bold text-gold-700">{casino.bonusCode}</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                19+ only. T&Cs apply. Gamble responsibly.{' '}
                <a href="https://www.problemgambling.ca/" className="underline" target="_blank" rel="noopener noreferrer">problemgambling.ca</a>
              </p>
            </div>

            {/* Quick Facts */}
            <div className="card p-6">
              <h2 className="font-display text-xl font-bold text-forest-900 mb-4">Quick Facts</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {casino.minDeposit && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xl mb-1">💵</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Min Deposit</div>
                    <div className="font-semibold text-gray-800 text-sm mt-0.5">{casino.minDeposit}</div>
                  </div>
                )}
                {casino.withdrawalTime && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xl mb-1">⚡</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Withdrawal Time</div>
                    <div className="font-semibold text-gray-800 text-sm mt-0.5">{casino.withdrawalTime}</div>
                  </div>
                )}
                {casino.established > 0 && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xl mb-1">📅</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Established</div>
                    <div className="font-semibold text-gray-800 text-sm mt-0.5">{casino.established}</div>
                  </div>
                )}
                {casino.licenseInfo && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xl mb-1">🛡️</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Licence</div>
                    <div className="font-semibold text-gray-800 text-sm mt-0.5">{casino.licenseInfo}</div>
                  </div>
                )}
                {casino.province.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xl mb-1">📍</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Provinces</div>
                    <div className="font-semibold text-gray-800 text-sm mt-0.5">{casino.province.join(', ')}</div>
                  </div>
                )}
              </div>

              {casino.paymentMethods.length > 0 && (
                <div className="mt-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">Payment Methods</div>
                  <div className="flex flex-wrap gap-2">
                    {casino.paymentMethods.map((m) => (
                      <span key={m} className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Ratings */}
            <div className="card p-6">
              <h2 className="font-display text-xl font-bold text-forest-900 mb-5">Our Detailed Ratings</h2>
              <div className="space-y-4">
                {ratingCategories.map((cat, i) => (
                  <div key={cat.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{cat.label}</span>
                      <span className="text-sm font-bold text-forest-900">{catRatings[i].toFixed(1)}/5</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-600 to-gold-400 rounded-full transition-all duration-700"
                        style={{ width: `${(catRatings[i] / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between bg-forest-900/5 rounded-xl p-4">
                <span className="font-bold text-forest-900">Overall Score</span>
                <div className="flex items-center gap-2">
                  <StarRating rating={casino.rating} size="md" />
                </div>
              </div>
            </div>

            {/* Pros & Cons */}
            {(casino.pros.length > 0 || casino.cons.length > 0) && (
              <div className="card p-6">
                <h2 className="font-display text-xl font-bold text-forest-900 mb-4">Pros & Cons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {casino.pros.length > 0 && (
                    <div>
                      <h3 className="text-green-700 font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                        <span>✅</span> Pros
                      </h3>
                      <ul className="space-y-2">
                        {casino.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-500 font-black mt-0.5 flex-shrink-0">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {casino.cons.length > 0 && (
                    <div>
                      <h3 className="text-red-600 font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                        <span>⚠️</span> Cons
                      </h3>
                      <ul className="space-y-2">
                        {casino.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-red-400 font-black mt-0.5 flex-shrink-0">−</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Full Review */}
            {casino.fullReview && (
              <div className="card p-6">
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-5">
                  Full {casino.name} Review
                </h2>
                <div className="prose prose-sm max-w-none text-gray-700">
                  {casino.fullReview.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-forest-900 to-green-800 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Ready to play at {casino.name}?
              </h3>
              <p className="text-gray-300 mb-5">
                Claim your <strong className="text-gold-300">{casino.welcomeBonus}</strong> welcome bonus now.
              </p>
              <Link
                href={`/go/${casino.slug}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-base py-3.5 px-8 inline-flex"
              >
                🎰 Play Now at {casino.name}
              </Link>
              <p className="text-xs text-gray-500 mt-3">19+ only · T&Cs apply · Gamble responsibly</p>
            </div>
          </div>

          {/* ─── Sidebar ─── */}
          <div className="space-y-6">
            {/* Sticky bonus card */}
            <div className="card p-5 border-2 border-gold-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-700 to-forest-900 flex items-center justify-center shadow-lg mx-auto mb-3">
                  <span className="text-gold-400 font-black text-2xl">{casino.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-forest-900 text-lg">{casino.name}</h3>
                <StarRating rating={casino.rating} size="sm" />
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 mb-4 text-center">
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Exclusive Offer</div>
                <div className="font-bold text-forest-900 text-lg leading-tight">{casino.welcomeBonus}</div>
                {casino.bonusCode && (
                  <div className="mt-2 inline-block font-mono font-bold text-sm bg-gold-200 text-gold-900 px-3 py-1 rounded-lg">
                    {casino.bonusCode}
                  </div>
                )}
              </div>

              <Link
                href={`/go/${casino.slug}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary w-full text-sm py-3 mb-2"
              >
                🎰 Claim Bonus
              </Link>
              <Link href={`/go/${casino.slug}`} target="_blank" rel="noopener noreferrer nofollow" className="btn-outline w-full text-sm py-2.5">
                Play Now →
              </Link>

              <div className="mt-4 space-y-2 text-xs text-gray-500">
                {casino.minDeposit && (
                  <div className="flex justify-between">
                    <span>Min Deposit:</span>
                    <span className="font-medium text-gray-700">{casino.minDeposit}</span>
                  </div>
                )}
                {casino.withdrawalTime && (
                  <div className="flex justify-between">
                    <span>Withdrawal:</span>
                    <span className="font-medium text-gray-700">{casino.withdrawalTime}</span>
                  </div>
                )}
                {casino.licenseInfo && (
                  <div className="flex justify-between">
                    <span>Licence:</span>
                    <span className="font-medium text-gray-700 text-right">{casino.licenseInfo}</span>
                  </div>
                )}
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                T&Cs apply · 19+ · <a href="https://www.problemgambling.ca/" className="underline" target="_blank" rel="noopener noreferrer">Play Safe</a>
              </p>
            </div>

            {/* Other casinos */}
            {otherCasinos.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-bold text-forest-900 mb-3">Also Compare</h3>
                <div className="space-y-3">
                  {otherCasinos.map((c) => (
                    <CasinoCard key={c.slug} casino={c} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
