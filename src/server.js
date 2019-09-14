import express from 'express';

const app = express();
const { get } = app;

get('/', (request, response) => {
  response.send('<h1>Главная страница</h1>');
}).listen(3000);
