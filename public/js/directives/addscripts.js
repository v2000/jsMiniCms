'use strict';

appAdmin.directive('addScripts', function() {
  return {
    restrict: 'EA',
    templateUrl: '../scripts.jade',
    scope: {},
    controller: function ($scope) {
                //$scope.customer = customer;
    }
  };
});