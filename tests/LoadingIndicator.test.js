import React from 'reactn'
import LoadingIndicator from '../client/components/LoadingIndicator'
import { mount } from 'enzyme'

test('LoadingIndicator contains an image tag', () => {
  const wrapper = mount(<LoadingIndicator />)
  expect(wrapper.containsMatchingElement(<img src="/loading.gif"></img>)).toBeTruthy()
})

