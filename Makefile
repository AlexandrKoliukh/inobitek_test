
build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

start:
	npx nodemon --exec babel-node src/index.js