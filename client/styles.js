import styled, { css } from 'styled-components'

export const Icon = styled.img`
  width: 3.7vw;
  height: 6.3vh;
  margin-left: 4vw;
  opacity: 0.7;
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
margin-top: 0.5vh;
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
  margin-top: 9vh;
  bottom: 0;
  z-index: -1;
`

export const FeedTitles = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.7vh;
  padding-bottom: 0.5vh;
  color: #696969;
  padding-left: 4vw;
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
export const NavCategories = styled.h3`
text-decoration: none;
font-size: 1.9vh;
font-family: 'Open Sans', sans-serif;
color: #999999;
&:hover {
  color: grey;
}
`

export const H2 = styled.h2`
  margin-top: 0.1vh;
  margin-bottom: 1vh;
  text-decoration: none;
  font-size: 2.2vh;
  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
  color: #707070;
`

export const H3 = styled.h3`
  text-decoration: none;
  font-size: 1.9vh;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 0.5vh;
  margin-top: 3.5vh;
  color: #808080;
  &:hover {
    color: grey;
  }
`

export const Hr = styled.hr`
border-width: 0.5px;
opacity: 90%;
margin-right: 4.8vw;
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
