import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { categoryAction } from '../actions/category'

class Nav extends React.Component {
  render () {
    return (
      <div style={{ display: 'block', width: '20vw', height: '100%', float: 'left', position: 'fixed' }}>
        <h2>New Zealand</h2>
        <Link to='/nzgFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h2>General</h2></Link>
        <Link to='/nzstFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h2>Science and Technology</h2></Link>
        <br/>
        <h2>Reddit</h2>
        <Link to='/phFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Programmer Humor</h3></Link>
        <Link to='/rcFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Retconned</h3></Link>
        <Link to='/bsFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Is It Bullshit</h3></Link>
        <Link to='tataFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Too Afraid To Ask</h3></Link>
        <br/>
        <h2>News</h2>
        <Link to='/jsFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Javascript</h3></Link>
        <Link to='/qcFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Quantum Computing</h3></Link>
        <Link to='/qpFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Quantum Physics</h3></Link>
        <Link to='spaceFeed' onClick={() => this.props.dispatch(categoryAction(true))}><h3>Space</h3></Link>
        <br/>
        <Link to='/apod' onClick={() => this.props.dispatch(categoryAction(true))}><h2>Astronomy Picture of the Day</h2></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isCategorySelected: state.categorySelected.categoryState
  }
}

export default connect(mapStateToProps)(Nav)
