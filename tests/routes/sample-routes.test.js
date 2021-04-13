const request = require('supertest');
const app = require('../../src/server');

describe('Unit testing the /sample route', function () {
  it('should return OK status', function () {
    return request(app)
      .get('/sample')
      .then(function (response) {
        expect(response.status).toBe(200);
      });
  });

  it('should return proper response object', function () {
    return request(app)
      .get('/sample')
      .then(function (response) {
        expect(response.status).toBe(200);
      });
  });
});
