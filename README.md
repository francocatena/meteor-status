Meteor status
=============

Display the app connection status with the server

## Installation

```bash
$ meteor add francocatena:status
```

## Usage

Just insert `{{> status}}` and you are ready

This is what it looks like when the connection between the server and the client is lost:

![Disconnected status in english](https://raw.githubusercontent.com/francocatena/meteor-status/master/docs/example_en.png)

## Templates

The status component can be generated using a specific template by providing a template name

```javascript
Meteor.startup(function () {
  Status.setTemplate('semantic_ui')
})
```

### Available templates

- bootstrap3 (default)
- semantic_ui (thanks [Sivli Kestanous](https://github.com/Kestanous))
- materialize (thanks [Gabriel](https://github.com/kainlite))

### Creating a custom template

To define a custom template simply create a template with the name 'status\_' + templateName

For example:

```html
<template name="status_foundation">
</template>
```

And then use it like this:

```javascript
Status.setTemplate('foundation')
```

You can also set the main classes (or other options) in the provided templates

```javascript
Status.setTemplate('bootstrap3', { classes: 'alert-danger' })
```

For examples see the
[templates](https://github.com/francocatena/meteor-status/tree/master/templates) folder

## Translate

If you want to display the messages in another language

```javascript
Meteor.startup(function () {
  TAPi18n.setLanguage('fr')
})
```

And voilà:

![Disconnected status in french](https://raw.githubusercontent.com/francocatena/meteor-status/master/docs/example_fr.png)

### Available translations

- English (default)
- Spanish
- French (thanks to [Arthur Tayrac](https://github.com/crmfrsh))
- Italian (thanks to [alexdown](https://github.com/alexdown))
- Turkish (thanks to [fuatsengul](https://github.com/fuatsengul))
- German (thanks to [xanatas](https://github.com/xanatas))
- Portuguese (thanks to [Rodrigo Nascimento](https://github.com/rodrigok))
