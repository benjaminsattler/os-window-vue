#!/usr/bin/env node

const puppeteer = require('puppeteer');
const connect = require('connect');
const serveStatic = require('serve-static');
const http = require('http');

const port = process.argv[2] || 8000;
const app = connect();
app.use(serveStatic(`${__dirname}/../`, { index: ['index.html'] }));
const server = http.createServer(app).listen(port);

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let exitCode = 0;
  page.on('console', async (msg) => {
    const args = await Promise.all(msg.args().map((arg) => arg.jsonValue()));
    // eslint-disable-next-line no-console
    console.log(...args);
    if (/%d failing/.test(msg.text())) {
      exitCode = 255;
    }
  });

  const finished = new Promise((resolve) => {
    page.exposeFunction('mochaFinished', async () => {
      await browser.close();
      await server.close();
      resolve();
    }).then(() => page.goto(`http://localhost:${port}/test/`));
  });
  await finished;
  process.exit(exitCode);
})();
