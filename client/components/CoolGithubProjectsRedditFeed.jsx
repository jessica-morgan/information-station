import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getCoolGithubProjectsFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleRedditPost from './SingleRedditPost'
import LoadingIndicator from './LoadingIndicator'
import { TitlesContainer, FeedTitles, GridItemImage, TitlesGridItem } from '../styles'

const CoolGithubProjectsRedditFeed = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    getCoolGithubProjectsFeed({ signal: abortController.signal })
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
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')

  if (posts && categorySelected) {
    return <TitlesContainer >
      {posts.allPosts[0].map((singlePost, idx) => {
        return (
          <TitlesGridItem key={idx}>
            <FeedTitles key={idx}>
              {singlePost.title.length > 23
                ? <FeedTitles title="true" style={{ textDecoration: 'none' }} key={singlePost.title} onClick={() => { selectTitle(true); currentTitleSelected(singlePost.title) }}>
                  {singlePost.title.substr(0, 20)}...
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

export default CoolGithubProjectsRedditFeed
