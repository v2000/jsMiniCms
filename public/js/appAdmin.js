// Declare app level module which depends on services 
var appAdmin = angular.module('myAdmin', ['ngResource']).config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

//admin
      .when('/admin/login', {
        templateUrl: "partials/admin/templates/login.jade",
        controller: "LoginCtrl"
      })
       .when('/admin/signup', {
        templateUrl: "partials/admin/templates/signup.jade",
        controller: "SignupCtrl"
      })
      .when('/admin/profile', {
        templateUrl: "partials/admin/templates/profile.jade",
        controller: "ProfileCtrl"
      })
      .otherwise({
        redirectTo:'/admin/login'
      });
    }
]);
