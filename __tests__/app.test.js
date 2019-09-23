import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import server from '../src/server';

let postID = 0;
let newNodeData = {};

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('GET /', async () => {
    const res = await request(server()).get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /getNodesByParentId:id', async () => {
    const res = await request(server()).get('/getNodesByParentId/0');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /addNode', async () => {
    const res = await request(server())
      .post('/addNode')
      .send({
        ip: 'TestIP', name: 'TestName', port: 999999, parent_id: 1,
      }).then((res2) => {
        postID = res2.body.node.id;
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
    expect(res.body.dbError).toBeFalsy();
  });

  it('POST /addNode (errors)', async () => {
    const res = await request(server())
      .post('/addNode')
      .send({
        ip: 'TestIP', name: 'TestName', port: 999999, parent_id: 1,
      });
    expect(res).toHaveHTTPStatus(400);
    expect(res.body.dbError).toBeTruthy();
  });

  it('GET /getNodeById/:id', async () => {
    const res = await request(server())
      .get(`/getNodeById/${postID}`)
      .then((res2) => {
        newNodeData = { ...res2.body.node };
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
    expect(res.body.dbError).toBeFalsy();
  });

  it('UPDATE /updateNode', async () => {
    const res = await request(server())
      .put('/updateNode')
      .send({
        id: postID, ip: newNodeData.ip, port: newNodeData.port - 1, name: newNodeData.name,
      })
      .then((res2) => {
        expect(res2.body.node.port).toBe(newNodeData.port - 1);
        return res2;
      });
    expect(res).toHaveHTTPStatus(200);
    expect(res.body.dbError).toBeFalsy();
  });

  it('DELETE /deleteNode', async () => {
    const res = await request(server())
      .delete('/deleteNode')
      .send({ id: postID });
    expect(res).toHaveHTTPStatus(200);
    expect(res.body.dbError).toBeFalsy();
  });
});
