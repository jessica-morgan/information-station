import request from 'superagent'

const programmerHumor = 'http://www.reddit.com/r/programmerHumor.json'

function getProgrammerHumor () {
  return (
    request.get(`${programmerHumor}`)
      .then(posts => {
        // console.log(posts.body.data.children)
        let postsArray = posts.body.data.children
        let postTitle = postsArray.map(post => post.data.title)
        let postBody = postsArray.map(post => post.data.selftext)
        let postImage = postsArray.map(post => post.data.url)
        // splice utc format to add . and add E+12 on the end
        // let postCreated = postsArray.map(post => post.created_utc)
        // let formatedCreatedDate = new Date(postCreated).toLocaleString()
        let postData = {
          title: postTitle,
          body: postBody,
          image: postImage
          // created: formatedCreatedDate
        }
        return postData
      })
  )
}

module.exports = { getProgrammerHumor }
