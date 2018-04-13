const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config')
const ctr = require('./controller.js')

const app = new express();


// TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`))


// Request level middleware is being used on this endpoint below. Because it's in the endpoint, it will only affect this endpoint.
app.post('/api/house', ctr.create);
app.get('/api/houses', ctr.read);
app.delete('/api/house/:id', ctr.delete);


const port = 4000;

massive(config.massiveURI).then(connection => {
  app.set('db', connection)
  app.listen(port, () => {
    console.log("listening on port", port);
  });
}).catch(console.log)
