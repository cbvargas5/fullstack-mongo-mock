// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const bodyParser = require('body-parser');
  const server = express();
  const port = 3000

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  const router = require('./router');
  server.use('/products', router)
  

  //normally i would put these in their own route file but I'm not trying to move anything around
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  
  server.get('/name', (req, res) => {
    res.status(200).send('This is your get request, modify this file to use your router!')
  })
  
  server.post('/name', (req, res) => {
    res.status(200).send('This is your post request, modify this file to use your router!')
  })
  
  server.put('/name/:id', (req, res) => {
    res.status(200).send('This is your put request, modify this file to use your router!')
  })
  
  server.delete('/name/:id', (req, res) => {
    res.status(200).send('This is your delete request, modify this file to use your router!')
  })

  server.listen(port, () => console.log('Connected to port: 3000'))