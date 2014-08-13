appAdmin.controller("ArticleCtrl", function($scope, $location, $routeParams, Article, Category, user) {
   var userId;
  $scope.articles = Article.index();
  $scope.categories = Category.index();
  

  console.log("IT IS controller ArticleCtrl");
  console.log("$routeParams.id", $routeParams.id);
});