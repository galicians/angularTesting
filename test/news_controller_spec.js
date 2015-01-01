

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
        it('Should populate news from service', function() {
            deferred = $q.defer();

            spyOn(newsService, 'getNews')
            .and.returnValue(deferred.promise)

            scope.getNews();

            deferred.resolve([{name: 'sky news'}]);

            $rootScope.$digest();

            expect(scope.news[0].name).toEqual('sky news');
        });
    });
});