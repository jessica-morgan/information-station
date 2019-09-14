const nasaApi = require('../../client/api/nasaApi')

test('fetches results from getApod', () => {
  return nasaApi.getApod().then(response => {
    expect(response).toEqual(
      expect.objectContaining({
        'date': expect.anything() || null,
        'explanation': expect.anything() || null,
        'hdurl': expect.anything() || null,
        'media_type': expect.anything() || null,
        'title': expect.anything() || null,
        'url': expect.anything() || null
      })
    )
  })
})
