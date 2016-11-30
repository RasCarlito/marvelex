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
        ${display()}
      </div>
    </section>
  `

  function display () {
    if (state.comics.error) {
      return html `
        <article class="message is-danger">
          <div class="message-body">
            <i class="fa fa-meh-o"></i> Sorry... Could not fetch comics data
          </div>
        </article>
      `
    }

    return list.map((item) => comic(item))
  }
}
