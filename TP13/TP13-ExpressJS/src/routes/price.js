var express = require('express');
// const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middleware/authentication');
// const { } = require('../schemas');
var router = express.Router();
const priceService = require('../services/price');

// all users
router.get('/all', async (req, res) => {
  const result = await priceService.findAll()
  res.json(result)
})

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await priceService.findById(id);
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  const {price, product,source} = req.body
  const result = await priceService.create({price, product,source})
  res.json(result);
})


router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const {name, category, description} = req.body
  const {id} = req.params
  const result = await priceService.update(id, {name, category, description})
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const {id} = req.params
  const result = await priceService.remove(id);
  res.json(result);
})

module.exports = router