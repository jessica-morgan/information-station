import request from 'superagent'

const programmerHumor = 'http://www.reddit.com/r/programmerHumor.json'

const retconned = 'http://www.reddit.com/r/Retconned.json'

const isItBullshit = 'http://www.reddit.com/r/IsItBullshit.json'

const tooAfraidToAsk = 'http://www.reddit.com/r/TooAfraidToAsk.json'

export function getProgrammerHumorFeed () {
  return (
    request.get(`${programmerHumor}`)
      .then(posts => {
        let newPHPostsArray = []
        posts.body.data.children.map(post => {
          newPHPostsArray.push({
            title: post.data.title,
            body: post.data.selftext,
            image: post.data.url,
            dateCreated: post.data.created_utc,
            postAuthor: post.data.author,
            likes: post.data.likes,
            link: post.data.permalink,
            upVotes: post.data.ups
          })
          return newPHPostsArray
        })
        return newPHPostsArray
      })
  )
}

export function getRetconnedFeed () {
  return (
    request.get(`${retconned}`)
      .then(
        posts => {
          let newRetPostsArray = []
          posts.body.data.children.map(post => {
            newRetPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              image: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups
            })
            return newRetPostsArray
          })
          return newRetPostsArray
        }
      )
  )
}

export function getIsItBullshitFeed () {
  return (
    request.get(`${isItBullshit}`)
      .then(
        posts => {
          let newBSPostsArray = []
          posts.body.data.children.map(post => {
            newBSPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              image: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups
            })
            return newBSPostsArray
          })
          return newBSPostsArray
        }
      )
  )
}

export function getTooAfraidFeed () {
  return (
    request.get(`${tooAfraidToAsk}`)
      .then(
        posts => {
          let newTATAPostsArray = []
          posts.body.data.children.map(post => {
            newTATAPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              image: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups
            })
            return newTATAPostsArray
          })
          return newTATAPostsArray
        }
      )
  )
}
