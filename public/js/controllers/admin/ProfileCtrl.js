appAdmin.controller("ProfileCtrl", function($scope, $location, Article, Category) {

  $scope.articles = Article.index();
  $scope.categories = Category.index();
  $scope.user.email= $scope.logged_in_user.email;
  
 
  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });
  
  console.log("IT IS controller ProfileCtrl");
  $scope.new = function() {
    console.log("$routeParams.id",$routeParams.id);
    $location.path("/admin/articles/editArticle" + $routeParams.id);
  };
});
