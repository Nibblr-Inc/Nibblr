angular.module('nibblr', [])

.controller('AppCtrl', ["$scope", "eventsRequests", "logout", function($scope, eventsRequests, logout) {

  eventsRequests.getEvents({}, function(data) {
    console.log('event data: ', data.data)
    this.events = data.data;
  }.bind(this))

  console.log('scope of test', $scope.test)

  console.log('$scope in app: ', $scope)


  $scope.showLogout = true;

  // var sessionTest = sessionStorage.getItem('loggedIn');
  // console.log('login status', sessionTest)

  console.log('$scope.showLogout', $scope.showLogout)

  this.logoutClick = () => {
    console.log('in logout click')
    logout.logout(function(data){
      console.log('data', data);
      if (data.data === 'logged out') {
        console.log('Now logged out')
      }
    });
  }

  this.redirectToCreate = () => {
    eventsRequests.redirectToCreate();
  }


}])

.directive('app', function() {
  return {
    scope: {
    },
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/home/templates/app.html'
  }

})
