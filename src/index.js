import express from 'express';
import cors from 'cors';
import { Client } from 'pg';
import * as sql from './sql';
import { database, server } from './config';

const app = express();
app.use(cors());

const connection = new Client(database);
connection.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else console.log('connected to database successful');
});

app.get('/', (req, res) => {
  connection.query(sql.getSelectNodesQuery('*'), (err, result) => {
    if (err) return res.send(err);
    return res.json({
      data: result.rows,
    });
  });
});

app.get('/add', (req, res) => {
  connection.query(sql.getAddNodeQuery(req.query), (err) => {
    if (err) return res.send(err);
    return res.send('successful added');
  });
});

app.listen(server.port, () => console.log(`Server starting on port ${server.port}`));
