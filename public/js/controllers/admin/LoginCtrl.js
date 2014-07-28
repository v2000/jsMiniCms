appAdmin.controller("LoginCtrl", function($scope, $location, Article, Category) {
 $scope.articles = Article.index();
  $scope.categories = Category.index();
  console.log("IT IS controller LoginCtrl");

});