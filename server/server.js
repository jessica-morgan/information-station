const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors({ origin: 'http://localhost:8080' }))
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
