angular.module('nibblr')

.controller('CreateCtrl', ['eventsRequests', function(eventsRequests) {
  var $ = angular.element;
  var overlay = $("#overlay"),
          fab2 = $(".fab2"),
       cancel = $("#cancel"),
       submit = $("#submit");

  //fab click
  fab2.on('click', openFAB);
  overlay.on('click', closeFAB);
  cancel.on('click', closeFAB);

  function openFAB(event) {
    eventsRequests.redirectToCreate();
  }
}])

.directive('createEvent', function() {
  return {
    scope: {},
    controller: 'CreateCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/home/templates/createEvent.html'
  }
})
