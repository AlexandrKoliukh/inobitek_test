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
  app.use(Express.static('public/build'));

  app.get('/nodes', (req, res) => main.getNodesByParentId(req, res));
  app.post('/nodes', (req, res) => main.addNode(req, res));
  app.put('/nodes', (req, res) => main.updateNode(req, res));
  app.delete('/nodes', (req, res) => main.deleteNode(req, res));

  return app;
};
