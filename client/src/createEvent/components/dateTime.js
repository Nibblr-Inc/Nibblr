angular.module('createEvent')

.directive('dateTime', function() {
  return {
    scope: {
    },
    controller: function() {

      this.handleDateChange = function(item) {
        window.eventData.event_time = this.formatDate(item._d);
        console.log('item',item);
      };

      this.formatDate = function(date) {
        return date.toISOString().replace('T', ' ').slice(0, -5);
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/createEvent/templates/dateTime.html'
  }

});
