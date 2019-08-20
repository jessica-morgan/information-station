import { useState, useEffect } from 'react'
import { getNZScienceTechnologyHeadlines } from '../api/newsApi'
import React, { useGlobal } from 'reactn'
import { selectTitle } from '../utils'

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
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  if (nzScienceTechnologyHeadlines && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {nzScienceTechnologyHeadlines.headlines.map((headline, idx) => {
        return (
          <div key={idx}>
            <h1 key={headline.title} onClick={() => { selectTitle(true) }}>{headline.title}</h1>
          </div>
        )
      })}
    </div>
  } if (nzScienceTechnologyHeadlines && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
  }
}

export default NZScienceTechnologyFeed
