// Declare app level module which depends on services 
var appAdmin = angular.module('myAdmin', ['ngResource']).config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

//admin
      .when('/login', {
        templateUrl: "partials/admin/templates/login.jade",
        controller: "LoginCtrl"
      })
       .when("/signup", {
        templateUrl: "partials/admin/templates/signup.jade",
        controller: "SignupCtrl"
      })
      .when("/profile", {
        templateUrl: "partials/admin/templates/profile.jade",
        controller: "ProfileCtrl"
      })
      .when("/admin/articles/listview", {
        templateUrl: "partials/admin/templates/articles/editArticle.jade",
        controller: "ArticleEditCtrl"
      })
      .when("/admin/articles/editArticle", {
        templateUrl: "partials/admin/templates/articles/editArticle.jade",
        controller: "articleaddcontroller"
      })
        .when("/admin/articles/add", {
            templateUrl: "partials/admin/templates/articles/add.jade",
            controller: "articleaddcontroller"
        })
        .when("/admin/articles/delete", {
            templateUrl: "partials/admin/templates/articles/delete.jade",
            controller: "articleaddcontroller"
        })
      .when("admin/templates/categories", {
        templateUrl: "partials/admin/templates/categories/listview.jade",
        controller: "categoriescontroller"
      })
        .when("admin/templates/categories/add", {
            templateUrl: "partials/admin/templates/categories/add.jade",
            controller: "categoriesaddcontroller"
        })
        .when("/admin/categories/delete", {
            templateUrl: "partials/admin/templates/categories/delete.jade",
            controller: "categoriesaddcontroller"
        })
        .when("admin/users/listview", {
            templateUrl: "partials/admin/templates/users/listview.jade",
            controller: "userscontroller"
        })
        .when("/admin/users/add", {
            templateUrl: "partials/admin/templates/users/add.jade",
            controller: "articleaddcontroller"
        })
        .when("/admin/users/delete", {
            templateUrl: "partials/admin/templates/users/delete.jade",
            controller: "articleaddcontroller"
        })
      .otherwise({
        redirectTo: "/login"
      });
    }
]);
