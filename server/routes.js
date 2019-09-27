const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/', (req, res) => {
  return request
    .get('https://api.darksky.net/forecast/7c8a38acd35ed9c1c20e9fed491f1036/-36.86667,174.76667')
    .then(weather => {
      res.send(weather.body.currently)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
