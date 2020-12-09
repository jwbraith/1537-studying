const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

// MESSAGES
const msg404 = "Nothing found."

// STATIC DIRECTORIES
app.use('/css', express.static('private/css'));
app.use('/images', express.static('private/img'));
app.use('/src', express.static('private/scripts'));

// APP.GETS
app.get('/', (request, response) => {
  response.set('Server', 'Parmelga Engine');
  response.set('X-Powered-By', "Schleps");
  fs.readFile('./private/html/index.html', (error, pgRes) => {
    if (error) {
      response.writeHead(404);
      response.write(msg404);
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(pgRes);
    }
    response.send();
  })
})

app.get('/json-GET', (req, res) => {
  fs.readFile('./private/data/bb-levels.json', (err, pgRes) => {
    if (err) {
      res.writeHead(404);
      res.write(msg404);
    } else {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(pgRes);
    }
    res.end();
  });
})

// RUN SERVER
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})