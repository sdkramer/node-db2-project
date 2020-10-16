const express = require('express')
const helmet = require('helmet')
const welcomeRouter = require('./welcome/welcome-router')
const carsRouter = require('./cars/cars-router')

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())


server.use(welcomeRouter)
server.use(carsRouter)

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})