const weatherApi = require('../../client/api/weatherApi')

test('fetches results from getCurrentWeather', () => {
  return weatherApi.getCurrentWeather().then(response => {
    expect(response).toEqual(
      expect.objectContaining({
        'time': expect.anything() || null,
        'temp': expect.anything() || null,
        'summary': expect.anything() || null,
        'icon': expect.anything() || null,
        'humidity': expect.anything() || null
      })
    )
  })
})
