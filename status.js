Template.meteorStatus.helpers({
  connected: function() {
    return Meteor.status().connected
  },

  message: function() {
    return __('meteor_status_' + Meteor.status().status)
  },

  extraMessage: function() {
    if (Meteor.status().status === 'waiting') {
      var reconnectIn = (Meteor.status().retryTime - (new Date()).getTime()) / 1000

      return __('meteor_status_reconnect_in', { count: reconnectIn })
    }
  },

  showReconnect: function() {
    return _.contains(['waiting', 'offline'], Meteor.status().status)
  }
})

Template.meteorStatus.events({
  'a.alert-link click': function(e) {
    e.preventDefault()
    Meteor.reconnect()
  }
})
