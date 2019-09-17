import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import knex from 'knex';

import { databaseConfig } from './config';
import * as main from './controlers/main';

const db = knex(databaseConfig);

const app = new Express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res) => res.json({ data: 'hello world ' }));
app.get('/app', (req, res) => main.getData(req, res, db));
app.post('/app', (req, res) => main.postData(req, res, db));
app.put('/app', (req, res) => main.putData(req, res, db));
app.delete('/app', (req, res) => main.deleteData(req, res, db));

export default app;
