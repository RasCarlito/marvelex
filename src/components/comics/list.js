const html = require('choo/html')

const comic = require('./item')

module.exports = (state, send) => {
  const { list } = state.comics

  if (!list.length) {
    send('comics:fetch')
  }

  return html `
    <section class="section">
      <div class="container">
        ${list.map((item) => comic(item))}
      </div>
    </section>
  `
}
