appSite.controller("ArticlesShowCtrl", function($scope, $routeParams, Article) {
  $scope.article = Article.show({ id: $routeParams.id });
  console.log("$routeParams.id", $routeParams.id);
});