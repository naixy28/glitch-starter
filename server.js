// server.js
// where your node app starts

const path = require('path')
const PORT = 8000

// init project
const express = require('express')
const app = express()

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/index.html'))
})

// listen for requests :)
const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
