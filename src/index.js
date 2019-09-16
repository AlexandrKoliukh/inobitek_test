import Express from 'express';
import cors from 'cors';
import { Client } from 'pg';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import * as sql from './sql';
import { database, server } from './config';

const app = new Express();
app.use(cors());
app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

const connection = new Client(database);

app.get('/', (req, res) => {
  connection.query(sql.getSelectNodesQuery('*'), (err, result) => {
    if (err) {
      res.status(400).end();
    }
    res.status(200);
    res.json({
      data: result.rows,
    });
  });
});

app.post('/add', (req, res) => {
  console.log(req.data, req.body, req.payload);
  connection.query(sql.getAddNodeQuery(req.body), (err) => {
    if (err) {
      res.status(400).end();
    }
    res.status(204);
    // res.send('OK. Successful added');
  });
});

app.delete('/delete', (req, res) => {
  connection.query(sql.getDeleteNodeQuery(req.id), (err) => {
    if (err) {
      res.status(400).end();
    }
    res.status(204);
    res.send('OK. Successful delete');
  });
});

app.put('/update', (req, res) => {
  connection.query(sql.getUpdateNodeQuery(req.query), (err) => {
    if (err) {
      res.status(400).end();
    }
    res.status(204);
    res.send('OK. Successful update');
  });
});

app.listen(server.port, () => {
  console.log(`Server starting on port ${server.port}`);
  try {
    connection.connect((err) => {
      if (err) {
        console.error('connection error', err.stack);
      }
      console.log('connected to database successful');
    });
  } catch (e) {
    console.log(e);
  }
});
