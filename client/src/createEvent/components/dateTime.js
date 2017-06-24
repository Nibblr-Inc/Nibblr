angular.module('createEvent')

.directive('dateTime', function() {
  return {
    scope: {
    },
    controller: function() {

      this.handleDateChange = function(item) {
        window.eventData.event_time = item._d.toISOString();
      };

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/createEvent/templates/dateTime.html'
  }

});
