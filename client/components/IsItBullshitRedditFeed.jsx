import React from 'react'
import { getIsItBullshitFeed } from '../redditApi'

// this component should display a list of itbs posts (just the title)
// create seperate componet for individual posts
class IsItBullshitRedditFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isItBullshitPosts: []
    }
  }
  componentDidMount () {
    getIsItBullshitFeed()
      .then(posts => {
        this.setState({
          isItBullshitPosts: posts
        }
        )
      })
  }
  render () {
    return (
      this.state.isItBullshitPosts.length
        ? <div>
          {this.state.isItBullshitPosts.map((post, idx) => {
            return (
              <div key={idx}>
                <h1 key={post.title}>{post.title}</h1>
                {/* {post.body.length ? <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
              </div>
            )
          })}
        </div> : <div>
          {/* loading component */}
        </div>
    )
  }
}

export default IsItBullshitRedditFeed
