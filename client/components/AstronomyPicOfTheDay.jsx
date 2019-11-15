import { getApod } from '../api/nasaApi'
import { useState, useEffect } from 'react'
import React from 'reactn'
import LoadingIndicator from './LoadingIndicator'
import Weather from './Weather'
import { HomeContainer, HomeRowCol1, HomeRowCol2, APODDescriptionTitle, APODImage, APODDescriptionContainer } from '../styles'

const AstronomyPicOfTheDay = () => {
  const [apod, setApod] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    getApod({ signal: abortController.signal })
      .then(apodInfo => {
        setApod({
          title: apodInfo.title,
          image: apodInfo.url,
          description: apodInfo.explanation,
          date: apodInfo.date
        })
      })
    return () => {
      abortController.abort()
    }
  }, [])
  return apod ? (
    <HomeContainer>
      <HomeRowCol1>
        <HomeRowCol1 APODBodyContainer="true">
          <HomeRowCol1 APODImageTitle="true">
            {apod.title}
          </HomeRowCol1>
        </HomeRowCol1>
        <APODImage src={apod.image}></APODImage>
      </HomeRowCol1>
      <HomeRowCol2>
        <Weather/>
        <HomeRowCol2 APODDescriptionContainer="true">
          <HomeRowCol2 APODDescriptionTitle="true">
        Astronomy picture of the day
          </HomeRowCol2>
          {apod.description}
        </HomeRowCol2>
      </HomeRowCol2>
    </HomeContainer>) : <div >
    <LoadingIndicator />
  </div>
}

export default AstronomyPicOfTheDay
