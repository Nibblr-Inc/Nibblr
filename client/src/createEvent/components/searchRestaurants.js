angular.module('createEvent')

.controller('searchCtrl', ['searchRestaurants', function(searchRestaurants) {
  this.submit = function(item) {
    searchRestaurants.search(item, function(data) {
      this.restaurants = data.data;
      console.log('this.restaurants', this.restaurants)
    }.bind(this))
  }


  this.handleClick = function(entry) {
    console.log('entry: ', entry);
    window.eventData[location] = entry.name;
    window.eventData.google_place_id = entry.place_id;
    window.eventData.address = entry.vicinity;
    searchRestaurants.getImage({photo_reference: entry.photos[0].photo_reference}, function(response) {
      console.log('photo response: ', response.data)
      var html = response.data;
    })
  }

}])

.directive('search', function() {
  return {
    scope: {},
    controller: 'searchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/createEvent/templates/searchRestaurants.html'
  }
})
