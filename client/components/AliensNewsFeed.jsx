import React from 'react'
import { getAliensNewsFeed } from '../newsApi'

// this component should display a list of alien articles (just the title)
// create seperate componet for individual articles
class AliensNewsFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      alienNews: []
    }
  }
  componentDidMount () {
    getAliensNewsFeed()
      .then(articles => {
        this.setState({
          alienNews: articles
        }
        )
      })
  }
  render () {
    return (
      this.state.alienNews.length
        ? <div>
          {this.state.alienNews.map((post, idx) => {
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

export default AliensNewsFeed
