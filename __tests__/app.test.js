import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import solution from '../src/server';

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('GET /', async () => {
    const res = await request(solution()).get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /nodes', async () => {
    const res = await request(solution()).get('/nodes');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /nodes/:id', async () => {
    const res = await request(solution())
      .get('/nodes/1');
    expect(res).toHaveHTTPStatus(200);
  });

  // it('POST /nodes/new', async () => {
  //   const res = await request(solution())
  //     .post('/nodes/new')
  //     .send({ ip: 'TestIP', name: 'TestName', port: 999999, parent_id: 1 });
  //   expect(res).toHaveHTTPStatus(302);
  //   expect(res.body.dbError).toBeFalsy();
  // });

  it('POST /nodes (errors)', async () => {
    const res = await request(solution())
      .post('/nodes/new')
      .send({
        ip: 'TestIP', name: 'TestName', port: 999999, parent_id: 1,
      });
    expect(res).toHaveHTTPStatus(400);
    expect(res.body.dbError).toBeTruthy();
  });

  // it('DELETE /nodes/:id', async () => {
  //   const res = await request(solution())
  //     .get('/nodes/')
  // });
});
