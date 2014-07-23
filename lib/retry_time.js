var _currentRetryTime = 0
var _currentRetryTimeListeners = new Deps.Dependency()

currentRetryTime = function() {
  _currentRetryTimeListeners.depend()

  return _currentRetryTime
}

Meteor.setInterval(function() {
  var retryTime = Math.round((Meteor.status().retryTime - (new Date()).getTime()) / 1000)

  if (retryTime != _currentRetryTime) {
    _currentRetryTime = retryTime
    _currentRetryTimeListeners.changed()
  }
}, 500)
