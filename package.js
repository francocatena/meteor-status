Package.describe({
  name: 'francocatena:status',
  summary: 'Display the connection status with the server',
  version: '0.9.1',
  git: 'https://github.com/francocatena/meteor-status',
})

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1')

  api.use('deps', 'client')
  api.use('templating', 'client')
  api.use('underscore', 'client')

  api.use('tap:i18n@1.0.0', ['client', 'server'])

  api.addFiles('package-tap.i18n', ['client', 'server'])

  api.addFiles('lib/status.html', 'client')
  api.addFiles('lib/retry_time.js', 'client')
  api.addFiles('lib/status.js', 'client')

  api.addFiles('i18n/en.i18n.json', 'client')
  api.addFiles('i18n/es.i18n.json', 'client')
})

Package.onTest(function(api) {
  api.use('francocatena:status', 'client')
  api.use('tinytest', 'client')
  api.use('test-helpers', 'client')

  api.addFiles('test/status_tests.js', 'client')
})
