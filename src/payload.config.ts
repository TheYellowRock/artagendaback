import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'
import {s3Adapter} from '@payloadcms/plugin-cloud-storage/s3'

import Users from './collections/Users'
import Actors from './collections/Actors'
import Media from './collections/Media'
import Pages from './collections/Pages'
import Filmography from './collections/Filmography'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import Header from './globals/Header'
import Footer from './globals/Footer'
import Contact from './globals/Contact'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'

const storageAdapter = s3Adapter({
  config: {
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY
    }
  },
  bucket:process.env.S3_BUCKET_NAME
})

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Actors, Media, Pages, Filmography ],
  globals: [Header, Footer, Contact],
  csrf: [
    // whitelist of domains to allow cookie auth from
    'https://artagendaback-production.up.railway.app/',
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    cloudStorage({
      collections:{
        'media':{
          adapter:storageAdapter
        }
      }
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
