import Link from 'next/link';
import { Casino } from '@/lib/casinos';
import StarRating from './StarRating';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  variant?: 'full' | 'compact';
}

export default function CasinoCard({ casino, rank, variant = 'full' }: CasinoCardProps) {
  if (variant === 'compact') {
    return (
      <div className="card p-5 flex items-center gap-4 hover:border-l-4 hover:border-l-gold-400 transition-all">
        {rank && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-900 text-gold-400 font-bold text-sm flex items-center justify-center">
            {rank}
          </div>
        )}
        {/* Logo placeholder */}
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center shadow-inner">
          <span className="text-gold-400 font-black text-lg">{casino.name.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 truncate">{casino.name}</h3>
          <StarRating rating={casino.rating} size="sm" />
          <p className="text-xs text-green-700 font-semibold mt-0.5 truncate">{casino.welcomeBonus}</p>
        </div>
        <div className="flex-shrink-0 flex flex-col gap-2">
          <Link href={`/go/${casino.slug}`} target="_blank" className="btn-primary text-xs py-2 px-3">
            Claim
          </Link>
          <Link href={`/casinos/${casino.slug}`} className="text-xs text-center text-gray-500 hover:text-green-700 underline">
            Review
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card border border-gray-100 hover:border-gold-200 transition-all group">
      {/* Header */}
      <div className="relative p-5 pb-4 border-b border-gray-100">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {casino.tags.map((tag) => (
            <span key={tag} className="badge badge-gold">{tag}</span>
          ))}
        </div>

        <div className="flex items-start gap-4">
          {/* Rank badge */}
          {rank && (
            <div className="flex-shrink-0 mt-1">
              <div className="w-9 h-9 rounded-full bg-forest-900 text-gold-400 font-black text-base flex items-center justify-center shadow-md">
                #{rank}
              </div>
            </div>
          )}

          {/* Logo */}
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-700 to-forest-900 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <span className="text-gold-400 font-black text-3xl">{casino.name.charAt(0)}</span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-green-800 transition-colors">
              {casino.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={casino.rating} size="md" />
              <span className="text-xs text-gray-500">({casino.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {casino.province.map((p) => (
                <span key={p} className="badge badge-green text-xs">📍 {p}</span>
              ))}
              <span className="badge bg-blue-50 text-blue-700 border border-blue-200 text-xs">✅ {casino.licenseInfo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus */}
      <div className="px-5 py-4 bg-gradient-to-r from-gold-50 to-amber-50 border-b border-gold-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Welcome Bonus</div>
            <div className="text-lg font-bold text-forest-900 mt-0.5">{casino.welcomeBonus}</div>
            {casino.bonusCode && (
              <div className="text-xs text-gray-500 mt-1">
                Code: <span className="font-mono font-bold text-gold-700 bg-gold-100 px-1.5 py-0.5 rounded">{casino.bonusCode}</span>
              </div>
            )}
          </div>
          <div className="text-3xl">🎁</div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 py-3 border-b border-gray-100 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Min Deposit</div>
          <div className="font-bold text-sm text-gray-800 mt-0.5">{casino.minDeposit}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Withdrawal</div>
          <div className="font-bold text-sm text-gray-800 mt-0.5">{casino.withdrawalTime}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Games</div>
          <div className="font-bold text-sm text-gray-800 mt-0.5">{casino.gameCount.toLocaleString()}+</div>
        </div>
      </div>

      {/* Review snippet */}
      <div className="px-5 py-4 border-b border-gray-100">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{casino.shortReview}</p>
      </div>

      {/* Pros (3 max) */}
      <div className="px-5 py-3 border-b border-gray-100">
        <ul className="space-y-1">
          {casino.pros.slice(0, 3).map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-5 flex gap-3">
        <Link
          href={`/go/${casino.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-sm py-3"
        >
          🎰 Claim Bonus
        </Link>
        <Link
          href={`/casinos/${casino.slug}`}
          className="btn-outline flex-1 text-sm py-3"
        >
          Full Review
        </Link>
      </div>

      {/* T&C note */}
      <p className="text-center text-xs text-gray-400 pb-3 px-4">
        T&Cs apply. 19+. Play responsibly. <a href="https://www.problemgambling.ca/" className="underline hover:text-gray-600" target="_blank" rel="noopener noreferrer">RGC</a>
      </p>
    </div>
  );
}
