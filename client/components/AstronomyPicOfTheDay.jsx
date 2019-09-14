import { getApod } from '../api/nasaApi'
import { useState, useEffect } from 'react'
import React from 'reactn'
import LoadingIndicator from './LoadingIndicator'

const AstronomyPicOfTheDay = () => {
  const [apod, setApod] = useState()

  useEffect(() => {
    getApod()
      .then(apodInfo => {
        setApod({
          title: apodInfo.title,
          image: apodInfo.url,
          description: apodInfo.explanation,
          date: apodInfo.date
        })
      })
  }, [])
  return apod ? (
    <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      <h1>{apod.title}</h1>
      <img style={{ width: '80%', height: '80%' }} src={apod.image}></img>
      <h3>{apod.date}</h3>
      <h2>{apod.description}</h2>
    </div>) : <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
    <LoadingIndicator />
  </div>
}

export default AstronomyPicOfTheDay
