import React from 'reactn'
import { useState, useEffect } from 'react'
import { getProgrammerHumorFeed } from '../api/redditApi'

// this component should display a list of programmerHumor posts (just the title)
// create seperate componet for individual posts
const ProgrammerHumorRedditFeed = () => {
  const [programmerHumorFeed, setProgrammerHumorFeed] = useState()

  useEffect(() => {
    getProgrammerHumorFeed()
      .then(posts => {
        setProgrammerHumorFeed({
          programmerHumorPosts: posts
        })
      })
  }, [])

  return programmerHumorFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {programmerHumorFeed.programmerHumorPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title}>{post.title}</h1>
          </div>
        )
      })}
    </div>
  )
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
       loading component
    </div>
}

export default ProgrammerHumorRedditFeed
