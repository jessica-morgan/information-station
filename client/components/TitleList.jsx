import React from 'react'
import { connect } from 'react-redux'
import ProgrammerHumorRedditFeed from './ProgrammerHumorRedditFeed'
import RetconnedRedditFeed from './RetconnedRedditFeed'
import IsItBullshitRedditFeed from './IsItBullshitRedditFeed'
import TooAfraidToAskRedditFeed from './TooAfraidToAskFeed'
import QuantumPhysicsFeed from './QuantumPhysicsFeed'
import QuantumComputingFeed from './QuantumComputingFeed'
import JavascriptFeed from './JavascriptFeed'
import SpaceFeed from './SpaceFeed'
import AstronomyPicOfTheDay from './AstronomyPicOfTheDay'

class TitleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const category = this.props.categorySelected
    return (
      
    )
  }
}

function mapStateToProps (state) {
  return {
    categorySelected: state.selectedCategory.categoryState
  }
}

export default connect(mapStateToProps)(TitleList)
