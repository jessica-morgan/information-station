import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import JavascriptRedditFeed from '../../client/components/JavascriptRedditFeed'
import { mount } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'

test('JavascriptRedditFeed feed renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <JavascriptRedditFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('JavascriptRedditFeed should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<JavascriptRedditFeed />)
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