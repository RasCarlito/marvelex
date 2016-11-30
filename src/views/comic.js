const html = require('choo/html')

const header = require('components/header')
const loading = require('components/loading')
const comicDetail = require('components/comics/detail')

module.exports = (state, prev, send) => {
  const { id } = state.params

  const comic = state.comics.list.find((item) => item.id === parseInt(id, 10))

  if (!comic) {
    send('comics:fetchOne', { id })
  }

  return html `
    <div>
      ${header()}
      <section class="section">
        <div class="container">
          ${comic ? comicDetail(comic) : loading()}
        </div>
      </section>
    </div>
  `
}
