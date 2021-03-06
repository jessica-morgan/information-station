import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'
import ProgrammerHumorFeed from '../../client/components/ProgrammerHumorRedditFeed'

test('ProgrammerHumor renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ProgrammerHumorFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ProgrammerHumor should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<ProgrammerHumorFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})
