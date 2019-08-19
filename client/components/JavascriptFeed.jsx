import React, { useState, useEffect } from 'react'
import { getJavascriptNewsFeed } from '../api/newsApi'

// this component should display a list of js (just the title)
// create seperate componet for individual articles
const JavascriptFeed = () => {
  const [jsFeed, setJsFeed] = useState()

  useEffect(() => {
    getJavascriptNewsFeed()
      .then(articles => {
        setJsFeed({
          javascriptNews: articles
        })
      })
  }, [])
  return jsFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {jsFeed.javascriptNews.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  )
    : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
         loading component
    </div>
}

export default JavascriptFeed
