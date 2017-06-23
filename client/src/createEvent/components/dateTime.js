angular.module('createEvent')

.directive('dateTime', function() {
  return {
    scope: {
    },
    controller: function() {

      this.handleDateChange = function(item) {
        console.log('item: ', item._d);
        window.eventData.event_time = item._d;
      };

      this.formatDate = function() {
        var newDate = new Date(`2017-${window.eventData.date}T${window.eventData.time}:00`);
        window.eventData.event_time = newDate.toISOString();
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/createEvent/templates/dateTime.html'
  }

});
