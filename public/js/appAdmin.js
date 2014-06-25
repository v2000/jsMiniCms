// Declare app level module which depends on services 
var appAdmin = angular.module('myAdmin', ["ngResource"]).config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

//admin
      .when("/admin", {
        templateUrl: "partials/admin/templates/admin",
        controller: "AdminCtrl"
      })
      .when("/admin/articles/listview", {
        templateUrl: "partials/admin/templates/articles/listview",
        controller: "articlescontroller"
      })
      /*.when("/admin", {
        templateUrl: "partials/admin/templates/login.jade",
        controller: "LoginCtrl"
      })*/
      .when("/admin/articles/editArticle", {
        templateUrl: "partials/admin/templates/articles/editArticle",
        controller: "articleaddcontroller"
      })
        .when("/admin/articles/add", {
            templateUrl: "partials/admin/templates/articles/add",
            controller: "articleaddcontroller"
        })
        .when("/admin/articles/delete", {
            templateUrl: "partials/admin/templates/articles/delete",
            controller: "articleaddcontroller"
        })
      .when("admin/templates/categories", {
        templateUrl: "partials/admin/templates/categories/listview",
        controller: "categoriescontroller"
      })
        .when("admin/templates/categories/add", {
            templateUrl: "partials/admin/templates/categories/add",
            controller: "categoriesaddcontroller"
        })
        .when("/admin/categories/delete", {
            templateUrl: "partials/admin/templates/categories/delete",
            controller: "categoriesaddcontroller"
        })
        .when("admin/users/listview", {
            templateUrl: "partials/admin/templates/users/listview",
            controller: "userscontroller"
        })
        .when("/admin/users/add", {
            templateUrl: "partials/admin/templates/users/add",
            controller: "articleaddcontroller"
        })
        .when("/admin/users/delete", {
            templateUrl: "partials/admin/templates/users/delete",
            controller: "articleaddcontroller"
        })
      .otherwise({
        redirectTo: "/articles"
      });
    }
]);
