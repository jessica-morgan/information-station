import request from 'superagent'
const darkSkyWeatherUrl = 'http://localhost:3000/api/v1/weather/'

export function getCurrentWeather () {
  return (
    request.get(darkSkyWeatherUrl)
      .then(res => {
        let weatherArray = []
        weatherArray.push(res)
        let newWeatherArray = []
        newWeatherArray.push({
          temp: weatherArray[0].body.temperature,
          summary: weatherArray[0].body.summary,
          icon: weatherArray[0].body.icon,
          humidity: weatherArray[0].body.humidity
        })
        return newWeatherArray[0]
      })
      .catch(err => {
        if (err) throw Error('Cannot get weather')
      })
  )
}
