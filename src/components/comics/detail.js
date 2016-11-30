const html = require('choo/html')

module.exports = (comic) => {
  return html `
    <div class="content">
      <h1>${comic.title}</h1>
      <p>${comic.description}</p>
    </div>
  `
}
