const html = require('choo/html')

module.exports = (comic) => {
  const img = comic.thumbnail
  const src = `${img.path}.${img.extension}`

  return html `
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img src="${src}" style="max-width: 72px;">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${comic.title}</strong>
              <br>
              ${comic.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  `
}
