import React, { useGlobal } from 'reactn'
import { useState, useEffect } from 'react'
import { getProgrammerHumorFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleRedditPost from './SingleRedditPost'

// this component should display a list of programmerHumor posts (just the title)
// create seperate componet for individual posts
const ProgrammerHumorRedditFeed = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    getProgrammerHumorFeed()
      .then(posts => {
        let postsArray = []
        postsArray.push(posts)
        setPosts({
          allPosts: postsArray
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

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
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
  }
}

export default ProgrammerHumorRedditFeed
