var _currentRetryTime = 0
var currentRetryTimeDep = new Deps.Dependency

currentRetryTime = function () {
  currentRetryTimeDep.depend()

  return _currentRetryTime
}

Meteor.setInterval(function () {
  var retryTime = Math.round((Meteor.status().retryTime - (new Date()).getTime()) / 1000)

  if (isFinite(retryTime) && retryTime !== _currentRetryTime) {
    _currentRetryTime = retryTime
    currentRetryTimeDep.changed()
  }
}, 500)
