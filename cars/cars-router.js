const express = require('express')

const db = require('../data/config')

const router = express.Router()

router.get('/cars', async (req, res, next) => {
  try {
    const cars = await db('cars')
res.json(cars)
  } catch(err) {
    next(err)
  }
})

router.post('/cars', async (req, res, next) => {
  try {
const [id] = await db('cars').insert(req.body)
const newCar = await db('cars').where({id}).first()

res.status(201).json(newCar)
  } catch(err) {
    next(err)
  }
})

module.exports = router