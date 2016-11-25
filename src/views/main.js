const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html `
    <div>
      <h1>Hello Marvel Codex!</h1>
    </div>
  `
}
