import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{ display: 'block', width: '20vw', height: '100%', float: 'left', position: 'fixed' }}>
      <h2>New Zealand</h2>
      <Link to='/nzgFeed' onClick={() => selectCategory()}><h2>General</h2></Link>
      <Link to='/nzstFeed' onClick={() => selectCategory()}><h2>Science and Technology</h2></Link>
      <br/>
      <h2>Reddit</h2>
      <Link to='/phFeed' onClick={() => selectCategory()}><h3>Programmer Humor</h3></Link>
      <Link to='/rcFeed' onClick={() => selectCategory()}><h3>Retconned</h3></Link>
      <Link to='/bsFeed' onClick={() => selectCategory()}><h3>Is It Bullshit</h3></Link>
      <Link to='tataFeed' onClick={() => selectCategory()}><h3>Too Afraid To Ask</h3></Link>
      <br/>
      <h2>News</h2>
      <Link to='/jsFeed' onClick={() => selectCategory()}><h3>Javascript</h3></Link>
      <Link to='/qcFeed' onClick={() => selectCategory()}><h3>Quantum Computing</h3></Link>
      <Link to='/qpFeed' onClick={() => selectCategory()}><h3>Quantum Physics</h3></Link>
      <Link to='spaceFeed' onClick={() => selectCategory()}><h3>Space</h3></Link>
      <br/>
      <Link to='/apod' onClick={() => selectCategory()}><h2>Astronomy Picture of the Day</h2></Link>
    </div>
  )
}

export default Nav
