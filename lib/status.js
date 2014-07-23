Template.status.helpers({
  connected: function() {
    return Meteor.status().connected
  },

  message: function() {
    return __('meteor_status', { context: Meteor.status().status })
  },

  extraMessage: function() {
    if (Meteor.status().status === 'waiting') {
      var reconnectIn = Math.round((Meteor.status().retryTime - (new Date()).getTime()) / 1000)

      return __('meteor_status_reconnect_in', { count: reconnectIn })
    }
  },

  showReconnect: function() {
    return _.contains(['waiting', 'offline'], Meteor.status().status)
  },

  reconnectLabel: function() {
    return __('meteor_status_try_now', { context: Meteor.status().status })
  }
})

Template.status.events({
  'click a.alert-link': function(e) {
    e.preventDefault()
    Meteor.reconnect()
  }
})
