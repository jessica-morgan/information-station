import request from 'superagent'

const programmerHumor = 'http://www.reddit.com/r/programmerHumor.json'

const retconned = 'http://www.reddit.com/r/Retconned.json'

const isItBullshit = 'http://www.reddit.com/r/IsItBullshit.json'

const tooAfraidToAsk = 'http://www.reddit.com/r/TooAfraidToAsk.json'

function getProgrammerHumorFeed () {
  return (
    request.get(`${programmerHumor}`)
      .then(posts => {
        let newPHPostsArray = []
        posts.body.data.children.map(post => {
          newPHPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
          return newPHPostsArray
        })
        return newPHPostsArray
      })
  )
}

function getRetconnedFeed () {
  return (
    request.get(`${retconned}`)
      .then(
        posts => {
          let newRetPostsArray = []
          posts.body.data.children.map(post => {
            newRetPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
            return newRetPostsArray
          })
          return newRetPostsArray
        }
      )
  )
}

function getIsItBullshitFeed () {
  return (
    request.get(`${isItBullshit}`)
      .then(
        posts => {
          let newBSPostsArray = []
          posts.body.data.children.map(post => {
            newBSPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
            return newBSPostsArray
          })
          return newBSPostsArray
        }
      )
  )
}

function getTooAfraidFeed () {
  return (
    request.get(`${tooAfraidToAsk}`)
      .then(
        posts => {
          let newTATAPostsArray = []
          posts.body.data.children.map(post => {
            newTATAPostsArray.push({ title: post.data.title, body: post.data.selftext, image: post.data.url })
            return newTATAPostsArray
          })
          return newTATAPostsArray
        }
      )
  )
}

module.exports = {
  getProgrammerHumorFeed,
  getRetconnedFeed,
  getIsItBullshitFeed,
  getTooAfraidFeed
}