const newsApi = require('../client/api/newsApi')

test('fetches results from getApod', () => {
  return newsApi.getQuatumPhysicsNewsFeed().then(response => {
    expect(response[0]).toEqual(
      expect.objectContaining({
        'author': expect.any(String),
        'content': expect.any(String),
        'title': expect.any(String),
        'description': expect.any(String),
        'url': expect.any(String),
        'urlToImage': expect.any(String),
        'publishedAt': expect.any(String)
      })
    )
  })
})
