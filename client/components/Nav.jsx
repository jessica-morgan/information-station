import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'
import { H3, NavLi, NavUl } from '../styles'
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
          <Link style={{ textDecoration: 'none' }} to='/apod' onClick={() => selectCategory('Nasa Picture of the Day') }><H3>NASA PICTURE OF THE DAY</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/phFeed' onClick={() => selectCategory('Programmer Humor')}><H3>PROGRAMMER HUMOR</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/rjsFeed' onClick={() => selectCategory('Reactjs')}><H3>REACTJS</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/cgpFeed' onClick={() => selectCategory('Cool Github Projects')}><H3>COOL GITHUB PROJECTS</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='jsFeed' onClick={() => selectCategory('Javascript')}><H3>JAVASCRIPT</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/nzgFeed' onClick={() => selectCategory('General NZ')}><H3>GENERAL NZ</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/nzstFeed' onClick={() => selectCategory('Science and Technology')}><H3>SCIENCE AND TECHNOLOGY</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/qcFeed' onClick={() => selectCategory('Quantum Computing')}><H3>QUANTUM COMPUTING</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/qpFeed' onClick={() => selectCategory('Quantum Physics')}><H3>QUANTUM PHYSICS</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='spaceFeed' onClick={() => selectCategory('Space')}><H3>SPACE</H3></Link>
        </NavLi>
      </NavUl>
    </nav>
    </>
    )
  }
}

export default Nav
