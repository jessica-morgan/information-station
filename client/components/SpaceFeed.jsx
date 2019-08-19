import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'

import { getSpaceNewsFeed } from '../api/newsApi'

// this component should display a list of space (just the title)
// create seperate componet for individual articles
const SpaceFeed = () => {
  const [spaceFeed, setSpaceFeed] = useState()

  useEffect(() => {
    getSpaceNewsFeed()
      .then(articles => {
        setSpaceFeed({
          spaceNews: articles
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')

  return spaceFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {spaceFeed.spaceNews.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  )
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
}

export default SpaceFeed
