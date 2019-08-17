import React from 'react'

import { getProgrammerHumorFeed } from '../redditApi'

// this component should display a list of programmerHumor posts (just the title)
// create seperate componet for individual posts
class ProgrammerHumorRedditFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      programmerHumorPosts: []
    }
  }
  componentDidMount () {
    getProgrammerHumorFeed()
      .then(posts => {
        this.setState({
          programmerHumorPosts: posts
        }
        )
      })
  }
  render () {
    console.log(this.state.programmerHumorPosts)
    return (
      this.state.programmerHumorPosts.length
        ? <div>
          {this.state.programmerHumorPosts.map((post, idx) => {
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

export default ProgrammerHumorRedditFeed
