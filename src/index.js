// Dependencies
const choo = require('choo')

// Init app
const app = choo()

// Plugins
const log = require('choo-log')
app.use(log())

// Init models
const models = require('./models/index')
models.map(model => app.model(model))

// Init router
app.router(require('./router'))

// Render app to body
const tree = app.start()
document.body.appendChild(tree)
