import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getTooAfraidFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleRedditPost from './SingleRedditPost'
import LoadingIndicator from './LoadingIndicator'

const TooAfraidToAskRedditFeed = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    getTooAfraidFeed()
      .then(posts => {
        let postsArray = []
        postsArray.push(posts)
        setPosts({
          allPosts: postsArray
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')

  if (posts && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {posts.allPosts[0].map((singlePost, idx) => {
        return (
          <div key={idx}>
            <h1 key={singlePost.title} onClick={() => { selectTitle(true); currentTitleSelected(singlePost.title) }}>{singlePost.title}</h1>
          </div>
        )
      })}
    </div>
  } if (posts && titleSelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      <SingleRedditPost posts={posts.allPosts[0]} key={currentTitle} />
    </div>
  } else {
    return <div>
      <LoadingIndicator />
    </div>
  }
}

export default TooAfraidToAskRedditFeed
