const html = require('choo/html')

module.exports = (msg) => {
  if (!msg) {
    msg = 'An error occured'
  }

  return html `
    <article class="message is-danger">
      <div class="message-body">
        <i class="fa fa-meh-o"></i> Sorry... ${msg}
      </div>
    </article>
  `
}
