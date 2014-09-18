Template.status.helpers({
  connected: function() {
    return Meteor.status().connected
  },

  message: function() {
    return i18n_status_func('meteor_status', { context: Meteor.status().status })
  },

  extraMessage: function() {
    if (Meteor.status().status === 'waiting') {
      return i18n_status_func('meteor_status_reconnect_in', { count: currentRetryTime() })
    }
  },

  showReconnect: function() {
    return _.contains(['waiting', 'offline'], Meteor.status().status)
  },

  reconnectLabel: function() {
    return i18n_status_func('meteor_status_try_now', { context: Meteor.status().status })
  }
})

Template.status.events({
  'click a.alert-link': function(e) {
    e.preventDefault()
    Meteor.reconnect()
  }
})
