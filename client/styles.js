import styled, { css } from 'styled-components'

export const NavContainer = styled.div`
  display: block;
  width: 13.5vw;
  height: auto;
  float: left;
  position: fixed;
  text-decoration: none;
  padding-left: 1vw;
`

export const NavLinkContainer = styled.div`
  display: block;
  width: 13.4vw;
  &:hover {
  background: #F7F7F7;
}
`
export const Header = styled.header`
  display: block; 
  width: 100%;
  background: #EDEDED;
  height: 10vh;
`

export const H2 = styled.h2`
  font-size: 2.8vh;
  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
  color: #999999;

`

export const H3 = styled.h3`
  font-size: 2.5vh;
  font-family: 'Open Sans', sans-serif;;
  color: #999999;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`
// when passed the 'primary' prop- <Button primary> the button will use this css
