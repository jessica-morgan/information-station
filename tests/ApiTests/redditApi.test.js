const redditApi = require('../../client/api/redditApi')

test('fetches results from getProgrammerHumorFeed', () => {
  return redditApi.getProgrammerHumorFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'image': expect.anything() || null,
        'body': expect.anything() || null,
        'upVotes': expect.anything() || null
      })
    )
  })
})

test('fetches results from getRetconnedFeed', () => {
  return redditApi.getRetconnedFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'image': expect.anything() || null,
        'body': expect.anything() || null,
        'upVotes': expect.anything() || null
      })
    )
  })
})

test('fetches results from getIsItBullshitFeed', () => {
  return redditApi.getIsItBullshitFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'image': expect.anything() || null,
        'body': expect.anything() || null,
        'upVotes': expect.anything() || null
      })
    )
  })
})

test('fetches results from getTooAfraidFeed', () => {
  return redditApi.getTooAfraidFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'image': expect.anything() || null,
        'body': expect.anything() || null,
        'upVotes': expect.anything() || null
      })
    )
  })
})
