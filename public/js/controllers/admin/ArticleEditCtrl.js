appAdmin.controller("ArticleEditCtrl", function($scope, $location, $routeParams, Article, Category, user, ArticleUser, DataProvider, ArticleCategory) {
  //$scope.articles = Article.index();
  $scope.categories = Category.index();
  $scope.users = user.index();


  DataProvider.success(function(data){
     console.log("DataProvider.success");
        $scope.userData = data;
        $scope.userEmail=data.email;
        $scope.userId=data._id;
        var userId=data._id;

        console.log("userId",userId);
      if (userId) {
        console.log("AAAAAAAAAAAA");
        $scope.article = Article.show({ id: userId });
      } else {
         console.log("BBBBBBBBBBBBB");
        $scope.article = new Article();
      }

  //    if($routeParams.depId){
  //      $scope.article.categoryId = $routeParams.depId;
  //    }

      $scope.categories = Category.index();
  });
  
  //$scope.category = Category.show({ id: $routeParams.id });

  //$scope.articles = ArticleCategory.index({ id: $routeParams.id });
 

  $scope.submit = function() {

    function success(response) {
      $location.path("/admin/profile");
    }

    function failure(response) {
      _.each(response.data, function(errors, key) {
        if (errors.length > 0) {
          _.each(errors, function(e) {
            $scope.form[key].$dirty = true;
            $scope.form[key].$setValidity(e, false);
          });
        }
      });
    }

    if (userId) {
      Article.update($scope.article, success, failure);
    } else {
      Article.create($scope.article, success, failure);
    }

  };

  $scope.cancel = function() {
    $location.path("/contacts/"+$scope.employee._id);
  };

  $scope.errorClass = function(name) {
    var s = $scope.form[name];
    return s && s.$invalid && s.$dirty ? "error" : "";
  };

  $scope.errorMessage = function(name) {
    var s = $scope.form[name].$error;
    result = [];
    _.each(s, function(key, value) {
      result.push(value);
    });
    return result.join(", ");
  };

  console.log("$routeParams.id", $routeParams.id);
  console.log("IT IS controller ArticleEditCtrl")
});