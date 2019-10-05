import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import CoolGithubProjectsRedditFeed from '../../client/components/CoolGithubProjectsRedditFeed'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'

test('CoolGithubProjectsRedditFeed renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <CoolGithubProjectsRedditFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('CoolGithubProjectsRedditFeed should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<CoolGithubProjectsRedditFeed />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})

it('h1 should call selectTitle and currentTitleSelected onClick', () => {
  const selectTitleMock = jest.fn()
  const currentTitleSelectedMock = jest.fn()
  const wrapper = mount(<h1 onClick={() => { selectTitleMock(); currentTitleSelectedMock() }}/>)
  wrapper.find('h1').simulate('click')
  expect(selectTitleMock).toBeCalled()
  expect(currentTitleSelectedMock).toBeCalled()
})
