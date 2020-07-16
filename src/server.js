import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { addSwagger } from './swagger';
import { addRoutes } from './routes';

export default () => {
  const app = new Express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan('combined'));
  app.use(Express.static('public'));

  addSwagger(app);
  addRoutes(app);

  return app;
};
