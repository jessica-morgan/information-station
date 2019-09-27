const path = require('path')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(cors({ origin: 'http://localhost:8080' }))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/weather', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
