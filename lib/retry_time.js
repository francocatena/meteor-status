var currentRetryTime = 0
var currentRetryDep = new Deps.Dependency

currentRetryTime = function() {
  currentRetryDep.depend()

  return currentRetryTime
}

Meteor.setInterval(function() {
  var retryTime = Math.round((Meteor.status().retryTime - (new Date()).getTime()) / 1000)

  if (retryTime !== _currentRetryTime) {
    currentRetryTime = retryTime
    currentRetryDep.changed()
  }
}, 500)
