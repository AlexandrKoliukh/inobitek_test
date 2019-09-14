import { Client } from 'pg';
import config from './config';

const client = new Client({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
});

client.connect();
client.query('SELECT * FROM nodes', (err, res) => {
    console.log(err ? err.stack : res.rows); // Hello World!
    client.end();
});