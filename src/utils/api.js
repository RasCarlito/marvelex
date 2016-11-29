const $ = require('jquery')
const urlComposer = require('url-composer')
const Promise = require('bluebird')

const config = {
  host: 'http://gateway.marvel.com/v1/public',
  key: '7fa20a1ca0864298079862904d027f87',

  api: {
    comics: {
      path: '/comics'
    },
    comic: {
      path: '/comics/:id'
    }
  }
}

module.exports = {
  get (name, params) {
    const url = urlComposer.build({
      host: config.host,
      path: config.api[name].path,
      query: { apikey: config.key },
      params
    })

    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        success: (res) => {
          resolve(res.data.results)
        },
        error: (xhr, res, err) => {
          reject(err)
        }
      })
    })
  }
}
