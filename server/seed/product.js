const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  typeOfDisease: String,
  name: String,
  mecanism: String,
  indication: String,
	stage: Number,
});

const Product = model('Product', productSchema)
module.exports = Product
