const api = require('utils/api')

module.exports = {
  namespace: 'comics',
  state: {
    list: []
  },
  effects: {
    fetch: (data, state, send, done) => {
      api.get('comics').then((data) => send('comics:set', data, done))
    }
  },
  reducers: {
    set: (data, state) => ({ list: data })
  }
}
