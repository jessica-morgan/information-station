import request from 'superagent'
import { format } from 'date-fns'

const date = format(new Date(), 'YYYY-MM')
const apiKey = '6b54422930be418da308df921864490f'
const alienArticlesApi = `https://newsapi.org/v2/everything?q=alien&from=${date}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}`
const quantumPhysicsArticlesApi = `https://newsapi.org/v2/everything?q=quantum-physics&from=${date}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}`
const quantumComputingArticlesApi = `https://newsapi.org/v2/everything?q=quantum-computing&from=${date}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}`
const javascriptArticlesApi = `https://newsapi.org/v2/everything?q=javascript&from=${date}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}`
const spaceArticlesApi = `https://newsapi.org/v2/everything?q=space&from=${date}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}`

function getAlienNewsFeed () {
  return (
    request.get(`${alienArticlesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      })
  )
}

function getQuatumPhysicsNewsFeed () {
  return (
    request.get(`${quantumPhysicsArticlesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      })
  )
}

function getQuatumComputingNewsFeed () {
  return (
    request.get(`${quantumComputingArticlesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      }

      )
  )
}

function getJavascriptNewsFeed () {
  return (
    request.get(`${javascriptArticlesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      })
  )
}

function getSpaceNewsFeed () {
  return (
    request.get(`${spaceArticlesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      })
  )
}

module.exports = {
  getAlienNewsFeed,
  getQuatumPhysicsNewsFeed,
  getQuatumComputingNewsFeed,
  getJavascriptNewsFeed,
  getSpaceNewsFeed
}
