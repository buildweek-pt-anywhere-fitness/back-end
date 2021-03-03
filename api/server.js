const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const classesRouter = require('./classes/classes-router')
const usersRouter = require('./users/users-router')
const cookieParser = require("cookie-parser")


const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(cookieParser())

server.use('/api/classes', classesRouter);
server.use('/api/users', usersRouter);

module.exports = server;