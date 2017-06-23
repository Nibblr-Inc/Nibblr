angular.module('createEvent')

.directive('nameDescription', function() {
  return {
    scope: {},
    controller: function() {
      this.availCharsName = 50;
      this.availCharsDesc = 400;
      window.eventData.name = '';
      window.eventData.description = '';

      this.handleNameChange = function(item) {
        this.availCharsName = 50 - item.length;
        window.eventData.name = item;
      }

      this.handleDescChange = function(item) {
        this.availCharsDesc = 400 - item.length;
        window.eventData.description = item;
      }



    },
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/createEvent/templates/nameDescription.html'
  }

})
