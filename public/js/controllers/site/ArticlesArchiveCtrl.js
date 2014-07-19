/**
 * Created by juliarietveld on 25/06/14.
 */
appSite.controller("ArticlesArchiveCtrl", function($scope, $routeParams, $location, ArticleArchive, Archive) {

    $scope.archive = Archive.show({ id: $routeParams.date });

    $scope.articles = ArticleArchive.index({ id: $routeParams.date });

    $scope.new = function() {
        $location.path("/articles/new/" + $routeParams.id);
    };
});
