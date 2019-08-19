import React, { useState, useEffect } from 'react'
import { getRetconnedFeed } from '../api/redditApi'

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

  return retconnedFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {retconnedFeed.retconnedPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title}>{post.title}</h1>
            {/* {post.body.length ? <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
          </div>
        )
      })}
    </div >
  )
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {/* loading component */}
    </div>
}

export default RetconnedRedditFeed
