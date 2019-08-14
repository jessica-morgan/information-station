import React from 'react'

import { getProgrammerHumor } from '../redditApi'

class RedditFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      programmerHumorPosts: []
    }
  }
  componentDidMount () {
    getProgrammerHumor()
      .then(posts => {
        this.setState({
          programmerHumorPosts: posts
        }
        )
      })
  }
  render () {
    // console.log(this.state.programmerHumorPosts)
    return (
      // ALL THE POST DATA NEEDS TO BE FORMATTED DIFFERENT SO TITLE BODY AND IMG FROM THE SAME POST CAN BE RENDERED TOGETHER
      this.state.programmerHumorPosts.title
        ? <div>
          {this.state.programmerHumorPosts.title.map((postTitle) => {
            return (
              <h1 key={postTitle}>{postTitle}</h1>
            )
          })}
          {/* {this.state.programmerHumorPosts.created.map((postCreated) => {
            return (
              <li key={postCreated}>{postCreated}</li>
            )
          })} */}
          {this.state.programmerHumorPosts.body.map((postBody) => {
            return (
              <li key={postBody}>{postBody}</li>
            )
          })}
          {this.state.programmerHumorPosts.image.map((imgUrl) => {
            return (
              <img key={imgUrl} src={imgUrl}></img>
            )
          })}
        </div> : <div>
          {/* loading component */}
        </div>
    )
  }
}

export default RedditFeed
