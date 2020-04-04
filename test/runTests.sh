#!/bin/sh

rm -rf dist
npx vue-cli-service build --mode development --target lib --name VueOsWindowPlugin main.js
python -m SimpleHTTPServer 8000 > /dev/null 2>&1 &

pid=$!
npx mocha-chrome http://localhost:8000/test/
result=$?
kill ${pid}
exit ${result}
