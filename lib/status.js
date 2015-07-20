var retryTime = new ReactiveVar(0);
var retryHandle;
var clearInterval = function () {
  if (retryHandle) {
    Meteor.clearInterval(retryHandle);
  }
};

var helpers = {
  connected: function () {
    return Meteor.status().connected;
  },

  message: function () {
    return i18n_status_func('meteor_status', { context: Meteor.status().status });
  },

  extraMessage: function () {
    if (Meteor.status().status === 'waiting')
      return i18n_status_func('meteor_status_reconnect_in', { count: retryTime.get() });
  },

  showReconnect: function () {
    return _.contains(['waiting', 'offline'], Meteor.status().status);
  },

  reconnectLabel: function () {
    return i18n_status_func('meteor_status_try_now', { context: Meteor.status().status });
  },

  option: function (option) {
    return Status.option(option);
  }
};

Template.status.onDestroyed(clearInterval);
Template.status.onCreated(function () {
  this.autorun(function () {
    // The autorun will re-run whenever Meteor.status() changes, as 
    // Meteor.status() is a reactive source. This allows us to
    // set the interval to update the retry time only when we need
    // to, i.e when the status changes to the 'waiting' status. When
    // the status switches back from 'waiting' to something else, 
    // clear the interval since we don't need it anymore.
    if (Meteor.status().status === 'waiting') {
      retryHandle = Meteor.setInterval(function () {
        var timeDiff   = Meteor.status().retryTime - (new Date).getTime();
        var _retryTime = Math.round(timeDiff / 1000);

        retryTime.set(_retryTime);
      }, 500);
    } else {
      clearInterval();
    }
  });
});

Template.status.helpers({
  template: function () {
    return 'status_' + Status.template();
  },

  helpers: function () {
    return helpers;
  }
});

Template.status.events({
  'click a.alert-link': function (e) {
    e.preventDefault();
    Meteor.reconnect();
  }
});
