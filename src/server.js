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
  app.get('/getNodesByParentId/:parentId', (req, res) => main.getNodesByParentId(req, res));
  app.get('/getNodeById/:id', (req, res) => main.getNodeById(req, res));
  app.post('/addNode', (req, res) => main.postNode(req, res));
  app.put('/updateNode', (req, res) => main.putNode(req, res));
  app.delete('/deleteNode', (req, res) => main.deleteNode(req, res));

  return app;
};
