// Declare app level module which depends on services 
var appAdmin = angular.module('myAdmin', ["ngResource"]).config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

//admin
      .when("/admin", {
        templateUrl: "partials/admin/templates/admin.jade",
        controller: "AdminCtrl"
      })
      /*.when("/admin", {
        templateUrl: "partials/admin/templates/login.jade",
        controller: "LoginCtrl"
      })*/
      .when("/articles/new", {
        templateUrl: "partials/admin/templates/ledit.jade",
        controller: "ArticlesEditCtrl"
      })
      .when("/articles/new/:depId", {
        templateUrl: "partials/admin/templates/edit.jade",
        controller: "ArticlesEditCtrl"
      })
      .otherwise({
        redirectTo: "/articles"
      });
    }
]);
