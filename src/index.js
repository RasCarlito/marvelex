// Dependencies
const choo = require('choo')
const log = require('choo-log')

require('./index.scss')

// Init app
const app = choo()

// Plugins
app.use(log())

// Init models
const models = require('./models/index')
models.map(model => app.model(model))

// Init router
app.router(require('./router'))

// Render app to body
const tree = app.start()
document.body.appendChild(tree)
