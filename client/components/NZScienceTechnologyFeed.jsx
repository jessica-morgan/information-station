import React, { useState, useEffect } from 'react'
import { getNZScienceTechnologyHeadlines } from '../api/newsApi'

// this component should display a list of nzst headlines (just the title)
// create seperate componet for individual articles
const NZScienceTechnologyFeed = () => {
  const [nzScienceTechnologyHeadlines, setNzScienceTechnologyHeadlines] = useState()

  useEffect(() => {
    getNZScienceTechnologyHeadlines()
      .then(articles => {
        setNzScienceTechnologyHeadlines({
          headlines: articles
        })
      })
  }, [])
  return nzScienceTechnologyHeadlines ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {nzScienceTechnologyHeadlines.headlines.map((headline, idx) => {
        return (
          <div key={idx}>
            <h1 key={headline.title}>{headline.title}</h1>
          </div>
        )
      })}
    </div>
  )
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
}

export default NZScienceTechnologyFeed
