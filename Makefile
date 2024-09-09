install:
		npm ci

run:
	bin/nodejs-package.js 10

deps-install:
	npm ci --legacy-peer-deps

deps-update:
	npx ncu -u

publish:
		npm publish --dry-run

gendiff:
		node bin/gendiff.js

lint:
		npx eslint .

test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8

.PHONY: test