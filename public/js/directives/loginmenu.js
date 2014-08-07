'use strict';

appAdmin.directive('loginMenu', function() {
  return {
    restrict: 'EA',
    templateUrl: '/partials/admin/templates/menuLogin.jade',
    scope: {},
    controller: function ($scope) {
                //$scope.customer = customer;
    }
  };
});