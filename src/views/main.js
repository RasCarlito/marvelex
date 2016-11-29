const html = require('choo/html')

const header = require('components/header')
const list = require('components/comics/list')

module.exports = (state, prev, send) => {
  return html `
    <div>
      ${header()}
      ${list(state, send)}
    </div>
  `
}
