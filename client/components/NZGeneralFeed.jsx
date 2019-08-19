import React, { useState, useEffect } from 'react'
import { getNZGeneralHeadlines } from '../api/newsApi'

// this component should display a list of nzg headlines (just the title)
// create seperate componet for individual articles
const NZGeneralFeed = () => {
  const [nzGeneralHeadlines, setNzGeneralHeadlines] = useState()

  useEffect(() => {
    getNZGeneralHeadlines()
      .then(articles => {
        setNzGeneralHeadlines({
          headlines: articles
        })
      })
  }, [])

  return nzGeneralHeadlines ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {nzGeneralHeadlines.headlines.map((headline, idx) => {
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

export default NZGeneralFeed
