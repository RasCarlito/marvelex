const $ = require('jquery')
const html = require('choo/html')
const debounce = require('lodash/debounce')

module.exports = (state, send) => {
  const onSubmit = (e) => {
    e.preventDefault()
    send('comics:fetch', { search: $(e.target).find('.search').val() })
  }
  const onKeypress = debounce((e) => send('comics:fetch', { search: e.target.value }), 300)
  const isLoading = () => state.comics.loading ? 'is-loading' : ''

  return html `
    <section class="section">
      <div class="container">
        <form class="search-form" onsubmit=${onSubmit}>
          <p class="control has-icon ${isLoading()}">
            <input class="input search" type="text" placeholder="Search for a comic" onkeypress=${onKeypress} />
            <i class="fa fa-search"></i>
          </p>
        </form>
      </div>
    </section>
  `
}
