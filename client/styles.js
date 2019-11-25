import styled, { css } from 'styled-components'

// Home page styles
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
  display: grid;
  ${props => props.APODBodyContainer && css`
  font-family: 'Open Sans', sans-serif;
  position: relative;
  text-decoration: none;
  display: block;
  overflow: hidden;
  bottom: 0;
  z-index: -1;
  `}
  ${props => props.APODImageTitle && css`
  font-family: 'Playfair Display', serif;
  font-size: 3vw;
  color: DimGray;
  position: relative;
  margin-top: 4vh;
  margin-bottom: 5vh;
  display: block;
  float: none;
  `}
`

export const HomeRowCol2 = styled.div`
  grid-column: 2;
  grid-row: 1;
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  text-decoration: none;
  text-align: center;
${props => props.APODDescriptionContainer && css`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1vw;
  position: relative;
  text-decoration: none;
  display: block;
  margin-bottom: 8vh;
  width: 37vw;
  padding-left: 4vw;
  margin-top: 3vh;
  text-align: left;
`}
${props => props.APODDescriptionTitle && css`
  font-family: 'Playfair Display', serif;
  font-size: 2vw;
  color: DimGray;
  position: relative;
  margin-bottom: 1.5vh;
  margin-top: 3vh;
`}
`
export const APODImage = styled.img`
  width: 49vw;
  height: 59vh;
  display: block;
`

export const APODVideo = styled.iframe`
  width: 49vw;
  height: 59vh;
  display: block;
  border: 0;
`

// weather styles
export const WeatherContainer = styled.div`
  width: 41.5vw;
  height: 16vh;
  margin-top: 1.5vh;
`

export const Temperature = styled.h3`
  text-decoration: none;
  font-size: 5vw;
  font-family: 'Open Sans', sans-serif;
  color: #808080;
  margin-top: 0vh;
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
  margin-left: 19.9vw;
`

export const WeatherHr = styled.hr`
  border-width: 0.5px;
  opacity: 90%;
  margin-right: 2vw;
  width: 85.3%;
`

// Nav bar styles
export const Icon = styled.img`
  width: 3.7vw;
  height: 6.3vh;
  margin-left: 0.5vw;
  opacity: 0.6;
  float: left;
  padding-left: 0.5vw;
`
export const NavContainer = styled.div`
  width: 101vw;
  position: fixed;
  text-decoration: none;
  display: grid;
  grid-gap: 0;  
  overflow: hidden;
  background: white;
  z-index: 1;
  height: 16vh;
  padding-top: 2vh;
  margin-left: -1vw;
  box-shadow: 0.2vh 0.2vh 1vh lightgrey;
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
  opacity: 0.4;
  margin-left: 0.5vw;
  `}
  ${props => props.row1 && css`
  grid-column: 1;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row2 && css`
  grid-column: 2;
  grid-row: 2;
  margin-top: 3vh;
  `}${props => props.row3 && css`
  grid-column: 3;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row4 && css`
  grid-column: 4;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row5 && css`
  grid-column: 5;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row6 && css`
  grid-column: 6;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row7 && css`
  grid-column: 7;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row8 && css`
  grid-column: 8;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.row9 && css`
  grid-column: 9;
  grid-row: 2;
  margin-top: 3vh;
  `}
  ${props => props.title && css`
  text-decoration: none;
  font-size: 1.1vw;
  font-family: 'Open Sans', sans-serif;
  color: #626262;
  &:hover {
    color: grey;
  }
  `}
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

// news feed styles
export const TitlesContainer = styled.div`
  width: 100vw;
  font-family: 'Open Sans', sans-serif;
  position: relative;
  text-decoration: none;
  display: grid;
  overflow: hidden;
  float: right;
  margin-top: 18vh;
  z-index: -1;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  padding-top: 8vh;
  padding-bottom: 8vh;
  grid-gap: 5.5vw;
`

export const TitlesGridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  width: 25.9vw;
  height: 34vh;
`

export const GridItemImage = styled.img`
  width: 25vw;
  height: 27vh;
  margin-top: 1vh;
  object-fit: none;
`

export const GridItemText = styled.div`
  width: 25vw;
  height: 24.1vh;
  margin-top: 2vh;
  padding: 2vh 0.5vw 0 1.3vw;
  font-size: 2.2vh;
  background: #f1f1f1;
  color: #535353;
`

export const FeedTitles = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  ${props => props.title && css`
  text-decoration: none;
  font-size: 1.7vw;
  font-family: 'Playfair Display', serif;
  color: #777777;
  margin: auto;
  padding-top: 1vh;
  &:hover {
    color: grey;
    cursor: grab;
  `}
`

export const NewsFeedTitles = styled.h3`
  font-family: 'Open Sans', sans-serif;
  padding-bottom: 0.5vh;
  color: #696969;
  padding-left: 4vw;
  margin-top: 4vh;
`

// single post styles
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

export const NewsTitleH2 = styled.h2`
  margin-top: 0.1vh;
  margin-bottom: 1vh;
  text-decoration: none;
  font-size: 2.5vh;
  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
  color: #707070;
`

export const SingleContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  position: relative;
  text-decoration: none;
  display: block;
  overflow: hidden;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  bottom: 0;
  z-index: -1;
  margin-top: 5vh;
${props => props.title && css`
  margin-top: 2.1vh;
  margin-bottom: 1vh;
  text-decoration: none;
  font-size: 4.5vh;
  font-family: 'Open Sans', sans-serif;
  color: #707070;
  font-weight: bold;
`}
${props => props.authorDateUpvotes && css`
  margin-top: 3vh;
  margin-bottom: 1vh;
  text-decoration: none;
  font-size: 2.5vh;
  font-family: 'Open Sans', sans-serif;
  color: #707070;
`}
${props => props.image && css`
  margin-right: 39vw;
  text-align: left;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 2.5vh;
  line-height: 4vh;
`}
${props => props.body && css`
  margin-right: 39vw;
  text-align: left;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 2.5vh;
  line-height: 4vh;
`}
`

export const H2 = styled.h2`
  text-decoration: none;
  font-size: 1.5em;
  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
  color: #707070;
  margin: auto;
  padding-top: 1.6vh;
`

export const H3 = styled.h3`
  text-decoration: none;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  color: #808080;
  margin: auto;
  padding-top: 1vh;
  &:hover {
    color: grey;
  }
`
