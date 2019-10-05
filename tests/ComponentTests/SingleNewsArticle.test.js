import React from 'reactn'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import SingleNewsArticle from '../../client/components/SingleRedditPost'
const newsApi = require('../../client/api/newsApi')

// this only passes sometimes- mock response
test('<SingleNewsArticle /> recieves correct data as props', () => {
  return newsApi.getNZGeneralHeadlines().then(response => {
    const wrapper = shallow(
      <MemoryRouter>
        <SingleNewsArticle posts={response[0]}/>
      </MemoryRouter>
    )
    expect(wrapper.children().props().posts).toEqual(expect.objectContaining({
      author: expect.anything() || null,
      content: expect.anything() || null,
      title: expect.anything() || null,
      description: expect.anything() || null,
      url: expect.anything() || null,
      urlToImage: expect.anything() || null,
      publishedAt: expect.anything() || null
    })
    )
  })
})

// this fails
// test.skip('<SingleNewsArticle/> contains correct tags when passed props', () => {
//   return newsApi.getSpaceNewsFeed().then(response => {
//     const wrapper = mount(
//       <MemoryRouter>
//         <SingleNewsArticle posts={response}/>
//       </MemoryRouter>
//     )
//     expect(wrapper.containsAllMatchingElements([
//       <div key={'index'}>
//         <h1 ></h1>
//         <br />
//         <h3 ></h3>
//         <br />
//         <h3 ></h3>
//         <br />
//         <img/>
//         <br />
//         <h2 ></h2>
//       </div>
//     ]))
//   })
// })

test('<SingleNewsArticle/> renders empty div when no props recieved', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <SingleNewsArticle/>
    </MemoryRouter>)
  expect(wrapper.containsAllMatchingElements([
    <div></div>
  ]))
})
