

describe('News controller', function() {
    var newsService;
    var $q;
    var $rootScope;
    var scope;

    beforeEach(module('newsApp'));
    beforeEach(module('newsAppControllers'));

    beforeEach(module(function($provide){
        newsService = {
            getNews: function(){}
        };

        $provide('newsService', newsService);
    }));

    beforeEach(inject(function(_$rootScope_, $controller, _$q_){
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
    }));

    $controller('News Controller', function() {
        $scope: scope
    });

    describe('fetching news', function() {
        it('Should populate news from service', function() {

        });
    });
});