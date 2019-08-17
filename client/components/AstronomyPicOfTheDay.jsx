import React from 'react'
import { getApod } from '../nasaApi'

class AstronomyPicOfTheDay extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ' ',
      image: ' ',
      explaination: ' ',
      date: ' '
    }
  }
  componentDidMount () {
    getApod()
      .then(apodInfo => {
        this.setState({
          title: apodInfo.title,
          image: apodInfo.url,
          explanation: apodInfo.explanation,
          date: apodInfo.date
        }
        )
      })
  }
  render () {
    return (
      this.state.title.length
        ? <div>
          <h1>{this.state.title}</h1>
          <img src={this.state.image}></img>
          <h3>{this.state.date}</h3>
          <h2>{this.state.explanation}</h2>
        </div> : <div>
        loading component
        </div>
    )
  }
}

export default AstronomyPicOfTheDay
