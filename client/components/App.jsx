import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Nav from './Nav'
import ProgrammerHumorRedditFeed from './ProgrammerHumorRedditFeed'
import RetconnedRedditFeed from './RetconnedRedditFeed'
import IsItBullshitRedditFeed from './IsItBullshitRedditFeed'
import TooAfraidToAskRedditFeed from './TooAfraidToAskFeed'
import QuantumPhysicsFeed from './QuantumPhysicsFeed'
import QuantumComputingFeed from './QuantumComputingFeed'
import JavascriptFeed from './JavascriptFeed'
import SpaceFeed from './SpaceFeed'
import AstronomyPicOfTheDay from './AstronomyPicOfTheDay'
import NZScienceTechnologyFeed from './NZScienceTechnologyFeed'
import NZGeneralFeed from './NZGeneralFeed'

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        {this.props.isCategorySelected
          ? <div>
            <Route path='/phFeed' component={ProgrammerHumorRedditFeed} />
            <Route path='/rcFeed' component={RetconnedRedditFeed} />
            <Route path='/bsFeed' component={IsItBullshitRedditFeed} />
            <Route path='/tataFeed' component={TooAfraidToAskRedditFeed} />
            <Route path='/qpFeed' component={QuantumPhysicsFeed} />
            <Route path='/qcFeed' component={QuantumComputingFeed} />
            <Route path='/jsFeed' component={JavascriptFeed} />
            <Route path='/spaceFeed' component={SpaceFeed} />
            <Route path='/apod' component={AstronomyPicOfTheDay} />
            <Route path='/nzstFeed' component={NZScienceTechnologyFeed} />
            <Route path='/nzgFeed' component={NZGeneralFeed} />

          </div>
          : <div>
            <Welcome />
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isCategorySelected: state.categorySelected.categoryState
  }
}

export default connect(mapStateToProps)(App)
