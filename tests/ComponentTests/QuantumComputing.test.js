import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import QuantumComputingFeed from '../../client/components/QuantumComputingFeed'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'

test('QuantumComputingFeed renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <QuantumComputingFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('QuantumComputingFeed should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<QuantumComputingFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})
