import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🍁</div>
        <h1 className="font-display text-4xl font-bold text-forest-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Looks like this page got lost in the Canadian wilderness. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary py-3 px-6">Go Home</Link>
          <Link href="/casinos" className="btn-outline py-3 px-6">View Casinos</Link>
        </div>
      </div>
    </div>
  );
}
