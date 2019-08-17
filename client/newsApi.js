import request from 'superagent'
import { format } from 'date-fns'

const date = format(new Date(), 'YYYY-MM-DD')

const aliensNewsSearch = `https://newsapi.org/v2/everything?q=aliens&from=${date}&sortBy=publishedAt&apiKey=6b54422930be418da308df921864490f`

const quatumPhysicsNewsSearch = `https://newsapi.org/v2/everything?q=quantum-physics&from=${date}&sortBy=publishedAt&apiKey=6b54422930be418da308df921864490f`

const quatumComputingNewsSearch = `https://newsapi.org/v2/everything?q=quantum-computing&from=${date}&sortBy=publishedAt&apiKey=6b54422930be418da308df921864490f`

const javascriptNewsSearch = `https://newsapi.org/v2/everything?q=javascript&from=${date}&sortBy=publishedAt&apiKey=6b54422930be418da308df921864490f`

const spaceNewsSearch = `https://newsapi.org/v2/everything?q=space&from=${date}&sortBy=publishedAt&apiKey=6b54422930be418da308df921864490f`

function getAliensNewsFeed () {
  return (
    request.get(`${aliensNewsSearch}`)
      .then(
      //   posts => {
      //   let newPHPostsArray = []
      //   posts.body.data.children.map(post => {
      //     newPHPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
      //     return newPHPostsArray
      //   })
      //   return newPHPostsArray
      // }
      )
  )
}

function getQuatumPhysicsNewsFeed () {
  return (
    request.get(`${quatumPhysicsNewsSearch}`)
      .then(
      //   posts => {
      //   let newPHPostsArray = []
      //   posts.body.data.children.map(post => {
      //     newPHPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
      //     return newPHPostsArray
      //   })
      //   return newPHPostsArray
      // }
      )
  )
}

function getQuatumComputingNewsFeed () {
  return (
    request.get(`${quatumComputingNewsSearch}`)
      .then(
      //   posts => {
      //   let newPHPostsArray = []
      //   posts.body.data.children.map(post => {
      //     newPHPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
      //     return newPHPostsArray
      //   })
      //   return newPHPostsArray
      // }
      )
  )
}

function getJavascriptNewsFeed () {
  return (
    request.get(`${javascriptNewsSearch}`)
      .then(
      //   posts => {
      //   let newPHPostsArray = []
      //   posts.body.data.children.map(post => {
      //     newPHPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
      //     return newPHPostsArray
      //   })
      //   return newPHPostsArray
      // }
      )
  )
}

function getSpaceNewsFeed () {
  return (
    request.get(`${spaceNewsSearch}`)
      .then(
      //   posts => {
      //   let newPHPostsArray = []
      //   posts.body.data.children.map(post => {
      //     newPHPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
      //     return newPHPostsArray
      //   })
      //   return newPHPostsArray
      // }
      )
  )
}

module.expoerts = {
  getAliensNewsFeed,
  getQuatumPhysicsNewsFeed,
  getQuatumComputingNewsFeed,
  getSpaceNewsFeed,
  getJavascriptNewsFeed
}
