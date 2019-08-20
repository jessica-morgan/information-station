import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getRetconnedFeed } from '../api/redditApi'
import { selectTitle } from '../utils'

// this component should display a list of retconned posts (just the title)
// create seperate componet for individual posts
const RetconnedRedditFeed = () => {
  const [retconnedFeed, setRetconnedFeed] = useState()

  useEffect(() => {
    getRetconnedFeed()
      .then(posts => {
        setRetconnedFeed({
          retconnedPosts: posts
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (retconnedFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {retconnedFeed.retconnedPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title} onClick={() => { selectTitle(true) }}>{post.title}</h1>
          </div>
        )
      })}
    </div >
  } if (retconnedFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
  }
}

export default RetconnedRedditFeed
