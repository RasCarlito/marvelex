// Dependencies
const choo = require('choo')
const log = require('choo-log')

require('./index.scss')

// Init app
const app = choo()

// Plugins
app.use(log())
