import styled, { css } from 'styled-components'

export const Title = styled.h1`
font-family: 'Playfair Display', serif;
font-size: 4vh;
color: DimGray;
position: absolute;
margin-left: 4.3vw;
`

export const NavLi = styled.li`
float: left;
display: block;
display: block;
padding-left: 1.2vw;
background: white;
opacity: 1.0;
`

export const NavUl = styled.ul`
list-style-type: none;
height: 8vh;
overflow: hidden;
position: relative;
display: block;
background: white;
opacity: 1.0;
`

export const Header = styled.header`
  display: block; 
  width: 100%;
  height: 5vh;
  background-color: white;
  margin-bottom: 5vh;
  padding-top: 1vh;
  postiton: fixed;
`

export const TitlesContainer = styled.div`
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  position: relative;
  text-decoration: none;
  display: block;
  overflow: hidden;
  float: right;
  margin-top: 6.8vh;
  bottom: 0;
  z-index: -1;
  left: 2vw;
`

export const FeedTitles = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.7vh;
  padding-bottom: 1.2vh;
  color: #696969;
`

export const SinglePostTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 4.5vh;
  color: DimGray;
  position: arelative;
  margin-left: 25vw;
`

export const PostBodyContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 2.7vh;
  position: relative;
  text-decoration: none;
  display: block;
  width: 59vw;
  margin-left: 17vw;
  margin-bottom: 5vh;
`

export const PostImageContainer = styled.img`
  width: 50vw;
  height: 65vh;
  display: block;
  margin-left: 21.2vw;
`

export const H2 = styled.h2`
  font-size: 2.8vh;
  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
  color: #999999;
`

export const H3 = styled.h3`
  font-size: 1.9vh;
  font-family: 'Open Sans', sans-serif;
  color: #999999;
  &:hover {
    color: grey;
  }
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
