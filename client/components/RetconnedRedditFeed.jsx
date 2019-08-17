import React from 'react'

import { getRetconnedFeed } from '../redditApi'

// this component should display a list of retconned posts (just the title)
// create seperate componet for individual posts
class RetconnedRedditFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      retconnedPosts: []
    }
  }
  componentDidMount () {
    getRetconnedFeed()
      .then(posts => {
        this.setState({
          retconnedPosts: posts
        }
        )
      })
  }
  render () {
    console.log(this.state.retconnedPosts)
    return (
      this.state.retconnedPosts.length
        ? <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {this.state.retconnedPosts.map((post, idx) => {
            return (
              <div key={idx}>
                <h1 key={post.title}>{post.title}</h1>
                {/* {post.body.length ? <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
              </div>
            )
          })}
        </div > : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {/* loading component */}
        </div>
    )
  }
}

export default RetconnedRedditFeed
