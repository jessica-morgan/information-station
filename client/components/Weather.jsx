import React from 'reactn'
import { useState, useEffect } from 'react'
import { getCurrentWeather } from '../api/weatherApi'
import { WeatherContainer, WeatherIcon, Temperature, WeatherHr } from '../styles'

const Home = () => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    getCurrentWeather({ signal: abortController.signal })
      .then(weatherData => {
        let weatherArray = []
        weatherArray.push(weatherData)
        setWeather({
          data: weatherArray
        })
      })
    return () => {
      abortController.abort()
    }
  }, [])

  const fahrenheitToCelcius = (fahrenheit) => {
    var fTemp = fahrenheit
    var fToCel = (fTemp - 32) * 5 / 9
    return fToCel
  }

  if (weather) {
    const celcius = fahrenheitToCelcius(weather.data[0].temp)
    const image = weather.data[0].icon + '.svg'
    return (
      <>
      <WeatherContainer>
        <Temperature >
          <WeatherIcon src={image}></WeatherIcon>
          {Math.round(celcius)}°C
        </Temperature >
      </WeatherContainer>
      <WeatherHr/>
      </>
    )
  } else {
    return <WeatherContainer>
    </WeatherContainer>
  }
}

export default Home
