import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import server from '../src/server';

let newNodeData = {};

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('GET /', async () => {
    const res = await request(server()).get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /getNodesByParentId?parentId', async () => {
    const res = await request(server()).get('/getNodesByParentId?parentId=0');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /addNode', async () => {
    const res = await request(server())
      .post('/addNode')
      .send({
        ip: 'TestIP', name: 'TestName', port: 9, parent_id: 1,
      }).then((res2) => {
        newNodeData = res2.body.node;
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /addNode (errors)', async () => {
    const res = await request(server())
      .post('/addNode')
      .send({
        ip: 'TestIP', name: 'TestName', port: 999, parent_id: 1,
      });
    expect(res).toHaveHTTPStatus(400);
  });


  it('POST /updateNode', async () => {
    const res = await request(server())
      .post('/updateNode')
      .send({
        id: newNodeData.id, ip: newNodeData.ip, port: newNodeData.port - 1, name: newNodeData.name,
      })
      .then((res2) => {
        expect(res2.body.node.port).toBe(newNodeData.port - 1);
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /deleteNode', async () => {
    const res = await request(server())
      .post('/deleteNode')
      .send({ id: newNodeData.id });
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /deleteNode (errors)', async () => {
    const res = await request(server())
      .post('/deleteNode')
      .send({ id: 'error' });
    expect(res).toHaveHTTPStatus(500);
  });
});
