import { useState, useEffect } from 'react'
import { getQuatumPhysicsNewsFeed } from '../api/newsApi'
import React, { useGlobal } from 'reactn'
import { selectTitle } from '../utils'

// this component should display a list of q-p (just the title)
// create seperate componet for individual articles
const QuantumPhysicsFeed = () => {
  const [quantumPhysicsFeed, setQuantumPhysicsFeed] = useState()

  useEffect(() => {
    getQuatumPhysicsNewsFeed()
      .then(articles => {
        setQuantumPhysicsFeed({
          quantumPhysicsNews: articles
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')

  if (quantumPhysicsFeed && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {quantumPhysicsFeed.quantumPhysicsNews.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title} onClick={() => { selectTitle(true) }}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  } if (quantumPhysicsFeed && titleSelected) {
    return <p style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>hi</p>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
  }
}

export default QuantumPhysicsFeed
