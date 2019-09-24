import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'
import { NavContainer, H2, H3, NavLinkContainer, Header } from '../styles'

const Nav = () => {
  return (
    <>
    <Header />
    <NavContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/apod' onClick={() => selectCategory()}><H3 style={{ marginTop: '5vh' }}>NASA Picture of the Day</H3></Link>
      </NavLinkContainer>
      <H2 style={{ marginTop: '5vh' }}>News</H2>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/nzgFeed' onClick={() => selectCategory()}><H3>General NZ</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/nzstFeed' onClick={() => selectCategory()}><H3>Science and Technology</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/qcFeed' onClick={() => selectCategory()}><H3>Quantum Computing</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/qpFeed' onClick={() => selectCategory()}><H3>Quantum Physics</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='spaceFeed' onClick={() => selectCategory()}><H3>Space</H3></Link>
      </NavLinkContainer>
      <H2 style={{ marginTop: '5vh' }}>Reddit</H2>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/phFeed' onClick={() => selectCategory()}><H3>Programmer Humor</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/rjsFeed' onClick={() => selectCategory()}><H3>Reactjs</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='/cgpFeed' onClick={() => selectCategory()}><H3>Cool github projects</H3></Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link style={{ textDecoration: 'none' }} to='jsFeed' onClick={() => selectCategory()}><H3>Javascript</H3></Link>
      </NavLinkContainer>
    </NavContainer>
    </>
  )
}

export default Nav
