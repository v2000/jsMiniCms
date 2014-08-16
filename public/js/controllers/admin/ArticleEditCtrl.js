appAdmin.controller("ArticleEditCtrl", function($scope, $location, $routeParams, Article, Category, user, ArticleUser, DataProvider, ArticleCategory) {
    //$scope.articles = Article.index();
  //$scope.categories = Category.index();
  //$scope.users = user.index();


  //DataProvider.success(function(data){
  //  $scope.userData = data;
  // $scope.userEmail=data.email;
  //  $scope.userId=data._id;
  //  var userId=data._id;
  //  console.log("userId from PROFILE",userId);
  //  $scope.articles = ArticleUser.index({ id: data._id });
  //});

  //var aaa="5396ff5e01dd4ae810000003";
  //$scope.articles = ArticleCategory.index({ id: aaa }); 
  console.log("IT IS controller ArtivleEditCtrl");
  

   if ($routeParams.id) {
    console.log("SHOW");
    $scope.article = Article.show({ id: $routeParams.id });
  } else {
    console.log("NEW");
    $scope.article = new Article();
  }
 
  $routeParams.catId="5396ff4201dd4ae810000002";

  if($routeParams.catId){
    $scope.article.categoryId = $routeParams.catId;
  }

  $scope.categories = Category.index();

  console.log("$routeParams.id", $routeParams.id);
  console.log("$routeParams.catId", $routeParams.catId);

  $scope.submit = function() {

    function success(response) {
      $location.path("/admin/profile");
      alert("Data save");
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
    alert("Data not save");
    }

    if ($routeParams.id) {
      Article.update($scope.article, success, failure);
       console.log("Article.update");
    } else {
      Article.create($scope.article, success, failure);
    }

  };

  $scope.cancel = function() {
    $location.path("/admin/articles/"+$scope.article._id+"/edit");
  };

  /*$scope.errorClass = function(name) {
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
  };*/

});