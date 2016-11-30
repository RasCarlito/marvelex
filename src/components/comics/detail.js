const html = require('choo/html')

module.exports = (comic) => {
  const img = comic.thumbnail
  const src = `${img.path}.${img.extension}`

  return html `
    <article class="media">
      <div class="media-left">
        <figure class="image">
          <img src="${src}" style="max-width: 150px;">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <h1>${comic.title}</h1>
          <p>
            ${comic.description}
          </p>
          <hr>
          <h2>Creators</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              ${comic.creators.items.map((item) => authorRow(item))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  `

  function authorRow (author) {
    return html `
      <tr>
        <td>${author.name}</td>
        <td>${author.role}</td>
      </tr>
    `
  }
}
