appAdmin.controller("ArticleEditCtrl", function($scope, $location, Article, Category, User) {
//It will be controller for edit article
  $scope.articles = Article.update();
  $scope.categories = Category.index();
  $scope.users = User.index();
  
  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });

  //var addMenu=$('<a class="navbar-brand" href="/admin">Articles</a>' +'<a class="navbar-brand" href="/admin">Categories</a>'+'<a class="navbar-brand" href="/admin">Users</a>'+'<a class="navbar-brand" href="/">Show site</a>');
  //addMenu.appendTo('.container');
  
  console.log("IT IS controller ArticleEditCtrl")
  $scope.new = function() {
    $location.path("/admin/admin" + $routeParams.id);
  };
});