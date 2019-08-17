import React from 'react'
import { Route } from 'react-router-dom'
import ProgrammerHumorRedditFeed from './ProgrammerHumorRedditFeed'
import RetconnedRedditFeed from './RetconnedRedditFeed'
import IsItBullshitRedditFeed from './IsItBullshitRedditFeed'
import TooAfraidToAskRedditFeed from './TooAfraidToAskFeed'
import AliensNewsFeed from './AliensNewsFeed'
import QuantumPhysicsFeed from './QuantumPhysicsFeed'
import QuantumComputingFeed from './QuantumComputingFeed'
import JavascriptFeed from './JavascriptFeed'
import SpaceFeed from './SpaceFeed'

const App = () => (
  <div>
    <Route path='/phFeed' component={ProgrammerHumorRedditFeed} />
    <Route path='/rcFeed' component={RetconnedRedditFeed} />
    <Route path='/bsFeed' component={IsItBullshitRedditFeed} />
    <Route path='/tataFeed' component={TooAfraidToAskRedditFeed} />
    <Route path='/aliensFeed' component={AliensNewsFeed} />
    <Route path='/qpFeed' component={QuantumPhysicsFeed} />
    <Route path='/qcFeed' component={QuantumComputingFeed} />
    <Route path='/jsFeed' component={JavascriptFeed} />
    <Route path='/spaceFeed' component={SpaceFeed} />
  </div>
)

export default App
