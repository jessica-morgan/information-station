import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'
import { NavCategories, NavContainer, NavCategoryContainer } from '../styles'
import CurrentCategoryTitle from './CurrentCategoryTitle'

const Nav = () => {
  return (
    <>
    <NavContainer>
      <NavCategoryContainer>
        <CurrentCategoryTitle/>
      </NavCategoryContainer>
      {/* <NavUl> */}
      <NavCategoryContainer row1>
        <Link style={{ textDecoration: 'none' }} to='/phFeed' onClick={() => selectCategory('Programmer Humor')}><NavCategories>PROGRAMMER HUMOR</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row2>
        <Link style={{ textDecoration: 'none' }} to='/rjsFeed' onClick={() => selectCategory('Reactjs')}><NavCategories>REACTJS</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row3>
        <Link style={{ textDecoration: 'none' }} to='/cgpFeed' onClick={() => selectCategory('Cool Github Projects')}><NavCategories>COOL GITHUB PROJECTS</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row4>
        <Link style={{ textDecoration: 'none' }} to='jsFeed' onClick={() => selectCategory('Javascript')}><NavCategories>JAVASCRIPT</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row5>
        <Link style={{ textDecoration: 'none' }} to='/nzgFeed' onClick={() => selectCategory('General NZ')}><NavCategories>GENERAL NZ</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row6>
        <Link style={{ textDecoration: 'none' }} to='/nzstFeed' onClick={() => selectCategory('Science and Technology')}><NavCategories>SCIENCE AND TECHNOLOGY</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row7>
        <Link style={{ textDecoration: 'none' }} to='/qcFeed' onClick={() => selectCategory('Quantum Computing')}><NavCategories>QUANTUM COMPUTING</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row8>
        <Link style={{ textDecoration: 'none' }} to='/qpFeed' onClick={() => selectCategory('Quantum Physics')}><NavCategories>QUANTUM PHYSICS</NavCategories></Link>
      </NavCategoryContainer>
      <NavCategoryContainer row9>
        <Link style={{ textDecoration: 'none' }} to='spaceFeed' onClick={() => selectCategory('Space')}><NavCategories>SPACE</NavCategories></Link>
      </NavCategoryContainer>
      {/* </NavUl> */}
    </NavContainer>
    </>
  )
}

export default Nav
