/**
 * Data access helpers — fetch casino/bonus data from Payload local API.
 * All functions are async and should be called from Server Components.
 */
import { getPayload } from './payload'
import { normalizeCasino, NormalizedCasino } from './normalize'

export type { NormalizedCasino }

export async function getAllCasinos(): Promise<NormalizedCasino[]> {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'casinos',
    limit: 100,
    sort: '-rating',
  })
  return result.docs.map((d) => normalizeCasino(d as Record<string, unknown>))
}

export async function getFeaturedCasinos(): Promise<NormalizedCasino[]> {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'casinos',
    where: { featured: { equals: true } },
    sort: 'featuredRank',
    limit: 10,
  })
  return result.docs.map((d) => normalizeCasino(d as Record<string, unknown>))
}

export async function getCasinoBySlug(slug: string): Promise<NormalizedCasino | null> {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'casinos',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (!result.docs.length) return null
  return normalizeCasino(result.docs[0] as Record<string, unknown>)
}

export async function getCasinosByProvince(
  province: 'Ontario' | 'Alberta',
): Promise<NormalizedCasino[]> {
  const payload = await getPayload()
  // Province stored as 'Ontario' | 'Alberta' | 'Both'
  const result = await payload.find({
    collection: 'casinos',
    where: {
      or: [
        { province: { equals: province } },
        { province: { equals: 'Both' } },
      ],
    },
    sort: '-rating',
    limit: 100,
  })
  return result.docs.map((d) => normalizeCasino(d as Record<string, unknown>))
}

export async function getAllCasinoSlugs(): Promise<string[]> {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'casinos',
    limit: 200,
    select: { slug: true },
  })
  return result.docs.map((d) => (d as { slug: string }).slug)
}

// ─── Bonus helpers ───────────────────────────────────────────────────────────

export interface NormalizedBonus {
  id: string
  title: string
  casino: NormalizedCasino | null
  bonusType: string
  amount: string
  bonusCode?: string
  wagering?: string
  featured: boolean
}

export async function getAllBonuses(): Promise<NormalizedBonus[]> {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'bonuses',
    depth: 2,
    limit: 100,
    sort: '-featured',
  })
  return result.docs.map((d) => {
    const raw = d as Record<string, unknown>
    const casinoRaw = raw.casino
    let casino: NormalizedCasino | null = null
    if (casinoRaw && typeof casinoRaw === 'object' && !Array.isArray(casinoRaw)) {
      casino = normalizeCasino(casinoRaw as Record<string, unknown>)
    }
    return {
      id: (raw.id as string) ?? '',
      title: (raw.title as string) ?? '',
      casino,
      bonusType: (raw.bonusType as string) ?? '',
      amount: (raw.amount as string) ?? '',
      bonusCode: raw.bonusCode as string | undefined,
      wagering: raw.wagering as string | undefined,
      featured: (raw.featured as boolean) ?? false,
    }
  })
}

// ─── Site Settings ───────────────────────────────────────────────────────────

export interface SiteSettingsData {
  siteTitle: string
  siteDescription: string
  heroTitle: string
  heroSubtitle: string
  footerText: string
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const payload = await getPayload()
    const settings = (await payload.findGlobal({
      slug: 'site-settings',
    })) as Record<string, unknown>
    return {
      siteTitle: (settings.siteTitle as string) || 'Maple Casinos',
      siteDescription:
        (settings.siteDescription as string) || "Canada's #1 Casino Review Site",
      heroTitle: (settings.heroTitle as string) || 'The Best Online Casinos in Ontario & Alberta',
      heroSubtitle:
        (settings.heroSubtitle as string) ||
        "We test, verify, and rank every licensed casino so you don't have to.",
      footerText:
        (settings.footerText as string) ||
        '© 2024 Maple Casinos. 19+ only. Please gamble responsibly.',
    }
  } catch {
    // Return defaults if settings not yet configured
    return {
      siteTitle: 'Maple Casinos',
      siteDescription: "Canada's #1 Casino Review Site",
      heroTitle: 'The Best Online Casinos in Ontario & Alberta',
      heroSubtitle: "We test, verify, and rank every licensed casino so you don't have to.",
      footerText: '© 2024 Maple Casinos. 19+ only. Please gamble responsibly.',
    }
  }
}
