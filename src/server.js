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

  app.get('/getNodesByParentId', (req, res) => main.getNodesByParentId(req, res));
  app.post('/addNode', (req, res) => main.postNode(req, res));
  app.post('/updateNode', (req, res) => main.putNode(req, res));
  app.post('/deleteNode', (req, res) => main.deleteNode(req, res));

  return app;
};
