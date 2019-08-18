import React from 'react'
import { getNZScienceTechnologyHeadlines } from '../api/newsApi'

class NZScienceTechnologyFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nzHeadlines: []
    }
  }
  componentDidMount () {
    getNZScienceTechnologyHeadlines()
      .then(headlines => {
        this.setState({
          nzHeadlines: headlines
        }
        )
      })
  }
  render () {
    return (
      this.state.nzHeadlines.length
        ? <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
          {this.state.nzHeadlines.map((headline, idx) => {
            return (
              <div key={idx}>
                <h1 key={headline.title}>{headline.title}</h1>
              </div>
            )
          })}
        </div> : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
        </div>
    )
  }
}

export default NZScienceTechnologyFeed
