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
  res.header('Access-Control-Allow-Headers: *')
  res.header('Access-Control-Allow-Methods: *')
  res.header('Access-Control-Allow-Credentials: true')
  req.header('Access-Control-Request-Headers: origin, content-type, accept')
  req.header('Access-Control-Request-Methods: *')
  res.header('Access-Control-Max-Age: 1728000')
  next()
})

server.use('/api/v1/', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
