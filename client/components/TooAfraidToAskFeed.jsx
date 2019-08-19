import { useState, useEffect } from 'react'
import React from 'reactn'
import { getTooAfraidFeed } from '../api/redditApi'

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

  return tataFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {tataFeed.tataPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title}>{post.title}</h1>
            {/* {post.body.length ? <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
          </div>
        )
      })}
    </div>
  )
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
}

export default TooAfraidToAskRedditFeed
