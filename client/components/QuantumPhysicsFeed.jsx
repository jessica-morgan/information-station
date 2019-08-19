import { useState, useEffect } from 'react'
import { getQuatumPhysicsNewsFeed } from '../api/newsApi'
import React, { useGlobal } from 'reactn'

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

  return quantumPhysicsFeed ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {quantumPhysicsFeed.quantumPhysicsNews.map((article, idx) => {
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

export default QuantumPhysicsFeed
