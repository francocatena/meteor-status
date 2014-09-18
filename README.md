Meteor status
=============

Display the app connection status with the server

## Installation

```console
$ meteor add francocatena:status
```

## Usage

Just insert `{{> status}}` in your body and you are ready to go...

This is what it looks like when the connection between the server and the client is lost:

![Disconnected status in english](docs/example_en.png)

## Translate

If you want to display the messages in another language, you can

```javascript
Meteor.startup(function () {
  TAPi18n.setLanguage('fr')
})
```

And voilà:

![Disconnected status in french](docs/example_fr.png)

### Available translations

- English (default)
- Spanish
- French (thanks to [Arthur Tayrac](https://github.com/crmfrsh))
