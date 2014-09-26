Meteor status
=============

Display the app connection status with the server

## Installation

```bash
$ meteor add francocatena:status
```

## Usage

Just insert `{{> status}}` in your body and you are ready to go...

This is what it looks like when the connection between the server and the client is lost:

![Disconnected status in english](https://raw.githubusercontent.com/francocatena/meteor-status/master/docs/example_en.png)

## Translate

If you want to display the messages in another language, you can

```javascript
Meteor.startup(function () {
  TAPi18n.setLanguage('fr')
})
```

If you are **not** using tap:i18n you should create an empty file for the language:

```bash
$ mkdir -p i18n && touch i18n/fr.i18n.json
```

And voilà:

![Disconnected status in french](https://raw.githubusercontent.com/francocatena/meteor-status/master/docs/example_fr.png)

### Available translations

- English (default)
- Spanish
- French (thanks to [Arthur Tayrac](https://github.com/crmfrsh))
- Italian (thanks to [alexdown](https://github.com/alexdown))
