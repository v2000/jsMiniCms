// Declare app level module which depends on services 
var app = angular.module('myApp', ["ngResource"]).config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

//visitors
      .when("/articles", {
        templateUrl: "partials/site/article.jade",
        controller: "ArticlesIndexCtrl"
      })
      .when("/articles/:id", {
        templateUrl: "partials/site/showArticle.jade",
        controller: "ArticlesShowCtrl"
      })
      .when("/articles/category/:id", {
        templateUrl: "partials/site/showCategory.jade",
        controller: "ArticlesCategoryCtrl"
      })
      .otherwise({
        redirectTo: "/articles"
      });
    }
]);
