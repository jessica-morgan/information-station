import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  float: left;
  bottom: 0;
  z-index: -1;
  left: 5vw;
  display: grid;
  justify-content: space-evenly;
  margin-top: 18vh;
`
export const HomeRowCol1 = styled.div`
  grid-column: 1;
  grid-row: 1;
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  text-decoration: none;
  text-align: center;
  float: left;
`

export const HomeRowCol2 = styled.div`
grid-column: 1;
grid-row: 2;
grid-auto-columns: min-content;
grid-auto-rows: min-content;
text-decoration: none;
text-align: center;
`

export const HomeRowCol3 = styled.div`
grid-column: 2;
grid-row: 1;
grid-auto-columns: min-content;
grid-auto-rows: min-content;
text-decoration: none;
text-align: center;
`

export const HomeRowCol4 = styled.div`
grid-column: 2;
grid-row: 2;
grid-auto-columns: min-content;
grid-auto-rows: min-content;
text-decoration: none;
text-align: center;
`

export const Icon = styled.img`
  width: 3.7vw;
  height: 6.3vh;
  margin-left: 0.5vw;
  opacity: 0.6;
  float: left;
`

export const Date = styled.h3`
  text-decoration: none;
  font-size: 1.3vh;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 0.5vh;
  margin-top: 3.5vh;
  color: #808080;
  margin-left: -7.6vw;
`

export const City = styled.h3`
text-decoration: none;
font-size: 4.7vh;
font-family: 'Open Sans', sans-serif;
margin-top: -1vh;
margin-left: -2.9vw;
color: #808080;
`

export const WeatherContainer = styled.div`
  width: 43vw;
  height: 23vh;
  margin-rught: 0vw; 
  margin-top: 0.5vh;
`

export const WeatherIcon = styled.img`
  width: 9vw;
  height: 12vh;
  padding-top: 2vh;
  margin-bottom: -2vh;
  margin-top: -1vh;
  opacity: 0.7;
`

export const WeatherText = styled.h3`
text-decoration: none;
font-size: 2.2vh;
font-family: 'Open Sans', sans-serif;
margin-bottom: 0.5vh;
margin-top: -5.4vh;
color: #808080;
margin-left: -3.7vw;
`
export const Temperature = styled.h3`
text-decoration: none;
font-size: 9.1vh;
font-family: 'Open Sans', sans-serif;
margin-bottom: 0.5vh;
color: #808080;
margin-top: 0vh;
margin-left: -5vw;
`

export const NavContainer = styled.div`
  width: 95%;
  position: fixed;
  text-decoration: none;
  display: grid;
  grid-gap: 0;  
  overflow: hidden;
  background: white;
  z-index: 1;
  height: 16vh;
  padding-top: 2vh;
  margin-left: 1vw;
`
export const NavCategoryContainer = styled.div`
  float: left;
  padding-left: 1.2vw;
  background: white;
  opacity: 1.0;
  grid-column: 1;
  grid-row: 1;
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  text-decoration: none;
  text-align: center;
  justify-content: space-evenly;
  height: 1vh;
  ${props => props.icon && css`
  grid-column: 1;
  grid-row: 1;
  width: 3.7vw;
  height: 6.3vh;
  opacity: 0.7;
  margin-left: 0.5vw;
  `}
  ${props => props.row1 && css`
  grid-column: 1;
  grid-row: 2;
  `}
  ${props => props.row2 && css`
  grid-column: 2;
  grid-row: 2;
  `}${props => props.row3 && css`
  grid-column: 3;
  grid-row: 2;
  `}
  ${props => props.row4 && css`
  grid-column: 4;
  grid-row: 2;
  `}
  ${props => props.row5 && css`
  grid-column: 5;
  grid-row: 2;
  `}
  ${props => props.row6 && css`
  grid-column: 6;
  grid-row: 2;
  `}
  ${props => props.row7 && css`
  grid-column: 7;
  grid-row: 2;
  `}
  ${props => props.row8 && css`
  grid-column: 8;
  grid-row: 2;
  `}
  ${props => props.row9 && css`
  grid-column: 9;
  grid-row: 2;
  `}
`

export const NavCategories = styled.h3`
text-decoration: none;
font-size: 2vh;
font-family: 'Open Sans', sans-serif;
color: #999999;
&:hover {
  color: grey;
}
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

export const APODDescriptionTitle = styled.h2`
font-family: 'Playfair Display', serif;
font-size: 2.6vh;
color: DimGray;
position: relative;
margin-bottom: 0.5vh;
margin-top: 3vh;
`
export const APODImageTitle = styled.h2`
font-family: 'Playfair Display', serif;
font-size: 4.5vh;
color: DimGray;
position: relative;
margin-top: 4vh;
margin-bottom: 5vh;
`

export const APODBodyContainer = styled.div`
font-family: 'Open Sans', sans-serif;
position: relative;
text-decoration: none;
display: block;
overflow: hidden;
bottom: 0;
z-index: -1;
`

export const APODImage = styled.img`
width: 49vw;
height: 56.5vh;
display: block;
`

export const APODDescriptionContainer = styled.div`
font-family: 'Open Sans', sans-serif;
font-size: 2.2vh;
position: relative;
text-decoration: none;
display: block;
margin-bottom: 8vh;
width: 37vw;
padding-left: 3vw;
margin-top: 3vh;
text-align: left;
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
width: 81%;
`
