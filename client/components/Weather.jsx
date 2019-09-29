import React from 'reactn'
import { useState, useEffect } from 'react'
import { getCurrentWeather } from '../api/weatherApi'
import { WeatherContainer, WeatherText, WeatherIcon, City, Temperature, Hr } from '../styles'
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
    const formattedDate = format(date, 'dd MM yyyy')
    const formattedTime = format(date, 'HH:mm')
    const celcius = fahrenheitToCelcius(weather.data[0].temp)
    const image = weather.data[0].icon + '.svg'
    return (
      <>
      <WeatherContainer>
        <Temperature >
          <WeatherIcon src={image}></WeatherIcon>
          {Math.round(celcius)}°C
        </Temperature >
        <City>Auckland</City><WeatherText>{weather.data[0].summary}</WeatherText>
      </WeatherContainer>
      <Hr />
      </>
    )
  } else {
    return <WeatherContainer>
    </WeatherContainer>
  }
}

export default Home
