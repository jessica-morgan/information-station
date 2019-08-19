import React, { setGlobal } from 'reactn'
import { Link } from 'react-router-dom'

const Nav = () => {
  const select = () => {
    setGlobal({
      categorySelected: true
    })
  }
  return (
    <div style={{ display: 'block', width: '20vw', height: '100%', float: 'left', position: 'fixed' }}>
      <h2>New Zealand</h2>
      <Link to='/nzgFeed' onClick={() => select()}><h2>General</h2></Link>
      <Link to='/nzstFeed' onClick={() => select()}><h2>Science and Technology</h2></Link>
      <br/>
      <h2>Reddit</h2>
      <Link to='/phFeed' onClick={() => select()}><h3>Programmer Humor</h3></Link>
      <Link to='/rcFeed' onClick={() => select()}><h3>Retconned</h3></Link>
      <Link to='/bsFeed' onClick={() => select()}><h3>Is It Bullshit</h3></Link>
      <Link to='tataFeed' onClick={() => select()}><h3>Too Afraid To Ask</h3></Link>
      <br/>
      <h2>News</h2>
      <Link to='/jsFeed' onClick={() => select()}><h3>Javascript</h3></Link>
      <Link to='/qcFeed' onClick={() => select()}><h3>Quantum Computing</h3></Link>
      <Link to='/qpFeed' onClick={() => select()}><h3>Quantum Physics</h3></Link>
      <Link to='spaceFeed' onClick={() => select()}><h3>Space</h3></Link>
      <br/>
      <Link to='/apod' onClick={() => select()}><h2>Astronomy Picture of the Day</h2></Link>
    </div>
  )
}

export default Nav
