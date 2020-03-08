// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)
  .post(controller.post);

router
  .route('/products/:id')
  .put(controller.put)
  .delete(controller.delete);

  router
    .route('/name')
    .get(() => res.status(200).send('This is your get request, modify this file to use your router!'))
    .post(() => res.status(200).send('This is your post request, modify this file to use your router!'));

  router
    .route('/name/:id')
    .put(() => res.status(200).send('This is your put request, modify this file to use your router!'))
    .delete(() => res.status(200).send('This is your delete request, modify this file to use your router!'));

  // server.get('/name', (req, res) => {
  //   res.status(200).send('This is your get request, modify this file to use your router!')
  // })
  
  // server.post('/name', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })
  
  // server.put('/name/:id', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })
  
  // server.delete('/name/:id', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })

module.exports = router