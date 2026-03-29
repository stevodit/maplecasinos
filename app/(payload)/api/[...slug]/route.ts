/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
// @ts-nocheck
import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'

export const GET = (request: Request, { params }: { params: Promise<{ slug: string[] }> }) =>
  REST_GET(request, { config, params })
export const POST = (request: Request, { params }: { params: Promise<{ slug: string[] }> }) =>
  REST_POST(request, { config, params })
export const DELETE = (request: Request, { params }: { params: Promise<{ slug: string[] }> }) =>
  REST_DELETE(request, { config, params })
export const PATCH = (request: Request, { params }: { params: Promise<{ slug: string[] }> }) =>
  REST_PATCH(request, { config, params })
export const PUT = (request: Request, { params }: { params: Promise<{ slug: string[] }> }) =>
  REST_PUT(request, { config, params })
export const OPTIONS = (request: Request, { params }: { params: Promise<{ slug: string[] }> }) =>
  REST_OPTIONS(request, { config, params })
