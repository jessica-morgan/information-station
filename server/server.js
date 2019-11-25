const path = require('path')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, '../public')))

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin: *')
  req.header('Access-Control-Request-Methods: *')
  next()
})

server.use('/api/v1/', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
