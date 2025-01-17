import { keywordObjectId } from '@feathersjs/mongodb'
// For more information about this file see https://dove.feathersjs.com/guides/cli/validators.html
import { Ajv, addFormats } from '@feathersjs/schema'
import type { FormatsPluginOptions } from '@feathersjs/schema'

const formats: FormatsPluginOptions = [
  'date-time',
  'time',
  'date',
  'email',
  'hostname',
  'ipv4',
  'ipv6',
  'uri',
  'uri-reference',
  'uuid',
  'uri-template',
  'json-pointer',
  'relative-json-pointer',
  'regex'
]

export const dataValidator: Ajv = addFormats(new Ajv({ removeAdditional: true, strict: false }), formats)

export const queryValidator: Ajv = addFormats(
  new Ajv({
    strict: false,
    coerceTypes: true
  }),
  formats
)

export const taskValidator: Ajv = addFormats(
  new Ajv({
    strict: false,
    coerceTypes: true
  }),
  formats
)

dataValidator.addKeyword(keywordObjectId)
queryValidator.addKeyword(keywordObjectId)
taskValidator.addKeyword(keywordObjectId)
