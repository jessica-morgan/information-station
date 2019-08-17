import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { categoryAction } from '../actions/category'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div style={{ display: 'block', width: '20vw', height: '100%', float: 'left', position: 'fixed' }}>
        <h2>Reddit</h2>
        <Link to='/phFeed' onClick={() => { this.props.dispatch(categoryAction('programmerHumor')) }}><h3>Programmer Humor</h3></Link>
        <Link to='/rcFeed' onClick={() => { this.props.dispatch(categoryAction('retconned')) }}><h3>Retconned</h3></Link>
        <Link to='/bsFeed' onClick={() => { this.props.dispatch(categoryAction('itbs')) }}><h3>Is It Bullshit</h3></Link>
        <Link to='tataFeed' onClick={() => { this.props.dispatch(categoryAction('tooAfraidToAsk')) }}><h3>Too Afraid To Ask</h3></Link>
        <br/>
        <h2>News</h2>
        <Link to='/jsFeed' onClick={() => { this.props.dispatch(categoryAction('javascript')) }}><h3>Javascript</h3></Link>
        <Link to='/qcFeed' onClick={() => { this.props.dispatch(categoryAction('quantumComputing')) }}><h3>Quantum Computing</h3></Link>
        <Link to='/qpFeed' onClick={() => { this.props.dispatch(categoryAction('quantumPhysics')) }}><h3>Quantum Physics</h3></Link>
        <Link to='spaceFeed' onClick={() => { this.props.dispatch(categoryAction('space')) }}><h3>Space</h3></Link>
        <br/>
        <Link to='/apod' onClick={() => { this.props.dispatch(categoryAction('astronomyPicture')) }}><h2>Astronomy Picture of the Day</h2></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categorySelected: state.selectedCategory.categoryState
  }
}

export default connect(mapStateToProps)(Nav)
