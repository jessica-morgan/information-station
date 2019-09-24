import request from 'superagent'

const programmerHumor = 'http://www.reddit.com/r/programmerHumor.json'

const reactjs = 'http://www.reddit.com/r/reactjs.json'

const coolgithubprojects = 'http://www.reddit.com/r/coolgithubprojects.json'

const javascript = 'http://www.reddit.com/r/javascript.json'

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

export function getReactJsFeed () {
  return (
    request.get(`${reactjs}`)
      .then(
        posts => {
          let newRjsPostsArray = []
          posts.body.data.children.map(post => {
            newRjsPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              image: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups
            })
            return newRjsPostsArray
          })
          return newRjsPostsArray
        }
      )
  )
}

export function getCoolGithubProjectsFeed () {
  return (
    request.get(`${coolgithubprojects}`)
      .then(
        posts => {
          let newGHPostsArray = []
          posts.body.data.children.map(post => {
            newGHPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              image: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups
            })
            return newGHPostsArray
          })
          return newGHPostsArray
        }
      )
  )
}

export function getJavascriptFeed () {
  return (
    request.get(`${javascript}`)
      .then(
        posts => {
          let newJSPostsArray = []
          posts.body.data.children.map(post => {
            newJSPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              image: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups
            })
            return newJSPostsArray
          })
          return newJSPostsArray
        }
      )
  )
}
