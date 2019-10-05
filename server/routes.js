const express = require('express')
const router = express.Router()
const request = require('superagent')
const { format } = require('date-fns')

const dateMonthYear = format(new Date(), 'yyyy-mm')
const dateToday = format(new Date(), 'yyyy-mm-dd')
const apiKey = '6b54422930be418da308df921864490f'
const quantumPhysicsArticlesApi = `https://newsapi.org/v2/everything?q=quantum-physics&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const quantumComputingArticlesApi = `https://newsapi.org/v2/everything?q=quantum-computing&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const spaceArticlesApi = `https://newsapi.org/v2/everything?q=space&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const nzGeneralHeadlinesApi = `https://newsapi.org/v2/top-headlines?country=nz&from=${dateToday}&pageSize=30&sortBy=publishedAt&apiKey=${apiKey}&language=en&category=general`
const programmerHumor = 'https://cors-anywhere.herokuapp.com/http://www.reddit.com/r/programmerHumor.json'
const reactjs = 'http://www.reddit.com/r/reactjs.json'
const coolgithubprojects = 'http://www.reddit.com/r/coolgithubprojects.json'
const javascript = 'http://www.reddit.com/r/javascript.json'

router.get('/weather', (req, res) => {
  return request
    .get('https://api.darksky.net/forecast/7c8a38acd35ed9c1c20e9fed491f1036/-36.86667,174.76667')
    .then(weather => {
      res.send(weather.body.currently)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/quatumPhysicsNews', (req, res) => {
  return request
    .get(`${quantumPhysicsArticlesApi}`)
    .then(response => {
      res.send(response.body.articles)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/quatumComputingNews', (req, res) => {
  return request
    .get(`${quantumComputingArticlesApi}`)
    .then(response => {
      res.send(response.body.articles)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/spaceNews', (req, res) => {
  return request
    .get(`${spaceArticlesApi}`)
    .then(response => {
      res.send(response.body.articles)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/NZGeneralHeadlines', (req, res) => {
  return request
    .get(`${nzGeneralHeadlinesApi}`)
    .then(response => {
      res.send(response.body.articles)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/programmerHumorFeed', (req, res) => {
  return request
    .get(`${programmerHumor}`)
    .then(response => {
      res.send(response.body.data.children)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/reactJsFeed', (req, res) => {
  return request
    .get(`${reactjs}`)
    .then(response => {
      res.send(response.body.data.children)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/coolGithubProjectsFeed', (req, res) => {
  return request
    .get(`${coolgithubprojects}`)
    .then(response => {
      res.send(response.body.data.children)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/getJavascriptFeed', (req, res) => {
  return request
    .get(`${javascript}`)
    .then(response => {
      res.send(response.body.data.children)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
