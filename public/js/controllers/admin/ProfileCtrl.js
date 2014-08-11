appAdmin.controller("ProfileCtrl", function($scope, $location, ArticleAdminUser, ArticleAdminCategory, Category, user, ArticleUser, DataProvider, ArticleCategory) {

  //$scope.articles = Article.index();
  $scope.categories = Category.index();
  $scope.users = user.index();


  DataProvider.success(function(data){
    $scope.userData = data;
    $scope.userEmail=data.email;
    $scope.userId=data._id;
    $scope.articles = ArticleUser.index({ id: data._id });
  });

 
  //var aaa="5396ff5e01dd4ae810000003";
  //$scope.articles = ArticleCategory.index({ id: aaa });

 
  console.log("IT IS controller ProfileCtrl");

  $scope.new = function() {
    console.log("$routeParams.id",$routeParams.id);
    $location.path("/admin/articles/editArticle" + $routeParams.id);
  };
});