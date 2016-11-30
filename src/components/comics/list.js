const html = require('choo/html')
const once = require('lodash/once')

const comic = require('./item')
const error = require('./error')
const empty = require('./empty')
const loading = require('components/loading')

const firstFetch = once((cb) => cb())

module.exports = (state, send) => {
  const { list } = state.comics

  if (!list.length) {
    firstFetch(() => send('comics:fetch'))
  }

  return html `
    <section class="section">
      <div class="container">
        ${display()}
      </div>
    </section>
  `

  function display () {
    if (state.comics.error) {
      return error('Could not fetch comics data')
    } else if (state.comics.loading) {
      return loading()
    } else if (!list.length) {
      return empty()
    }

    return list.map((item) => comic(item))
  }
}
