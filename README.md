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

App

    npm test

Api

    npx jest openApi
    
<h2>Production build</h2>

    npm run build
    
Replace your front-end build to /public.
