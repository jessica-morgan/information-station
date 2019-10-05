const path = require('path')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, '../public')))

server.use('https://cors-anywhere.herokuapp.com/http:localhost3000/api/v1/', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
