const api = require('utils/api')
const get = require('lodash/get')

module.exports = {
  namespace: 'comics',
  state: {
    list: []
  },
  effects: {
    fetch: (data, state, send, done) => {
      const query = {}
      const search = get(data, 'search')

      if (search) {
        query.titleStartsWith = search
      }

      api.get('comics', query).then((result) => send('comics:set', result, done))
    }
  },
  reducers: {
    set: (data, state) => ({ list: data })
  }
}
