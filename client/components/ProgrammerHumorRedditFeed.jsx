import React, { useGlobal } from 'reactn'
import { useState, useEffect } from 'react'
import { getProgrammerHumorFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import { TitlesContainer, FeedTitles, TitlesGridItem, GridItemImage } from '../styles'
import SingleRedditPost from './SingleRedditPost'
import LoadingIndicator from './LoadingIndicator'

const ProgrammerHumorRedditFeed = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    getProgrammerHumorFeed({ signal: abortController.signal })
      .then(posts => {
        let postsArray = []
        postsArray.push(posts)
        setPosts({
          allPosts: postsArray
        })
      })
    return () => {
      abortController.abort()
    }
  }, [])

  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (posts && categorySelected) {
    return <div style={{ background: 'lightsmoke' }}><TitlesContainer>
      {posts.allPosts[0].map((singlePost, idx) => {
        return (
          <TitlesGridItem key={idx}>
            <FeedTitles key={idx}>
              {singlePost.title.length > 30
                ? <FeedTitles title="true" style={{ textDecoration: 'none' }} key={singlePost.title} onClick={() => { selectTitle(true); currentTitleSelected(singlePost.title) }}>
                  {singlePost.title.substr(0, 34)}...
                </FeedTitles>
                : <FeedTitles title="true" style={{ textDecoration: 'none' }} key={singlePost.title} onClick={() => { selectTitle(true); currentTitleSelected(singlePost.title) }}>
                  {singlePost.title}
                </FeedTitles>}
              <GridItemImage src={singlePost.url} />
            </FeedTitles>
          </TitlesGridItem>
        )
      })}
    </TitlesContainer>
    </div>
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

export default ProgrammerHumorRedditFeed
