import { useState, useEffect } from 'react'
import React from 'reactn'
import LoadingIndicator from './LoadingIndicator'
import Weather from './Weather'
import { HomeContainer, HomeRowCol1, HomeRowCol2, APODImage, APODVideo } from '../styles'
import { getApod } from '../api/nasaApi'
import { isImageFile } from '../utils'

const AstronomyPicOfTheDay = () => {
  const [apod, setApod] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    getApod({ signal: abortController.signal })
      .then(apodInfo => {
        setApod({
          title: apodInfo.title,
          url: apodInfo.url,
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
        {apod.url.match(/\.(jpeg|jpg|gif|png|bmp|svg)$/)
          ? <APODImage src={apod.url}></APODImage>
          : <APODVideo src={apod.url}></APODVideo>}
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
