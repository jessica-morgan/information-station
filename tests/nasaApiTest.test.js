const nasaApi = require('../client/api/nasaApi')

test('fetches results from getApod', () => {
  return nasaApi.getApod().then(response => {
    expect(response).toEqual(
      expect.objectContaining({
        'date': expect.any(String),
        'explanation': expect.any(String),
        'hdurl': expect.any(String),
        'media_type': expect.any(String),
        'title': expect.any(String),
        'url': expect.any(String)
      })
    )
  })
})
