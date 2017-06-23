angular.module('nibblr')

.directive('login', function() {
  return {
    scope: {
      service: '<'
    },
    controller: function($scope) {
      $scope.hideLogin = false;
      $scope.showLogout = false;
      //toggle these two when a login is successful
      this.handleClick = () => {
        //figure out how to make login service work here
      }


      var $ = angular.element;
      var overlay = $("#overlay"),
              fab = $(".fab"),
           cancel = $("#cancel"),
           submit = $("#submit");

      //fab click
      fab.on('click', openFAB);
      overlay.on('click', closeFAB);
      cancel.on('click', closeFAB);

      function openFAB(event) {
        if (event) event.preventDefault();
        fab.addClass('active');
        overlay.addClass('dark-overlay');

      }

      function closeFAB(event) {
        if (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }

        fab.removeClass('active');
        fab.removeClass('icon');
        overlay.removeClass('dark-overlay');
      }
    },
    templateUrl: 'client/src/home/templates/login.html'
  }

})
