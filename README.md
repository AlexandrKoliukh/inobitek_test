<h2>Install</h2>

    git clone https://github.com/AlexandrKoliukh/inobitek_test_back.git
    cd inobitek_test_back
    npm i

<h2>Init database</h2>

Command will create test_alk_db database. 

    make initDB

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
    
Run server on free port.

    make start

Or pass port to argument.

    make start port=1234

<h2>For testing</h2>

    make test
