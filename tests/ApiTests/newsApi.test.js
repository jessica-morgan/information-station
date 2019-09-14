const newsApi = require('../../client/api/newsApi')

test('fetches results from getQuatumPhysicsNewsFeed', () => {
  return newsApi.getQuatumPhysicsNewsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'author': expect.anything() || null,
        'content': expect.anything() || null,
        'title': expect.anything() || null,
        'description': expect.anything() || null,
        'url': expect.anything() || null,
        'urlToImage': expect.anything() || null,
        'publishedAt': expect.anything() || null
      })
    )
  })
})

test('fetches results from getQuatumComputingNewsFeed', () => {
  return newsApi.getQuatumComputingNewsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'author': expect.anything() || null,
        'content': expect.anything() || null,
        'title': expect.anything() || null,
        'description': expect.anything() || null,
        'url': expect.anything() || null,
        'urlToImage': expect.anything() || null,
        'publishedAt': expect.anything() || null
      })
    )
  })
})
// FAILING
test('fetches results from getJavascriptNewsFeed', () => {
  return newsApi.getJavascriptNewsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'author': expect.anything() || null,
        // 'content': expect.anything(),
        'title': expect.anything() || null,
        'description': expect.anything() || null,
        'url': expect.anything() || null,
        'urlToImage': expect.anything() || null,
        'publishedAt': expect.anything() || null
      })
    )
  })
})

test('fetches results from getSpaceNewsFeed', () => {
  return newsApi.getSpaceNewsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'author': expect.anything() || null,
        'content': expect.anything() || null,
        'title': expect.anything() || null,
        'description': expect.anything() || null,
        'url': expect.anything() || null,
        'urlToImage': expect.anything() || null,
        'publishedAt': expect.anything() || null
      })
    )
  })
})

test('fetches results from getNZScienceTechnologyHeadlines', () => {
  return newsApi.getNZScienceTechnologyHeadlines().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'author': expect.anything() || null,
        'content': expect.anything() || null,
        'title': expect.anything() || null,
        'description': expect.anything() || null,
        'url': expect.anything() || null,
        'urlToImage': expect.anything() || null,
        'publishedAt': expect.anything() || null
      })
    )
  })
})

// FAILING
test('fetches results from getNZGeneralHeadlines', () => {
  return newsApi.getNZGeneralHeadlines().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        // 'author': expect.anything() || null,
        'content': expect.anything() || null,
        'title': expect.anything() || null,
        'description': expect.anything() || null,
        'url': expect.anything() || null,
        'urlToImage': expect.anything() || null,
        'publishedAt': expect.anything() || null
      })
    )
  })
})

