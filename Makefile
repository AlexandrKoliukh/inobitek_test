
build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

initDB:
	createdb test_alk_db
	psql test_alk_db < init.sql

start:
	npx nodemon --exec babel-node src/index.js