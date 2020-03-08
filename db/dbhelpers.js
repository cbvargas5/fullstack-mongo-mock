var Product = require('./index');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (item) => Product.create(item),
  updateProductHelper: (_id, item) => Product.findByIdAndUpdate(_id, item),
  deleteProductHelper: (_id) => Product.deleteOne(_id)
};

module.exports = helpers