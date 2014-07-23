Package.describe({
  summary: 'Display the connection status with the server'
})

Package.on_use(function(api, where) {
  api.use([
    'meteor',
    'underscore',
    'templating'
  ], 'client')

  api.use(['tap-i18n'], ['client', 'server'])

  api.add_files([
    'lib/status.html',
    'lib/status.js',
    'i18n/en.i18n.json',
    'i18n/es.i18n.json'
  ], 'client')

  api.add_files('package-tap.i18n', ['client', 'server'])
})

Package.on_test(function(api) {
  api.use([
    'status',
    'tinytest',
    'test-helpers'
  ], 'client')

  api.add_files('test/status_tests.js', 'client')
})
