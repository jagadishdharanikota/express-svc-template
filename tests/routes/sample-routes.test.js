import request from 'supertest';
import app from '../../src/server.js';

describe('Unit testing the /sample route', () => {
  it('should return OK status', () =>
    request(app)
      .get('/sample')
      .then((response) => expect(response.status).toBe(200)));

  it('should return proper response object', () =>
    request(app)
      .get('/sample')
      .then((response) => expect(response.status).toBe(200)));
});
