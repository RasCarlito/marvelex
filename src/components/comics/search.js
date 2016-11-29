const $ = require('jquery')
const html = require('choo/html')

module.exports = (state, send) => {
  const submit = (e) => {
    e.preventDefault()

    send('comics:fetch', { search: $(e.currentTarget).find('.search').val() })
  }

  return html `
    <section class="section">
      <div class="container">
        <form class="search-form" onsubmit=${submit}>
          <p class="control has-icon">
            <input class="input search" type="text" placeholder="Search for a comic">
            <i class="fa fa-search"></i>
          </p>
        </form>
      </div>
    </section>
  `
}
