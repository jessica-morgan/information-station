import { getApod } from '../api/nasaApi'
import { useState, useEffect } from 'react'
import React from 'reactn'
import LoadingIndicator from './LoadingIndicator'
import Weather from './Weather'
import { HomeContainer, HomeRowCol1, HomeRowCol3, APODBodyContainer, APODDescriptionTitle, APODImage, APODDescriptionContainer, APODImageTitle } from '../styles'

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
    <HomeContainer>
      <HomeRowCol1>
        <APODBodyContainer>
          <APODImageTitle>
            {apod.title}
          </APODImageTitle>
        </APODBodyContainer>
        <APODImage src={apod.image}></APODImage>
      </HomeRowCol1>
      <HomeRowCol3>
        <Weather/>
        <APODDescriptionContainer>
          <APODDescriptionTitle>
        Astronomy picture of the day
          </APODDescriptionTitle>
          {apod.description}
        </APODDescriptionContainer>
      </HomeRowCol3>
    </HomeContainer>) : <div>
    <LoadingIndicator />
  </div>
}

export default AstronomyPicOfTheDay
