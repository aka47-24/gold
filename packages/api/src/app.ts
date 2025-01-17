// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import { koa, rest, bodyParser, errorHandler, parseAuthentication, cors, serveStatic } from '@feathersjs/koa'
import socketio from '@feathersjs/socketio'

import { configurationValidator } from './configuration'
import type { Application } from './declarations'
import { logError } from './hooks/log-error'
import { mongodb } from './mongodb'
import { authentication } from './authentication'
import { services } from './services/index'
import { channels } from './channels'
import { tasks } from './tasks'
import { redis } from './redis'
import { cronsMiddleware } from './tasks/crons/middleware'

const app: Application = koa(feathers())

// Load our app configuration (see config/ folder)
app.configure(configuration(configurationValidator))

// Set up Koa middleware
app.use(cors())
app.use(serveStatic(app.get('public')))
app.use(errorHandler())
app.use(parseAuthentication())
app.use(bodyParser())

// Configure services and transports
app.configure(rest())
app.configure(
  socketio({
    path: '/ws',
    cors: {
      origin: app.get('origins')
    }
  })
)
app.configure(mongodb)
app.configure(redis)
app.configure(authentication)
app.configure(services)
app.configure(tasks)
app.configure(cronsMiddleware)
app.configure(channels)

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
  before: {
    all: [
      // (ctxt) => {
      // const m = ctxt.params.mongodb
      // ctxt.params.mongodb = { ...m, collation: { ...m?.collation, locale: 'fa' } }
      // }
    ]
  },
  after: {},
  error: {}
})
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
})

export { app }
