import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getReactJsFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleRedditPost from './SingleRedditPost'
import LoadingIndicator from './LoadingIndicator'
import { TitlesContainer, FeedTitles } from '../styles'

const ReactjsRedditFeed = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    getReactJsFeed()
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
    return <TitlesContainer>
      {posts.allPosts[0].map((singlePost, idx) => {
        return (
          <FeedTitles key={idx}>
            <h1 key={singlePost.title} onClick={() => { selectTitle(true); currentTitleSelected(singlePost.title) }}>{singlePost.title}</h1>
          </FeedTitles>
        )
      })}
    </TitlesContainer>
  } if (posts && titleSelected) {
    return <TitlesContainer>
      <SingleRedditPost posts={posts.allPosts[0]} key={currentTitle} />
    </TitlesContainer>
  } else {
    return <div>
      <LoadingIndicator />
    </div>
  }
}

export default ReactjsRedditFeed
