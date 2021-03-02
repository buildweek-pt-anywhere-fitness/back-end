const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const classesRouter = require('./classes/classes-router')
const usersRouter = require('./users/users-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/classes', classesRouter);
server.use('/api/users', usersRouter);

module.exports = server;