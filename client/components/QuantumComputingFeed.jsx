import React from 'react'
import { getQuatumComputingNewsFeed } from '../newsApi'

// this component should display a list of q-c (just the title)
// create seperate componet for individual articles
class QuantumComputingFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quantumComputingNews: []
    }
  }
  componentDidMount () {
    getQuatumComputingNewsFeed()
      .then(articles => {
        this.setState({
          quantumComputingNews: articles
        }
        )
      })
  }
  render () {
    return (
      this.state.quantumComputingNews.length
        ? <div>
          {this.state.quantumComputingNews.map((article, idx) => {
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

export default QuantumComputingFeed
