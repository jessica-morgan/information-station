import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import NZGeneralFeed from '../../client/components/NZGeneralFeed'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'

test('NZGeneralFeed renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <NZGeneralFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('NZGeneralFeed should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<NZGeneralFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})
