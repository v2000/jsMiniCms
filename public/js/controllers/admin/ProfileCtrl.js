appAdmin.controller("ProfileCtrl", function($scope, $location, $window, Article, Category, user, LoggedUser) {

  $scope.articles = Article.index();
  $scope.categories = Category.index();

  $scope.user = LoggedUser.show();
  
  

  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });
  
  console.log("IT IS controller ProfileCtrl");
  $scope.new = function() {
    console.log("$routeParams.id",$routeParams.id);
    $location.path("/admin/articles/editArticle" + $routeParams.id);
  };
});