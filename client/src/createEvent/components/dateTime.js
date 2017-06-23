angular.module('createEvent')

.directive('dateTime', function() {
  return {
    scope: {
    },
    controller: function() {
      window.eventData.date = '';
      window.eventData.time = '';

      this.handleDateChange = function(item) {
        window.eventData.date = item;
      };

      this.handleTimeChange = function(item) {
        window.eventData.time = item;
      };

      this.handleSubmit = function() {
        var newDate = new Date(`2017-${window.eventData.date}T${window.eventData.time}:00`);
        window.eventData.event_time = newDate.toISOString();
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/createEvent/templates/dateTime.html'
  }

});
