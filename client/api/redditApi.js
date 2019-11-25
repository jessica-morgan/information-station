import request from 'superagent'

export function getProgrammerHumorFeed () {
  return (
    request.get('http://localhost:3000/api/v1/programmerHumorFeed')
      .then(posts => {
        let newPHPostsArray = []
        posts.body.map(post => {
          newPHPostsArray.push({
            title: post.data.title,
            body: post.data.selftext,
            url: post.data.url,
            dateCreated: post.data.created_utc,
            postAuthor: post.data.author,
            likes: post.data.likes,
            link: post.data.permalink,
            upVotes: post.data.ups,
            media: post.data.media
          })
          return newPHPostsArray
        })
        return newPHPostsArray
      })
      .catch(err => {
        if (err) throw Error('Cannot get programmer humor feed')
      })
  )
}

export function getReactJsFeed () {
  return (
    request.get('http://localhost:3000/api/v1/reactJsFeed')
      .then(posts => {
        let newRjsPostsArray = []
        posts.body.map(post => {
          newRjsPostsArray.push({
            title: post.data.title,
            body: post.data.selftext,
            url: post.data.url,
            dateCreated: post.data.created_utc,
            postAuthor: post.data.author,
            likes: post.data.likes,
            link: post.data.permalink,
            upVotes: post.data.ups,
            media: post.data.media
          })
          return newRjsPostsArray
        })
        return newRjsPostsArray
      })
      .catch(err => {
        if (err) throw Error('Cannot get ReactJs feed')
      })
  )
}

export function getCoolGithubProjectsFeed () {
  return (
    request.get('http://localhost:3000/api/v1/coolGithubProjectsFeed')
      .then(
        posts => {
          let newGHPostsArray = []
          posts.body.map(post => {
            newGHPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              url: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups,
              media: post.data.media
            })
            return newGHPostsArray
          })
          return newGHPostsArray
        }
      )
      .catch(err => {
        if (err) throw Error('Cannot get cool github projects feed')
      })
  )
}

export function getJavascriptFeed () {
  return (
    request.get('http://localhost:3000/api/v1/getJavascriptFeed')
      .then(
        posts => {
          let newJSPostsArray = []
          posts.body.map(post => {
            newJSPostsArray.push({
              title: post.data.title,
              body: post.data.selftext,
              url: post.data.url,
              dateCreated: post.data.created_utc,
              postAuthor: post.data.author,
              likes: post.data.likes,
              link: post.data.permalink,
              upVotes: post.data.ups,
              media: post.data.media
            })
            return newJSPostsArray
          })
          return newJSPostsArray
        }
      )
      .catch(err => {
        if (err) throw Error('Cannot get javascript feed')
      })
  )
}
