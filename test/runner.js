#!/usr/bin/env node

const playwright = require('playwright');
const connect = require('connect');
const serveStatic = require('serve-static');
const http = require('http');

const product = process.env.BROWSER || 'chromium';
const port = process.argv[2] || 8000;
const app = connect();
app.use(serveStatic(`${__dirname}/../`, { index: ['index.html'] }));
const server = http.createServer(app).listen(port);

(async () => {
  const browser = await playwright[product].launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('console', async (msg) => {
    const args = await Promise.all(msg.args().map((arg) => arg.jsonValue()));
    // eslint-disable-next-line no-console
    console.log(...args);
  });

  new Promise((resolve) => {
    page.exposeFunction('mochaFinished', async (arg) => {
      await browser.close();
      server.close();
      resolve(arg);
    }).then(() => page.goto(`http://localhost:${port}/test/`));
  }).then((failures) => process.exit(failures ? 1 : 0));
})();
