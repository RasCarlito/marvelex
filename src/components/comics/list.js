const html = require('choo/html')
const once = require('lodash/once')

const comic = require('./item')

const firstFetch = once((cb) => cb())

module.exports = (state, send) => {
  const { list } = state.comics

  if (!list.length) {
    firstFetch(() => send('comics:fetch'))
  }

  return html `
    <section class="section">
      <div class="container">
        ${list.map((item) => comic(item))}
      </div>
    </section>
  `
}
