import React from 'reactn'
import { selectCategory } from '../utils'
import { Link } from 'react-router-dom'
import { H3, NavLi, NavUl } from '../styles'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
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
      <NavUl>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/apod' onClick={() => selectCategory()}><H3>NASA PICTURE OF THE DAY</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/phFeed' onClick={() => selectCategory()}><H3>PROGRAMMER HUMOR</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/rjsFeed' onClick={() => selectCategory()}><H3>REACTJS</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/cgpFeed' onClick={() => selectCategory()}><H3>COOL GITHUB PROJECTS</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='jsFeed' onClick={() => selectCategory()}><H3>JAVASCRIPT</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/nzgFeed' onClick={() => selectCategory()}><H3>GENERAL NZ</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/nzstFeed' onClick={() => selectCategory()}><H3>SCIENCE AND TECHNOLOGY</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/qcFeed' onClick={() => selectCategory()}><H3>QUANTUM COMPUTING</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='/qpFeed' onClick={() => selectCategory()}><H3>QUANTUM PHYSICS</H3></Link>
        </NavLi>
        <NavLi>
          <Link style={{ textDecoration: 'none' }} to='spaceFeed' onClick={() => selectCategory()}><H3>SPACE</H3></Link>
        </NavLi>
      </NavUl>
    </nav>
    </>
    )
  }
}

export default Nav
