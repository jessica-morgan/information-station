import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { getJavascriptNewsFeed } from '../api/newsApi'
import { selectTitle } from '../utils'

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
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (jsFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {jsFeed.javascriptNews.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title} onClick={() => { selectTitle(true) }}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  } if (jsFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      loading component
    </div>
  }
}

export default JavascriptFeed
