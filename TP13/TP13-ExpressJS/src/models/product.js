var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'item'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  imageUrl: String,
  desc: String,
}, {
  timestamps: true,
});

productSchema.index({ title: 'text' });
var product = mongoose.model('Products', productSchema);
module.exports = product;