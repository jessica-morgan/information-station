import React, { useState, useEffect } from 'react'
import { getQuatumComputingNewsFeed } from '../api/newsApi'

// this component should display a list of q-c (just the title)
// create seperate componet for individual articles
const QuantumComputingFeed = () => {
  const [quantumComputingFeed, setQuantumComputingFeed] = useState()

  useEffect(() => {
    getQuatumComputingNewsFeed()
      .then(articles => {
        setQuantumComputingFeed({
          quantumComputingNews: articles
        })
      })
  }, [])

  return quantumComputingFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {quantumComputingFeed.quantumComputingNews.map((article, idx) => {
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

export default QuantumComputingFeed
