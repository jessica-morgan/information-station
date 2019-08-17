import React from 'react'

import { getTooAfraidFeed } from '../redditApi'

// this component should display a list of tata posts (just the title)
// create seperate componet for individual posts
class TooAfraidToAskRedditFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tataPosts: []
    }
  }
  componentDidMount () {
    getTooAfraidFeed()
      .then(posts => {
        this.setState({
          tataPosts: posts
        }
        )
      })
  }
  render () {
    return (
      this.state.tataPosts.length
        ? <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {this.state.tataPosts.map((post, idx) => {
            return (
              <div key={idx}>
                <h1 key={post.title}>{post.title}</h1>
                {/* {post.body.length ? <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
              </div>
            )
          })}
        </div> : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {/* loading component */}
        </div>
    )
  }
}

export default TooAfraidToAskRedditFeed
