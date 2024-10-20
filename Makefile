install-dev:
	npm i
	npm install -g browserify
	npm install -g gulp-cli

build:
	gulp

run:
	python app.py

build-run:
	gulp
	python app.py
