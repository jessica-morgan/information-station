import React from 'react'
import { Route } from 'react-router-dom'
import RedditFeed from './RedditFeed'

const App = () => (
  <div>
    <Route path='/' component={RedditFeed} />
  </div>
)

export default App
