const Products = require("../models/product")
const mongoose = require('mongoose')

const findById = async (_id) => {
  try {
    const products = await Products.aggregate([
      {
        "$match": {_id: new mongoose.Types.ObjectId(_id)}
      },
      {
        $lookup: {
          from: "prices",
          localField: "_id",
          foreignField: "product",
          as: "prices"
        },
  
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category"
        },
      },
      {
  
        $lookup: {
          from: "items",
          localField: "item",
          foreignField: "_id",
          as: "item"
        }
      },
      { "$unwind": "$category" },
      { "$unwind": "$item" },
    ])
  
    // if (!products?.length)
    //   return []
    return products
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const findAll = async (category = '', item = '') => {
  let matchCond = {};
  console.log(category);
  if(category) matchCond['category'] = new mongoose.Types.ObjectId(category)
  if(item) matchCond['item'] = new mongoose.Types.ObjectId(item)
  console.log(matchCond);
  const products = await Products.aggregate([
    {
      "$match": matchCond
    },
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      },

    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category"
      },
    },
    {

      $lookup: {
        from: "items",
        localField: "item",
        foreignField: "_id",
        as: "item"
      }
    },
    { "$unwind": "$category" },
    { "$unwind": "$item" },
  ])

  if (!products?.length)
    return []

  return products
}

const create = async (newProduct,file) => {
  try {
    const {title, price,category,item,desc} = newProduct
    console.log(file);
    if(file){
      var imageUrl = file;
    }else{
      var imageUrl ='';
    }
    const new_data = {
      title: title,
      price: price,
      category : category,
      desc: desc,
      imageUrl:imageUrl,
      item:item
    }
    const product = await Products.create(new_data)

    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const update = async (id, newProduct) => {
  try {
    const product = await Products.findById(id)
    product.title = newProduct.title
    product.price = newProduct.price
    product.category = newProduct.category
    product.item = newProduct.item
    product.user = newProduct.user
    product.title = newProduct.title
    await product.save()
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const remove = async (id) => {
  try{
    await Products.deleteOne({_id:id})
    return {
      success : true,
      data : "product deleted"
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}