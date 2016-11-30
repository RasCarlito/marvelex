const html = require('choo/html')

module.exports = () => {
  return html `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <a href="/">Marvelex</a>
          </h1>
          <h2 class="subtitle">
            The Marvel Codex
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li class="is-active"><a>Home</a></li>
              <li><a>Comics</a></li>
              <li><a>Characters</a></li>
              <li><a>Creators</a></li>
            </ul>
          </div>
        </nav>
    </div>
    </section>
  `
}
