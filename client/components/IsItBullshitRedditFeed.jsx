import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getIsItBullshitFeed } from '../api/redditApi'
import { selectTitle } from '../utils'
import SinglePost from './SinglePost'

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
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (isItBullshit && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {isItBullshit.bsPosts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1 key={post.title} onClick={() => { selectTitle(true) }}>{post.title}</h1>
          </div>
        )
      })}
    </div>
  } if (isItBullshit && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
  }
}

export default IsItBullshitRedditFeed
