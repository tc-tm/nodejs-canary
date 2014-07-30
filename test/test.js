var assert = require("assert"), request = require("supertest");

request = request('http://localhost:3000');

describe('GET /hello', function(){
  it("responds with Hello", function(done){
    request.get('/hello').expect(200, done);
  });
});

