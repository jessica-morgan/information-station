import React, { useGlobal } from 'reactn'
import { useState, useEffect } from 'react'
import { getProgrammerHumorFeed } from '../api/redditApi'
import { selectTitle } from '../utils'

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
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  if (programmerHumorFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {programmerHumorFeed.programmerHumorPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title} onClick={() => { selectTitle(true) }}>{post.title}</h1>
          </div>
        )
      })}
    </div>
  } if (programmerHumorFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
  loading component
    </div>
  }
}

export default ProgrammerHumorRedditFeed
