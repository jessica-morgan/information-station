import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'
import { H3, NavLi, NavUl, NavCategories } from '../styles'
import CurrentCategoryTitle from './CurrentCategoryTitle'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  componentDidMount () {
    const el = document.querySelector('nav')
    this.setState({ top: el.offsetTop, height: el.offsetHeight })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate () {
    this.state.scroll > this.state.top
      ? document.body.style.paddingTop = `${this.state.height}px`
      : document.body.style.paddingTop = 0
  }

  render () {
    return (
    <>
    <nav className={this.state.scroll > this.state.top ? 'nav-container-onscroll' : 'nav-container'}>
      <CurrentCategoryTitle/>
      <NavUl>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/apod' onClick={() => selectCategory('Nasa Picture of the Day') }><NavCategories>NASA PICTURE OF THE DAY</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/phFeed' onClick={() => selectCategory('Programmer Humor')}><NavCategories>PROGRAMMER HUMOR</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/rjsFeed' onClick={() => selectCategory('Reactjs')}><NavCategories>REACTJS</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/cgpFeed' onClick={() => selectCategory('Cool Github Projects')}><NavCategories>COOL GITHUB PROJECTS</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='jsFeed' onClick={() => selectCategory('Javascript')}><NavCategories>JAVASCRIPT</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/nzgFeed' onClick={() => selectCategory('General NZ')}><NavCategories>GENERAL NZ</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/nzstFeed' onClick={() => selectCategory('Science and Technology')}><NavCategories>SCIENCE AND TECHNOLOGY</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/qcFeed' onClick={() => selectCategory('Quantum Computing')}><NavCategories>QUANTUM COMPUTING</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/qpFeed' onClick={() => selectCategory('Quantum Physics')}><NavCategories>QUANTUM PHYSICS</NavCategories></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='spaceFeed' onClick={() => selectCategory('Space')}><NavCategories>SPACE</NavCategories></Link>
        </NavLi>
      </NavUl>
    </nav>
    </>
    )
  }
}

export default Nav
