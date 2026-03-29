import type { CollectionConfig } from 'payload'

export const Casinos: CollectionConfig = {
  slug: 'casinos',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'province', 'featured'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. bet99)',
      },
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 5,
    },
    {
      name: 'welcomeBonus',
      type: 'text',
    },
    {
      name: 'bonusCode',
      type: 'text',
      admin: {
        description: 'Optional bonus code for the welcome offer',
      },
    },
    {
      name: 'logoUrl',
      type: 'text',
      admin: {
        description: 'Path to logo image (e.g. /logos/bet99.svg)',
      },
    },
    {
      name: 'province',
      type: 'select',
      options: [
        { label: 'Ontario', value: 'Ontario' },
        { label: 'Alberta', value: 'Alberta' },
        { label: 'Both', value: 'Both' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'featuredRank',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first in featured lists',
      },
    },
    {
      name: 'affiliateUrl',
      type: 'text',
    },
    {
      name: 'pros',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'cons',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'shortReview',
      type: 'textarea',
    },
    {
      name: 'fullReview',
      type: 'richText',
    },
    {
      name: 'minDeposit',
      type: 'text',
    },
    {
      name: 'withdrawalTime',
      type: 'text',
    },
    {
      name: 'paymentMethods',
      type: 'array',
      fields: [
        {
          name: 'method',
          type: 'text',
        },
      ],
    },
    {
      name: 'established',
      type: 'number',
    },
    {
      name: 'licenseInfo',
      type: 'text',
    },
  ],
}
