import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'
import ReactjsRedditFeed from '../../client/components/ReactjsRedditFeed'

test('ReactjsRedditFeed renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ReactjsRedditFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ReactjsRedditFeed should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<ReactjsRedditFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})
