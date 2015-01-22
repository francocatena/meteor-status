var retryTime = new ReactiveVar(0)

Meteor.setInterval(function () {
  var timeDiff   = Meteor.status().retryTime - (new Date).getTime()
  var _retryTime = Math.round(timeDiff / 1000)

  retryTime.set(_retryTime)
}, 500)

var helpers = {
  connected: function () {
    return Meteor.status().connected
  },

  message: function () {
    return i18n_status_func('meteor_status', { context: Meteor.status().status })
  },

  extraMessage: function () {
    if (Meteor.status().status === 'waiting')
      return i18n_status_func('meteor_status_reconnect_in', { count: retryTime.get() })
  },

  showReconnect: function () {
    return _.contains(['waiting', 'offline'], Meteor.status().status)
  },

  reconnectLabel: function () {
    return i18n_status_func('meteor_status_try_now', { context: Meteor.status().status })
  },

  option: function (option) {
    return Status.option(option)
  }
}

Template.status.helpers({
  template: function () {
    return 'status_' + Status.template()
  },

  helpers: function () {
    return helpers
  }
})

Template.status.events({
  'click a.alert-link': function (e) {
    e.preventDefault()
    Meteor.reconnect()
  }
})
