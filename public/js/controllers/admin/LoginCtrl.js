app00.controller("LoginCtrl", function($scope, $location) {
  

   $scope.login = function() {
    $location.path("/articles/");
  };
});