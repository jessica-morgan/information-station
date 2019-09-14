import React from 'reactn'
import Nav from '../../client/components/Nav'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'

test('Nav renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Nav contains this text', () => {
  const wrapper = shallow(<Nav />)
  expect(wrapper.text()).toMatch('New Zealand' && 'Reddit' && 'News')
})
