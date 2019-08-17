import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div>
    <h2>Reddit</h2>
    <Link to='/phFeed'><h3>Programmer Humor</h3></Link>
    <Link to='/rcFeed'><h3>Retconned</h3></Link>
    <Link to='/bsFeed'><h3>Is It Bullshit</h3></Link>
    <Link to='tataFeed'><h3>Too Afraid To Ask</h3></Link>
    <br/>
    <h2>News</h2>
    <Link to='/jsFeed'><h3>Javascript</h3></Link>
    <Link to='/qcFeed'><h3>Quantum Computing</h3></Link>
    <Link to='/qpFeed'><h3>Quantum Physics</h3></Link>
    <Link to='spaceFeed'><h3>Space</h3></Link>
    <br/>
    <Link to='/apod'><h2>Astronomy Picture of the Day</h2></Link>
  </div>
)

export default Nav
