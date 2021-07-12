import request from 'supertest';
import express from 'express';
import { exampleRoute } from '../example';

describe('example', () => {
  const app = express();
  app.get('/api', exampleRoute);
  const server = app.listen(4000);

  afterAll(() => {
    server.close();
  });

  it('obtain response from example route', async () => {
    return request(app)
      .get('/api')
      .set('accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        const { body } = response;
        expect(typeof body).toBe('object');
        expect(body).toHaveProperty('example');
      });
  });
});
