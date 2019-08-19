import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getIsItBullshitFeed } from '../api/redditApi'
import { selectTitle } from '../utils'

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
  // use titleSelected to check if the article/post component should render
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')

  return isItBullshit ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {isItBullshit.bsPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title} onClick={() => { selectTitle() }}>{post.title}</h1>
            {/* <p key={post.body}>{post.body}</p> : <p></p>}
                {post.image.length ? <img key={post.image} src={post.image}></img> : <p></p>} */}
          </div>
        )
      })}
    </div>)
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
}

export default IsItBullshitRedditFeed
