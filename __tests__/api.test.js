import unmock, { Service } from 'unmock';
import fs from 'fs';
import yaml from 'js-yaml';
import jestRunner from 'unmock-jest-runner';

const faker = unmock.faker();

const schema = yaml.safeLoad(fs.readFileSync(`${__dirname}/../src/api-description.yml`, 'utf-8'));

const service = Service.fromOpenAPI({ schema, name: 'app' });
faker.add(service);

describe("Using unmock", () => {
  it('GET /nodes', jestRunner(async () => {
    const req = {
      host: 'localhost:5000',
      protocol: 'http',
      method: 'get',
      path: '/nodes',
      pathname: '/nodes',
      headers: {},
      query: {},
    };

    const res = faker.generate(req);
    expect(res.statusCode).toBe(200);
  }));
});
