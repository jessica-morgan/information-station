import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { selectTitle } from '../utils'
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
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (spaceFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {spaceFeed.spaceNews.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title} onClick={() => { selectTitle(true) }}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  } if (spaceFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
  }
}

export default SpaceFeed
