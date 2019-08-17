import React from 'react'
import { Route } from 'react-router-dom'
import ProgrammerHumorRedditFeed from './ProgrammerHumorRedditFeed'
import RetconnedRedditFeed from './RetconnedRedditFeed'
import IsItBullshitRedditFeed from './IsItBullshitRedditFeed'
import TooAfraidToAskRedditFeed from './TooAfraidToAskFeed'

const App = () => (
  <div>
    <Route path='/phFeed' component={ProgrammerHumorRedditFeed} />
    <Route path='/rcFeed' component={RetconnedRedditFeed} />
    <Route path='/bsFeed' component={IsItBullshitRedditFeed} />
    <Route path='/tataFeed' component={TooAfraidToAskRedditFeed} />
  </div>
)

export default App
