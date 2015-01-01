

describe('News controller', function() {
    var newsService;
    var $q;
    var deferred;
    var $rootScope;
    var scope;

    beforeEach(module('newsApp'));
    beforeEach(module('newsAppControllers'));

    beforeEach(module(function($provide){
        newsService = {
            getNews: function(){}
        };

        $provide.value('newsService', newsService);
    }));

    beforeEach(inject(function(_$rootScope_, $controller, _$q_){
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $controller('newsController', {
            $scope: scope
        });
        $q = _$q_
    }));

   
    describe('fetching news', function() {
        var deferred;

        beforeEach(function() {
            deferred = $q.defer();
            spyOn(newsService, 'getNews')
            .and.returnValue(deferred.promise);
        });

        function sendDataFromService(){
            deferred.resolve([{name: 'sky news'}]);
        };

        it('Should populate news from service', function() {

            scope.getNews();

            sendDataFromService();

            $rootScope.$digest();

            expect(scope.news[0].name).toEqual('sky news');
        });
        it("Should should set loading to false when data comes back", function() {

            scope.getNews();

            
            scope.loading = true;

            sendDataFromService();

            $rootScope.$digest();

            expect(scope.loading).toBeFalsy();
        })
    });
});