// Controller here
// complete building out the controller
var Product = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    console.log('get test')
    Product.getProductsHelper()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err))
  },
  post: (req, res) => {
    console.log('post test')
    Product.postProductsHelper(req.body)
      .then(() => res.status(200).send())
      .catch((err) => res.status(400).send(err))
  },
  put: (req, res) => {
    const _id = req.params.id;
    const item = req.body.item
    Product.updateProductHelper({_id}, {item})
      .then(() => res.status(200).send())
      .catch((err) => res.status(400).send(err))
  },
  delete: (req, res) => {
    const _id = req.params.id;
    Product.deleteProductHelper({_id})
      .then(() => res.status(200).send())
      .catch((err) => res.status(400).send(err))
  }
}

module.exports = controller