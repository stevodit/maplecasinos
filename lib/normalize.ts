/**
 * Normalized casino type used by all components and pages.
 * This matches what CasinoCard, StarRating, etc. expect.
 */
export interface NormalizedCasino {
  slug: string
  name: string
  logo: string
  rating: number
  reviewCount: number
  welcomeBonus: string
  bonusCode?: string
  affiliateUrl: string
  province: ('Ontario' | 'Alberta')[]
  tags: string[]
  pros: string[]
  cons: string[]
  shortReview: string
  fullReview: string
  minDeposit: string
  withdrawalTime: string
  paymentMethods: string[]
  established: number
  licenseInfo: string
  gameCount: number
  featured: boolean
}

/**
 * Normalizes a raw Payload casino document into the NormalizedCasino shape.
 * Handles all optional fields with sensible defaults.
 */
export function normalizeCasino(raw: Record<string, unknown>): NormalizedCasino {
  // Resolve province: stored as 'Ontario' | 'Alberta' | 'Both'
  let province: ('Ontario' | 'Alberta')[] = []
  const rawProvince = raw.province as string | undefined
  if (rawProvince === 'Ontario') province = ['Ontario']
  else if (rawProvince === 'Alberta') province = ['Alberta']
  else if (rawProvince === 'Both') province = ['Ontario', 'Alberta']

  // Extract pros array (stored as [{item: string}])
  const rawPros = raw.pros as { item?: string }[] | undefined
  const pros = rawPros?.map((p) => p.item ?? '').filter(Boolean) ?? []

  // Extract cons array
  const rawCons = raw.cons as { item?: string }[] | undefined
  const cons = rawCons?.map((c) => c.item ?? '').filter(Boolean) ?? []

  // Extract payment methods
  const rawPM = raw.paymentMethods as { method?: string }[] | undefined
  const paymentMethods = rawPM?.map((m) => m.method ?? '').filter(Boolean) ?? []

  // fullReview: stored as Lexical richText — convert to plain text for now
  const rawFullReview = raw.fullReview
  let fullReview = ''
  if (typeof rawFullReview === 'string') {
    fullReview = rawFullReview
  } else if (rawFullReview && typeof rawFullReview === 'object') {
    fullReview = extractLexicalText(rawFullReview as Record<string, unknown>)
  }

  return {
    slug: (raw.slug as string) ?? '',
    name: (raw.name as string) ?? '',
    logo: (raw.logoUrl as string) ?? '',
    rating: (raw.rating as number) ?? 0,
    reviewCount: 0, // Not stored in Payload yet; can add later
    welcomeBonus: (raw.welcomeBonus as string) ?? '',
    bonusCode: raw.bonusCode as string | undefined,
    affiliateUrl: (raw.affiliateUrl as string) ?? '',
    province,
    tags: [], // Not stored in Payload yet; can add later
    pros,
    cons,
    shortReview: (raw.shortReview as string) ?? '',
    fullReview,
    minDeposit: (raw.minDeposit as string) ?? '',
    withdrawalTime: (raw.withdrawalTime as string) ?? '',
    paymentMethods,
    established: (raw.established as number) ?? 0,
    licenseInfo: (raw.licenseInfo as string) ?? '',
    gameCount: 0, // Not stored in Payload; can add later
    featured: (raw.featured as boolean) ?? false,
  }
}

/**
 * Extract plain text from a Lexical editor JSON structure.
 */
function extractLexicalText(lexical: Record<string, unknown>): string {
  if (!lexical || typeof lexical !== 'object') return ''

  const root = (lexical as { root?: unknown }).root
  if (!root) return ''

  return extractNodeText(root as Record<string, unknown>)
}

function extractNodeText(node: Record<string, unknown>): string {
  if (!node) return ''

  // Text node
  if (node.type === 'text') {
    return (node.text as string) ?? ''
  }

  // Paragraph/heading/etc with children
  const children = node.children as Record<string, unknown>[] | undefined
  if (children && Array.isArray(children)) {
    const text = children.map(extractNodeText).join('')
    // Add newlines between paragraphs
    if (node.type === 'paragraph' || (node.type as string)?.startsWith('heading')) {
      return text + '\n\n'
    }
    return text
  }

  return ''
}
