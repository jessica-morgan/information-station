const redditApi = require('../../client/api/redditApi')

test('fetches results from getProgrammerHumorFeed', () => {
  return redditApi.getProgrammerHumorFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'body': expect.anything() || null,
        'url': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'likes': expect.anything() || null,
        'link': expect.anything() || null,
        'upVotes': expect.anything() || null,
        'media': expect.anything() || null
      })
    )
  })
})

test('fetches results from getReactJsFeed', () => {
  return redditApi.getReactJsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'body': expect.anything() || null,
        'url': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'likes': expect.anything() || null,
        'link': expect.anything() || null,
        'upVotes': expect.anything() || null,
        'media': expect.anything() || null
      })
    )
  })
})

test('fetches results from getCoolGithubProjectsFeed', () => {
  return redditApi.getCoolGithubProjectsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'body': expect.anything() || null,
        'url': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'likes': expect.anything() || null,
        'link': expect.anything() || null,
        'upVotes': expect.anything() || null,
        'media': expect.anything() || null
      })
    )
  })
})

test('fetches results from getJavascriptFeed', () => {
  return redditApi.getJavascriptFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'title': expect.anything() || null,
        'body': expect.anything() || null,
        'url': expect.anything() || null,
        'dateCreated': expect.anything() || null,
        'postAuthor': expect.anything() || null,
        'likes': expect.anything() || null,
        'link': expect.anything() || null,
        'upVotes': expect.anything() || null,
        'media': expect.anything() || null
      })
    )
  })
})
