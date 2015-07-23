Package.describe({
  name:    'francocatena:status',
  git:     'https://github.com/francocatena/meteor-status',
  summary: 'Display the connection status between the browser and the Meteor server',
  version: '1.2.6'
})

Package.onUse(function (api) {
  var client = 'client'
  var both   = ['client', 'server']

  api.versionsFrom('1.0')

  api.use('deps',         client)
  api.use('templating',   client)
  api.use('underscore',   client)
  api.use('reactive-var', client)

  api.use('tap:i18n@1.5.1', both)
  api.imply('tap:i18n')

  api.addFiles('i18n/package-tap.i18n', both)

  api.addFiles('lib/status.html',            client)
  api.addFiles('templates/bootstrap3.html',  client)
  api.addFiles('templates/semantic_ui.html', client)
  api.addFiles('templates/materialize.html', client)

  // Always after templates
  api.addFiles('i18n/da.i18n.json', both)
  api.addFiles('i18n/de.i18n.json', both)
  api.addFiles('i18n/en.i18n.json', both)
  api.addFiles('i18n/es.i18n.json', both)
  api.addFiles('i18n/fr.i18n.json', both)
  api.addFiles('i18n/it.i18n.json', both)
  api.addFiles('i18n/nl.i18n.json', both)
  api.addFiles('i18n/pt.i18n.json', both)
  api.addFiles('i18n/tr.i18n.json', both)
  api.addFiles('i18n/zh.i18n.json', both)

  api.addFiles('status.js',     client)
  api.addFiles('lib/status.js', client)

  api.export('Status', client)
})

Package.onTest(function (api) {
  var client = 'client'

  api.use('francocatena:status', client)
  api.use('tinytest',            client)
  api.use('test-helpers',        client)

  api.addFiles('test/status_tests.js', client)
})
