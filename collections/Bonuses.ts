import type { CollectionConfig } from 'payload'

export const Bonuses: CollectionConfig = {
  slug: 'bonuses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'casino', 'bonusType', 'featured'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'casino',
      type: 'relationship',
      relationTo: 'casinos',
      required: true,
    },
    {
      name: 'bonusType',
      type: 'select',
      options: [
        { label: 'Welcome Bonus', value: 'welcome' },
        { label: 'Reload Bonus', value: 'reload' },
        { label: 'Free Spins', value: 'free-spins' },
        { label: 'No Deposit', value: 'no-deposit' },
      ],
      required: true,
    },
    {
      name: 'amount',
      type: 'text',
      required: true,
    },
    {
      name: 'bonusCode',
      type: 'text',
    },
    {
      name: 'wagering',
      type: 'text',
      admin: {
        description: 'e.g. "30x" or "35x bonus amount"',
      },
    },
    {
      name: 'expiryDate',
      type: 'date',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
