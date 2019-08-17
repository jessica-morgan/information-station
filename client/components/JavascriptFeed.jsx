import React from 'react'
import { getJavascriptNewsFeed } from '../newsApi'

// this component should display a list of js (just the title)
// create seperate componet for individual articles
class JavascriptFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      javascriptNews: []
    }
  }
  componentDidMount () {
    getJavascriptNewsFeed()
      .then(articles => {
        this.setState({
          javascriptNews: articles
        }
        )
      })
  }
  render () {
    return (
      this.state.javascriptNews.length
        ? <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {this.state.javascriptNews.map((article, idx) => {
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

export default JavascriptFeed
