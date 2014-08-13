appAdmin.controller("ArticleCtrl", function($scope, $location, ArticleAdminCategory, Category, user) {
   var userId;
  $scope.articles = ArticleAdminCategory.index();
  $scope.categories = Category.index();
  

  console.log("IT IS controller ArticleCtrl");
});