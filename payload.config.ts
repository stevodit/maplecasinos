import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { Casinos } from './collections/Casinos'
import { Bonuses } from './collections/Bonuses'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Casinos, Bonuses, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'maplecasinos-secret-key-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: `file:${path.resolve(dirname, 'payload.db')}`,
    },
  }),
  sharp: undefined,
})
