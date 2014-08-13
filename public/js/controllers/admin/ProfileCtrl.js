appAdmin.controller("ProfileCtrl", function($scope, $location, ArticleAdminUser, ArticleAdminCategory, Category, user, ArticleUser, DataProvider, ArticleCategory) {
  //$scope.articles = Article.index();
  $scope.categories = Category.index();
  $scope.users = user.index();


  DataProvider.success(function(data){
    $scope.userData = data;
    $scope.userEmail=data.email;
    $scope.userId=data._id;
    var userId=data._id;
    console.log("userId from PROFILE",userId);
    $scope.articles = ArticleUser.index({ id: data._id });
  });

 
  //var aaa="5396ff5e01dd4ae810000003";
  //$scope.articles = ArticleCategory.index({ id: aaa });

 
  console.log("IT IS controller ProfileCtrl");

  $scope.newArticle = function() {

    $location.path("/admin/articles/editArticle" + userId);    
  };
});