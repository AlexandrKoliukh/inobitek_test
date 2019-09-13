
build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run

start:
	make build
	node dist/bin/gendiff.js