import { Client } from 'pg';
import config from './config';

const client = new Client(config);

client.connect();
client.query('SELECT * FROM nodes', (err, res) => {
  console.log(err ? err.stack : res.rows);
  client.end();
});
