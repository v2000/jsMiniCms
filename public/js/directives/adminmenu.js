'use strict';

appAdmin.directive('adminMenu', function() {
  return {
    restrict: 'EA',
    templateUrl: '/partials/admin/templates/menuAdmin.jade',
    scope: {},
    controller: function ($scope) {
                //$scope.customer = customer;
    }
  };
});