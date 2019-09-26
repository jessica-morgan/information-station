import React, { useGlobal } from 'reactn'
import { useState, useEffect } from 'react'
import { getProgrammerHumorFeed } from '../api/redditApi'
import { selectTitle, currentTitleSelected } from '../utils'
import { TitlesContainer, FeedTitles, H3, H2, Hr } from '../styles'
import SingleRedditPost from './SingleRedditPost'
import LoadingIndicator from './LoadingIndicator'
import { fromUnixTime, format } from 'date-fns'

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
