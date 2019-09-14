import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import SpaceFeed from '../../client/components/SpaceFeed'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'

test('SpaceFeed renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <SpaceFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SpaceFeed should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<SpaceFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})