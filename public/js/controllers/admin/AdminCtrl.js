appAdmin.controller("AdminCtrl", function($scope, $location, Article, Category) {

  $scope.articles = Article.index();
  $scope.categories = Category.index();
  
  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });

  //var addMenu=$('<a class="navbar-brand" href="/admin">Articles</a>' +'<a class="navbar-brand" href="/admin">Categories</a>'+'<a class="navbar-brand" href="/admin">Users</a>'+'<a class="navbar-brand" href="/">Show site</a>');
  //addMenu.appendTo('.container');
  
  console.log("IT IS controller AdminCtrl")
  $scope.new = function() {
    $location.path("/articles/new/" + $routeParams.id);
  };
});