
describe('News Service', function() {
    var $httpBackend;
    var service;
    var newsUrl = 'http://localhost:3000/allnews';

    beforeEach(module('newsApp'));
    beforeEach(module('newsAppServices'));

    beforeEach(inject(function(_$httpBackend_, $injector) {

        createNewsService = function() {
            return $injector.get('newsService')
        }

        $httpBackend = _$httpBackend_;
        service = createNewsService();
    }));
    
    describe("When getting all news", function() {
        it("Should make a call to the API", function() {
            $httpBackend.expectGET(newsUrl).respond(200)
            service.getnews();
            $httpBackend.verifyNoOutstandingExpectation();
        });
        it("Should send an error when API fails", function() {
            $httpBackend.whenGET(newsUrl).respond(500)

            var err;

            service.getnews().catch(function(e) {
                err = e;
            })

            $httpBackend.flush();

            expect(err).toBeDefined();
        });
        it("should send data when API is successful", function() {
            $httpBackend.whenGET(newsUrl).respond(200, [{name: 'sky news'}]);

            var data;

            service.getnews().then(function(d) {
                data = d;
            });

            $httpBackend.flush();

            expect(data[0].name).toEqual('sky news')
        });
    });
});