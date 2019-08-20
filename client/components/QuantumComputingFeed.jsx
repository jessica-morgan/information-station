import { useState, useEffect } from 'react'
import React, { useGlobal } from 'reactn'
import { selectTitle } from '../utils'

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
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  if (quantumComputingFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {quantumComputingFeed.quantumComputingNews.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title} onClick={() => { selectTitle(true) }}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  } if (quantumComputingFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
  }
}

export default QuantumComputingFeed
