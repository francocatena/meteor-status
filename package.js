Package.describe({
  name: 'francocatena:status',
  summary: 'Display the connection status with the server',
  version: '0.9.9',
  git: 'https://github.com/francocatena/meteor-status',
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.4')

  api.use('deps',         'client')
  api.use('templating',   'client')
  api.use('underscore',   'client')
  api.use('reactive-var', 'client')

  api.use('tap:i18n@1.0.7', ['client', 'server'])
  api.imply('tap:i18n')

  api.addFiles('i18n/package-tap.i18n', ['client', 'server'])

  api.addFiles('lib/status.html', 'client')

  // Always after templates
  api.addFiles('i18n/en.i18n.json', ['client', 'server'])
  api.addFiles('i18n/es.i18n.json', ['client', 'server'])
  api.addFiles('i18n/fr.i18n.json', ['client', 'server'])
  api.addFiles('i18n/it.i18n.json', ['client', 'server'])

  api.addFiles('lib/status.js',     'client')
})

Package.onTest(function (api) {
  api.use('francocatena:status', 'client')
  api.use('tinytest',            'client')
  api.use('test-helpers',        'client')

  api.addFiles('test/status_tests.js', 'client')
})
