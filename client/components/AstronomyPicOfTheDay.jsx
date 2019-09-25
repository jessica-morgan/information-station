import { getApod } from '../api/nasaApi'
import { useState, useEffect } from 'react'
import React from 'reactn'
import LoadingIndicator from './LoadingIndicator'
import { TitlesContainer, SinglePostTitle, PostImageContainer, PostBodyContainer, H3 } from '../styles'

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
      <SinglePostTitle>
        {apod.title}
      </SinglePostTitle>

      <PostImageContainer src={apod.image}></PostImageContainer>
      <br/>
      <PostBodyContainer>
        <H3>{apod.date}</H3>
        {apod.description}
      </PostBodyContainer>
    </TitlesContainer>) : <div>
    <LoadingIndicator />
  </div>
}

export default AstronomyPicOfTheDay
