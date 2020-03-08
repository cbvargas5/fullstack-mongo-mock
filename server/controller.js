// Controller here
// complete building out the controller
var Product = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    Product.getProductsHelper()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err))
  },
  post: (req, res) => {
    Product.postProductsHelper(req.body)
      .then(() => res.status(200).send())
      .catch((err) => res.status(400).send(err))
  },
  put: (req, res) => {
    Product.updateProductHelper()
    .then(() => res.status(200).send())
    .catch((err) => res.status(400).send(err))
  },
  delete: (req, res) => {
    Product.deleteProductHelper()
    .then(() => res.status(200).send())
    .catch((err) => res.status(400).send(err))
  }
}

module.exports = controller