import request from 'superagent'
import { format } from 'date-fns'

const dateMonthYear = format(new Date(), 'YYYY-MM')
const dateToday = format(new Date(), 'YYYY-MM-DD')
const apiKey = '6b54422930be418da308df921864490f'
const quantumPhysicsArticlesApi = `https://newsapi.org/v2/everything?q=quantum-physics&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const quantumComputingArticlesApi = `https://newsapi.org/v2/everything?q=quantum-computing&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const javascriptArticlesApi = `https://newsapi.org/v2/everything?q=javascript&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const spaceArticlesApi = `https://newsapi.org/v2/everything?q=space&from=${dateMonthYear}&pageSize=30&sortBy=publishedAt&language=en&apiKey=${apiKey}`
const nzScienceTechnologyHeadlinesApi = `https://newsapi.org/v2/top-headlines?country=nz&from=${dateToday}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}&language=en&category=science&technology`
const nzGeneralHeadlinesApi = `https://newsapi.org/v2/top-headlines?country=nz&from=${dateToday}&pageSize=50&sortBy=publishedAt&apiKey=${apiKey}&language=en&category=general`

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

function getNZScienceTechnologyHeadlines () {
  return (
    request.get(`${nzScienceTechnologyHeadlinesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      })
  )
}

function getNZGeneralHeadlines () {
  return (
    request.get(`${nzGeneralHeadlinesApi}`)
      .then(res => {
        console.log(res.body.articles)
        return res.body.articles
      })
  )
}

module.exports = {
  getQuatumPhysicsNewsFeed,
  getQuatumComputingNewsFeed,
  getJavascriptNewsFeed,
  getSpaceNewsFeed,
  getNZScienceTechnologyHeadlines,
  getNZGeneralHeadlines
}
