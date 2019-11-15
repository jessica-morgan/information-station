import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'
import { NavContainer, NavCategoryContainer } from '../styles'
import CurrentCategoryTitle from './CurrentCategoryTitle'

const Nav = () => {
  return (
    <>
    <NavContainer>
      <NavCategoryContainer>
        <CurrentCategoryTitle/>
      </NavCategoryContainer>
      <NavCategoryContainer row1>
        <Link style={{ textDecoration: 'none' }} to='/phFeed' onClick={() => selectCategory('Programmer Humor')}><NavCategoryContainer title="true">PROGRAMMER HUMOR</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row2>
        <Link style={{ textDecoration: 'none' }} to='/rjsFeed' onClick={() => selectCategory('Reactjs')}><NavCategoryContainer title="true">REACTJS</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row3>
        <Link style={{ textDecoration: 'none' }} to='/cgpFeed' onClick={() => selectCategory('Cool Github Projects')}><NavCategoryContainer title="true">COOL GITHUB PROJECTS</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row4>
        <Link style={{ textDecoration: 'none' }} to='jsFeed' onClick={() => selectCategory('Javascript')}><NavCategoryContainer title="true">JAVASCRIPT</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row5>
        <Link style={{ textDecoration: 'none' }} to='/nzgFeed' onClick={() => selectCategory('General NZ')}><NavCategoryContainer title="true">GENERAL NZ</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row6>
        <Link style={{ textDecoration: 'none' }} to='/qcFeed' onClick={() => selectCategory('Quantum Computing')}><NavCategoryContainer title="true">QUANTUM COMPUTING</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row7>
        <Link style={{ textDecoration: 'none' }} to='/qpFeed' onClick={() => selectCategory('Quantum Physics')}><NavCategoryContainer title="true">QUANTUM PHYSICS</NavCategoryContainer ></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row8>
        <Link style={{ textDecoration: 'none' }} to='spaceFeed' onClick={() => selectCategory('Space')}><NavCategoryContainer title="true">SPACE</NavCategoryContainer ></Link>
      </NavCategoryContainer>
    </NavContainer>
    </>
  )
}

export default Nav
