import axios from 'axios'
import jestOpenAPI from 'jest-openapi';

jestOpenAPI(`${__dirname}/api-description.yml`);

describe('GET /nodes', () => {
  it('should satisfy OpenAPI spec', async () => {

    // Get an HTTP response from your server (e.g. using axios)
    const res = await axios.get('http://localhost:5000/nodes');

    expect(res.status).toEqual(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});
