import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getTooAfraidFeed } from '../api/redditApi'
import { selectTitle } from '../utils'

// this component should display a list of tata posts (just the title)
// create seperate componet for individual posts
const TooAfraidToAskRedditFeed = () => {
  const [tataFeed, setTataFeed] = useState()

  useEffect(() => {
    getTooAfraidFeed()
      .then(posts => {
        setTataFeed({
          tataPosts: posts
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (tataFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {tataFeed.tataPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title} onClick={() => { selectTitle(true) }}>{post.title}</h1>
          </div>
        )
      })}
    </div>
  } if (tataFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
  }
}

export default TooAfraidToAskRedditFeed
