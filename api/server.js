const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/', (req, res) => {
    res.json({ message: "Welcome to the Anywhere Fitness API" })
})

module.exports = server;