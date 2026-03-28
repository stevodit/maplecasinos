import { NextRequest, NextResponse } from 'next/server';
import { getCasinoBySlug } from '@/lib/casinos';

// Simple in-memory click log (in production, use a database)
const clickLog: { slug: string; timestamp: string; userAgent: string | null; ref: string | null }[] = [];

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const casino = getCasinoBySlug(slug);

  // Log the click (in production: persist to DB / analytics)
  const clickData = {
    slug,
    timestamp: new Date().toISOString(),
    userAgent: request.headers.get('user-agent'),
    ref: request.headers.get('referer'),
  };
  clickLog.push(clickData);
  console.log('[Affiliate Click]', clickData);

  if (!casino) {
    // Fallback if slug not found
    return NextResponse.redirect(new URL('/casinos', request.url));
  }

  // Redirect to affiliate URL with tracking params
  const url = new URL(casino.affiliateUrl);
  url.searchParams.set('utm_source', 'maplecasinos');
  url.searchParams.set('utm_medium', 'affiliate');
  url.searchParams.set('utm_campaign', slug);

  const response = NextResponse.redirect(url.toString(), { status: 302 });

  // Set a tracking cookie (expires in 30 days)
  response.cookies.set(`mc_click_${slug}`, new Date().toISOString(), {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
  });

  return response;
}
