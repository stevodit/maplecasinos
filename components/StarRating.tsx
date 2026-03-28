import { renderStars } from '@/lib/casinos';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export default function StarRating({ rating, size = 'md', showNumber = true }: StarRatingProps) {
  const { full, half, empty } = renderStars(rating);

  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const StarFull = () => (
    <svg className={`${sizeClasses[size]} text-gold-400 fill-current`} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const StarHalf = () => (
    <svg className={`${sizeClasses[size]} text-gold-400`} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="half-star">
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <path fill="url(#half-star)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const StarEmpty = () => (
    <svg className={`${sizeClasses[size]} text-gray-300 fill-current`} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: full }).map((_, i) => <StarFull key={`f-${i}`} />)}
        {half && <StarHalf />}
        {Array.from({ length: empty }).map((_, i) => <StarEmpty key={`e-${i}`} />)}
      </div>
      {showNumber && (
        <span className={`font-bold text-gray-800 ${textClasses[size]}`}>{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
