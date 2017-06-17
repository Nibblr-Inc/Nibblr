angular.module('nibblr', [])

.directive('app', function() {
  return {
    scope: {},
    controller: function() {
      console.log('in angular module')
    },
    templateUrl: 'client/src/templates/app.html'
  }

})
