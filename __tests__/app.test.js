import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import server from '../src/server';

let newNodeData = {};

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('GET /nodes?parentId', async () => {
    const res = await request(server()).get('/nodes?parentId=0');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /nodes', async () => {
    const res = await request(server())
      .post('/nodes')
      .send({
        ip: 'TestIP', name: 'TestName', port: 9, parent_id: 1,
      }).then((res2) => {
        newNodeData = res2.body.node;
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /nodes (errors)', async () => {
    const res = await request(server())
      .post('/nodes')
      .send({
        ip: 'TestIP', name: 'TestName', port: 999, parent_id: 1,
      });
    expect(res).toHaveHTTPStatus(400);
  });


  it('PUT /nodes', async () => {
    const res = await request(server())
      .put('/nodes')
      .send({
        id: newNodeData.id, ip: newNodeData.ip, port: newNodeData.port - 1, name: newNodeData.name,
      })
      .then((res2) => {
        expect(res2.body.node.port).toBe(newNodeData.port - 1);
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
  });

  it('DELETE /nodes', async () => {
    const res = await request(server())
      .delete('/nodes')
      .send({ id: newNodeData.id });
    expect(res).toHaveHTTPStatus(200);
  });

  it('DELETE /nodes (errors)', async () => {
    const res = await request(server())
      .delete('/nodes')
      .send({ id: 'error' });
    expect(res).toHaveHTTPStatus(500);
  });
});
