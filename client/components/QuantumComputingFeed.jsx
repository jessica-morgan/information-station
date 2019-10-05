import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleNewsArticle from './SingleNewsArticle'
import { getQuatumComputingNewsFeed } from '../api/newsApi'
import LoadingIndicator from './LoadingIndicator'
import { TitlesContainer, NewsFeedTitles, H3, NewsTitleH2, Hr } from '../styles'

const QuantumComputingFeed = () => {
  const [allArticles, setArticles] = useState()

  useEffect(() => {
    getQuatumComputingNewsFeed()
      .then(articles => {
        setArticles({
          articles
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (allArticles && categorySelected) {
    return <TitlesContainer>
      {allArticles.articles.map((article, idx) => {
        const formattedDate = article.publishedAt.substring(0, 10)
        return (
          <NewsFeedTitles key={idx}>
            <H3 key={article.publishedAt}>{formattedDate}</H3>
            <NewsTitleH2 style={{ textDecoration: 'none' }} key={article.title} onClick={() => { selectTitle(true); currentTitleSelected(article.title) }}>{article.title}</NewsTitleH2>
            <H3 style={{ marginTop: '0.1vh', color: '#808080' }}>{article.description}</H3>
            <Hr/>
          </NewsFeedTitles>
        )
      })}
    </TitlesContainer>
  } if (allArticles && titleSelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      <SingleNewsArticle articles={allArticles.articles} key={currentTitle} />
    </div>
  } else {
    return <div>
      <LoadingIndicator />
    </div>
  }
}

export default QuantumComputingFeed
