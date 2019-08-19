import React, { useState, useEffect } from 'react'
import { getIsItBullshitFeed } from '../api/redditApi'

// this component should display a list of itbs posts (just the title)
// create seperate componet for individual posts
export const IsItBullshitRedditFeed = () => {
  const [isItBullshit, setIsItBullshit] = useState()
  useEffect(() => {
    getIsItBullshitFeed()
      .then(posts => {
        setIsItBullshit({
          bsPosts: posts
        })
      })
  }, [])
  return isItBullshit ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {isItBullshit.bsPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title}>{post.title}</h1>
            {/* {post.body.length ? <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
          </div>
        )
      })}
    </div>)
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {/* loading component */}
    </div>
}

export default IsItBullshitRedditFeed
