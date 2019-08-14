const path = require('path')
const express = require('express')

const server = express()

const redditRoutes = require('./redditApi')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)

module.exports = server
