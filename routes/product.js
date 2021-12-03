var express = require('express');
var router = express.Router();
const { getProducts } = require('../controllers/product');

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  const query = req.param('q');
  const nombreBusqueda = getProducts(query);
  res.send(
    {'resp':nombreBusqueda}
  );
});

module.exports = router;
