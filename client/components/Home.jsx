import React from 'reactn'
import { useState, useEffect } from 'react'
import LoadingIndicator from './LoadingIndicator'
import { getCurrentWeather } from '../api/weatherApi'
import { HomeContainer, H3, H2, WeatherIcon } from '../styles'
import { fromUnixTime, format } from 'date-fns'

const Home = () => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    getCurrentWeather()
      .then(weatherData => {
        let weatherArray = []
        weatherArray.push(weatherData)
        setWeather({
          data: weatherArray
        })
      })
  }, [])

  const fahrenheitToCelcius = (fahrenheit) => {
    var fTemp = fahrenheit
    var fToCel = (fTemp - 32) * 5 / 9
    return fToCel
  }

  if (weather) {
    const date = fromUnixTime(weather.data[0].time)
    const formattedDate = format(date, 'dd-MMM-yy, HH:mm')
    const celcius = fahrenheitToCelcius(weather.data[0].temp)
    const humidityString = weather.data[0].humidity.toString()
    const image = weather.data[0].icon + '.svg'
    return (
      <HomeContainer>
        <H3 style={{ textDecoration: 'none' }}>{formattedDate}</H3>
        <WeatherIcon src={image}></WeatherIcon>
        <H3>{weather.data[0].summary}</H3>
        <H3>Temperature: {Math.round(celcius)}°C</H3>
        <H3>Humidity: {humidityString.substring(2, 4)}%</H3>
      </HomeContainer>
    )
  } else {
    return <div>
      <LoadingIndicator />
    </div>
  }
}

export default Home
