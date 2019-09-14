import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'
import TooAfraidToAskFeed from '../../client/components/TooAfraidToAskFeed'

test('IsItBullshit renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <TooAfraidToAskFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('IsItBullshit should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<TooAfraidToAskFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})
