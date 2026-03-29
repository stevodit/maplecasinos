import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      defaultValue: 'Maple Casinos',
    },
    {
      name: 'siteDescription',
      type: 'text',
      defaultValue: "Canada's #1 Casino Review Site — Ontario & Alberta",
    },
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'The Best Online Casinos in Ontario & Alberta',
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      defaultValue:
        "We test, verify, and rank every licensed casino so you don't have to.",
    },
    {
      name: 'footerText',
      type: 'text',
      defaultValue:
        '© 2024 Maple Casinos. 19+ only. Please gamble responsibly.',
    },
  ],
}
