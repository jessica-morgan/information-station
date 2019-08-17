import React from 'react'
import { Route } from 'react-router-dom'
import TitleList from './TitleList'
import Welcome from './Welcome'
import Nav from './Nav'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categorySelected: false
    }
  }

  render () {
    return (
      this.state.categorySelected
        ? <div>
          <Nav />
          <div>
            <TitleList />
          </div>
        </div>
        : <div>
          <Nav />
          <div>
            <Welcome />
          </div>
        </div>

    )
  }
}

export default App
