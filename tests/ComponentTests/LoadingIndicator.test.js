import React from 'reactn'
import LoadingIndicator from '../../client/components/LoadingIndicator'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

test('IsItBullshit renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <LoadingIndicator />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('LoadingIndicator contains an image tag', () => {
  const wrapper = mount(<LoadingIndicator />)
  expect(wrapper.containsMatchingElement(<img src="/loading.gif"></img>)).toBeTruthy()
})
