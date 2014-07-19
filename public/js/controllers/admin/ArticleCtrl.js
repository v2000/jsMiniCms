appAdmin.controller("ArticleCtrl", function($scope, $location, Article, Category, user) {

  $scope.articles = Article.index();
  $scope.categories = Category.index();
  $scope.users = user.index();
  
  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });

  //var addMenu=$('<a class="navbar-brand" href="/admin">Articles</a>' +'<a class="navbar-brand" href="/admin">Categories</a>'+'<a class="navbar-brand" href="/admin">Users</a>'+'<a class="navbar-brand" href="/">Show site</a>');
  //addMenu.appendTo('.container');
  
  console.log("IT IS controller ArticleCtrl")
  $scope.new = function() {
    console.log("$routeParams.id",$routeParams.id);
    $location.path("/admin/articles/editArticle" + $routeParams.id);
  };
});