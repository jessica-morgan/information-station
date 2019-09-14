import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'
import RetconnedFeed from '../../client/components/RetconnedRedditFeed'

test('IsItBullshit renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <RetconnedFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('IsItBullshit should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<RetconnedFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})