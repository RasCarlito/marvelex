const api = require('utils/api')
const get = require('lodash/get')

module.exports = {
  namespace: 'comics',
  state: {
    list: [],
    loading: false,
    error: false
  },
  effects: {
    fetch: (data, state, send, done) => {
      const query = {}
      const search = get(data, 'search')

      if (search) {
        query.titleStartsWith = search
      }

      send('comics:loading', true, done)

      api.get('comics', query)
        .then(
          function onFulfilled (result) {
            send('comics:set', result, done)
          },
          function onRejected () {
            send('comics:loading', false, done)
            send('comics:error', true, done)
          }
        )
    }
  },
  reducers: {
    set: (data, state) => ({ list: data, loading: false, error: false }),
    loading: (isLoading, state) => ({ loading: isLoading, error: false }),
    error: (error, state) => ({ error })
  }
}
