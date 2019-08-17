import React from 'react'
import { getQuatumPhysicsNewsFeed } from '../newsApi'

// this component should display a list of q-p (just the title)
// create seperate componet for individual articles
class QuantumPhysicsFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quantumPhysicsNews: []
    }
  }
  componentDidMount () {
    getQuatumPhysicsNewsFeed()
      .then(articles => {
        this.setState({
          quantumPhysicsNews: articles
        }
        )
      })
  }
  render () {
    return (
      this.state.quantumPhysicsNews.length
        ? <div>
          {this.state.quantumPhysicsNews.map((article, idx) => {
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

export default QuantumPhysicsFeed