

var newsApp = angular.module('newsApp',['ngResource','newsAppServices','newsAppControllers']);

var newsAppServices = angular.module('newsAppServices',[]);

var newsAppControllers = angular.module('newsAppControllers',[]);

newsAppServices.factory('newsService', ['$resource','$q', function($resource,$q) {
    return {
        getNews: function(){
            var deferred = $q.defer();
            $resource('http://localhost:3000/allnews').query()
            .$promise
            .then(function(data) {
                deferred.resolve(data);
            })
            .catch(function(error) {
                deferred.reject(error);
            })
              
            return deferred.promise;
        }
    }
}])

