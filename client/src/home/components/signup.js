angular.module('nibblr')

.directive('signup', function() {
  return {
    scope: {
    },
    controller: function(signUp, $scope) {
      $scope.message2 = "Sign Up";
      this.signupClick = (username1, password1) => {
        //figure out how to make login service work here
        console.log('in signup click')
        console.log(username1, password1)
        signUp.signUp({username: username1, password: password1}, function(data){
          console.log('data', data);
          if (data.status === 201) {
            console.log('Sign Up VICTORY')
            $scope.message2 = "Success!"
          } else {
            $scope.message2 = "Try again"
          }
        });
      }

      var $ = angular.element;
      var overlay = $("#overlay"),
              fab = $(".fab2"),
           cancel = $("#cancel4"),
           submit = $("#submit4");

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
        fab.removeClass('icon2');
        overlay.removeClass('dark-overlay');
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/signup.html'
  }

})
