module.exports = (route) => [
  route('/', require('./views/main')),
  route('/comics/:id', require('./views/comic'))
]
