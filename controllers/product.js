const data = require('../assets/data');

function getProducts(query) {
  console.log(query)
  if(typeof(query) == 'undefined'){
    return data;
  }
  const productos = data.filter(function(producto){
    let nombre = producto["name"].toLocaleLowerCase();
    let queryF = query.toLocaleLowerCase();
    return nombre.includes(queryF);
  });
  return productos;
};

module.exports = { getProducts };
