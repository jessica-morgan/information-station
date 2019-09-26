import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getJavascriptFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleRedditPost from './SingleRedditPost'
import LoadingIndicator from './LoadingIndicator'
import { TitlesContainer, FeedTitles, H3, H2, Hr } from '../styles'
import { fromUnixTime, format } from 'date-fns'

const JavascriptRedditFeed = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    getJavascriptFeed()
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
        const date = fromUnixTime(singlePost.dateCreated)
        const formattedDate = format(date, 'dd-MM-yy')
        return (
          <FeedTitles key={idx}>
            <H3 key={singlePost.dateCreated}>{formattedDate}</H3>
            <H2 style={{ textDecoration: 'none' }} key={singlePost.title} onClick={() => { selectTitle(true); currentTitleSelected(singlePost.title) }}>{singlePost.title}</H2>
            <H3 style={{ marginTop: '0.1vh', color: '#808080' }}>{singlePost.body.substr(0, 100)}</H3>
            <Hr/>
          </FeedTitles>
        )
      })}
    </TitlesContainer>
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

export default JavascriptRedditFeed
