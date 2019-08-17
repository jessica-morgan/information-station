import React from 'react'
import { getAlienNewsFeed } from '../newsApi'

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
    getAlienNewsFeed()
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
          {this.state.alienNews.map((article, idx) => {
            return (
              <div key={idx}>
                <h1 key={article.title}>{article.title}</h1>
              </div>
            )
          })}
        </div> : <div>
        loading component
        </div>
    )
  }
}

export default AliensNewsFeed