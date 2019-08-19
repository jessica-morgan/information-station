import React from 'react'
import { setGlobal } from 'reactn'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{ display: 'block', width: '20vw', height: '100%', float: 'left', position: 'fixed' }}>
      <h2>New Zealand</h2>
      <Link to='/nzgFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h2>General</h2></Link>
      <Link to='/nzstFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h2>Science and Technology</h2></Link>
      <br/>
      <h2>Reddit</h2>
      <Link to='/phFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Programmer Humor</h3></Link>
      <Link to='/rcFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Retconned</h3></Link>
      <Link to='/bsFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Is It Bullshit</h3></Link>
      <Link to='tataFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Too Afraid To Ask</h3></Link>
      <br/>
      <h2>News</h2>
      <Link to='/jsFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Javascript</h3></Link>
      <Link to='/qcFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Quantum Computing</h3></Link>
      <Link to='/qpFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Quantum Physics</h3></Link>
      <Link to='spaceFeed' onClick={() => setGlobal({ isCategorySelected: true })}><h3>Space</h3></Link>
      <br/>
      <Link to='/apod' onClick={() => setGlobal({ isCategorySelected: true })}><h2>Astronomy Picture of the Day</h2></Link>
    </div>
  )
}

export default Nav
