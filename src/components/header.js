const html = require('choo/html')

module.exports = () => {
  return html `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Marvelex
          </h1>
          <h2 class="subtitle">
            The Marvel Codex
          </h2>
        </div>
      </div>
    </section>
  `
}
