import jestOpenAPI from 'jest-openapi';
import axios from 'axios';


describe('/nodes', () => {
  jestOpenAPI(`${__dirname}/../src/api-description.yml`);
  let newNode = {};

  it('GET', async () => {
    const res = await axios.get('http://localhost:5000/nodes?parentId=1');
    expect(res.status).toEqual(200);
  });

  it('POST', async () => {
    const res = await axios.post('http://localhost:5000/nodes', {
      ip: '1.1.1.1',
      port: 234,
      name: '12212',
      parentId: null,
    });
    newNode = res.data;

    expect(res.status).toEqual(200);
    expect(res.data).toSatisfySchemaInApiSpec('Node');
  });

  it('POST 400', async () => {
    try {
      await axios.post('http://localhost:5000/nodes', {
        ip: '1.1.1.1',
        port: 234,
        name: '12212',
        parentId: null,
      });
    } catch (e) {
      expect(e.response.status).toEqual(400);
      expect(e.response.data).toSatisfySchemaInApiSpec('Error');
    }
  });

  it('DELETE', async () => {
    const res = await axios.delete('http://localhost:5000/nodes', {
      data: {
        id: newNode.id,
      },
    });
    expect(res.status).toEqual(200);
  });
});
