appAdmin.controller("AdminCtrl", function($scope, $location, Article, Category) {

  $scope.articles = Article.index();
  $scope.categories = Category.index();
  
  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });
  console.log("IT IS controller AdminCtrl")
  $scope.new = function() {
    $location.path("/articles/new/" + $routeParams.id);
  };
});