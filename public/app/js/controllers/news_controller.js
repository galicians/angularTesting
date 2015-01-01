

var newsAppControllers = angular.module('newsAppControllers',[]);


newsAppControllers.controller('newsController', ['newsService','$scope', function(newsService,$scope) {
    $scope.loading = true;

    $scope.getNews = function() {
        newsService.getNews().then(function(news){
            $scope.news = news;
            $scope.loading = false;
        }).catch(function(error){
            // console.log("Logs: error in newsController", error);
            $scope.loading = false;
        })
    }

    $scope.getNews();
}])