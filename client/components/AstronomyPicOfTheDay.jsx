import { getApod } from '../api/nasaApi'
import { useState, useEffect } from 'react'
import React from 'reactn'
import LoadingIndicator from './LoadingIndicator'
import { TitlesContainer } from '../styles'

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
    <TitlesContainer>
      <h1>{apod.title}</h1>
      <img style={{ width: '80%', height: '80%' }} src={apod.image}></img>
      <h3>{apod.date}</h3>
      <h2>{apod.description}</h2>
    </TitlesContainer>) : <div>
    <LoadingIndicator />
  </div>
}

export default AstronomyPicOfTheDay
