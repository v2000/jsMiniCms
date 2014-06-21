appAdmin.controller("ArticlesIndexCtrl", function($scope, $location, Article, Category) {
  $scope.articles = Article.index();
  $scope.categories = Category.index();

});