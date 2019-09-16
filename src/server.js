import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import knex from 'knex';

import * as main from './controlers/main';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost:5432',
    user: 'alk',
    password: 'poiuy09876',
    database: 'inobitek_test',
  },
});

const app = new Express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => res.send('hello world'));
app.get('/app', (req, res) => main.getTableData(req, res, db));
app.post('/app', (req, res) => main.postTableData(req, res, db));
app.put('/app', (req, res) => main.putTableData(req, res, db));
app.delete('/app', (req, res) => main.deleteTableData(req, res, db));


app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
});
