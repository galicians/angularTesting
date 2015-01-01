

var newsAppControllers = angular.module('newsAppControllers',[]);


newsAppControllers.controller('newsController', ['newsService','$scope', function(newsService,$scope) {
    $scope.getNews = function() {
        newsService.getNews().then(function(news){
            $scope.news = news;
        })
    }

}])