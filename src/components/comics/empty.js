const html = require('choo/html')

module.exports = () => {
  return html `
    <article class="message is-info">
      <div class="message-body">
        <i class="fa fa-frown-o"></i> Could not find anything matching your search terms
      </div>
    </article>
  `
}
