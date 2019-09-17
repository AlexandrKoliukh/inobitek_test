import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import * as main from './controlers/main';

export default () => {
  const app = new Express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan('combined'));

  app.get('/', (req, res) => res.json({ data: 'hello world' }));
  app.get('/nodes', (req, res) => main.getAllNodes(req, res));
  app.get('/nodes/:id', (req, res) => main.getNodeById(req, res));
  app.post('/nodes/new', (req, res) => main.postNode(req, res));
  app.put('/nodes/:id', (req, res) => main.putNode(req, res));
  app.delete('/nodes/:id', (req, res) => main.deleteNode(req, res));

  return app;
};
