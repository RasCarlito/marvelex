const html = require('choo/html')

const header = require('components/header')
const list = require('components/comics/list')
const search = require('components/comics/search')

module.exports = (state, prev, send) => {
  return html `
    <div>
      ${header()}
      ${search(state, send)}
      ${list(state, send)}
    </div>
  `
}
