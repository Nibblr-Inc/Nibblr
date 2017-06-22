angular.module('nibblr')

.directive('login', function() {
  return {
    scope: {},
    controller: function() {
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
        // fab.removeClass('mdl-navigation__link');
        overlay.removeClass('dark-overlay');

      }
    },
    templateUrl: 'client/src/templates/login.html'
  }

})
