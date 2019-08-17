import React from 'react'
import { getSpaceNewsFeed } from '../newsApi'

// this component should display a list of space (just the title)
// create seperate componet for individual articles
class SpaceFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      spaceNews: []
    }
  }
  componentDidMount () {
    getSpaceNewsFeed()
      .then(articles => {
        this.setState({
          spaceNews: articles
        }
        )
      })
  }
  render () {
    return (
      this.state.spaceNews.length
        ? <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {this.state.spaceNews.map((article, idx) => {
            return (
              <div key={idx}>
                <h1 key={article.title}>{article.title}</h1>
              </div>
            )
          })}
        </div> : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
        </div>
    )
  }
}

export default SpaceFeed
