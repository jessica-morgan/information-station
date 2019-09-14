import React from 'reactn'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import SingleRedditPost from '../../client/components/SingleRedditPost'
const redditApi = require('../../client/api/redditApi')

test('<SingleRedditPost /> recieves correct data as props', () => {
  return redditApi.getProgrammerHumorFeed().then(response => {
    const wrapper = shallow(
      <MemoryRouter>
        <SingleRedditPost posts={response[0]}/>
      </MemoryRouter>
    )
    expect(wrapper.children().props().posts).toEqual(expect.objectContaining({
      title: expect.anything() || null,
      body: expect.anything() || null,
      image: expect.anything() || null,
      dateCreated: expect.anything() || null,
      postAuthor: expect.anything() || null,
      upVotes: expect.anything() || null
    })
    )
  })
})

test('<SingleRedditPost/> contains correct tags when passed props', () => {
  return redditApi.getProgrammerHumorFeed().then(response => {
    const wrapper = mount(
      <MemoryRouter>
        <SingleRedditPost posts={response}/>
      </MemoryRouter>
    )
    expect(wrapper.containsAllMatchingElements([
      <div key={'title'}>
        <h1></h1>
        <br />
        <h3 ></h3>
        <br />
        <h3></h3>
        <br />
        <img/>
        <br />
        <h2></h2>
        <br />
        <h3></h3>
      </div>
    ]))
  })
})

test('<SingleRedditPost/> renders empty div when no props recieved', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <SingleRedditPost/>
    </MemoryRouter>)
  expect(wrapper.containsAllMatchingElements([
    <div></div>
  ]))
})
