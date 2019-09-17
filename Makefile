
build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

start:
	make build
	node dist