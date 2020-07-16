# Запуск k6

Для генерирования тестов из swagger: https://k6.io/blog/load-testing-your-api-with-swagger-openapi-and-k6

1. Установить зависимости
1. Установить k6 в систему https://k6.io/docs/getting-started/installation
1. Сгенерировать скелет командой `npx openapi-generator generate -i src/api-description.yml -g k6 -o ./k6/`

1. Исправить код тестов(Необъявленные переменные, параметры запросов)
1. Запустить сервер `npx nodemon --exec babel-node src/index.js 5000`

Запустить k6 

    k6 run k6/script.js --vus 10 --iterations 10

<h2>Install</h2>

    git clone https://github.com/AlexandrKoliukh/inobitek_test_back.git
    cd inobitek_test_back
    npm i

<h2>Init database</h2>

Command will create test_alk_db database. 

    createdb test_alk_db
    psql test_alk_db -f init.sql -h 127.0.0.1 -p 5432 -U USER NAME -W

<h2>Run server</h2>

Change database settings in /config.js

    const databaseConfig = {
      client: 'pg',
      connection: {
        host: database host,
        user: database user,
        password: database user password,
        database: 'test_alk_db',
      },
    };
    
Run server.

    npx nodemon --exec babel-node src/index.js [port]

<h2>For testing</h2>

    npm test
    
<h2>Production build</h2>

    npm run build
    
Replace your front-end build to /public.
