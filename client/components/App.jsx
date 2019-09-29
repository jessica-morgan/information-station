import React, { useGlobal } from 'reactn'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import ProgrammerHumorRedditFeed from './ProgrammerHumorRedditFeed'
import ReactjsRedditFeed from './ReactjsRedditFeed'
import CoolGithubProjectsRedditFeed from './CoolGithubProjectsRedditFeed'
import JavascriptRedditFeed from './JavascriptRedditFeed'
import QuantumPhysicsFeed from './QuantumPhysicsFeed'
import QuantumComputingFeed from './QuantumComputingFeed'
import SpaceFeed from './SpaceFeed'
import NZGeneralFeed from './NZGeneralFeed'
import AstronomyPicOfTheDay from './AstronomyPicOfTheDay'
import { TitlesContainer } from '../styles'

const App = () => {
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')

  if (categorySelected || titleSelected) {
    return <>
      <Nav/>
      <TitlesContainer>
        <Route exact path='/' component={AstronomyPicOfTheDay} />
        <Route path='/phFeed' component={ProgrammerHumorRedditFeed} />
        <Route path='/rjsFeed' component={ReactjsRedditFeed} />
        <Route path='/cgpFeed' component={CoolGithubProjectsRedditFeed} />
        <Route path='/jsFeed' component={JavascriptRedditFeed} />
        <Route path='/qpFeed' component={QuantumPhysicsFeed} />
        <Route path='/qcFeed' component={QuantumComputingFeed} />
        <Route path='/spaceFeed' component={SpaceFeed} />
        <Route path='/nzgFeed' component={NZGeneralFeed} />
      </TitlesContainer>
    </>
  } else {
    return <div>
      <Nav />
      <Route exact path='/' component={AstronomyPicOfTheDay} />
    </div>
  }
}

export default App
