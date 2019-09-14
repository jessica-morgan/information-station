import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import AstronomyPicOfTheDay from '../../client/components/AstronomyPicOfTheDay'
import { mount, shallow } from 'enzyme'
import LoadingIndicator from '../../client/components/LoadingIndicator'
const nasaApi = require('../../client/api/nasaApi')

test('AstronomyPicOfTheDay renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <AstronomyPicOfTheDay />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AstronomyPicOfTheDay should render LoadingIndicator if posts is not yet set with api data', done => {
  const wrapper = mount(<AstronomyPicOfTheDay />)
  setImmediate(() => {
    wrapper.update()
    expect(wrapper.containsMatchingElement(<LoadingIndicator></LoadingIndicator>)).toBeTruthy()
    done()
  })
})

test('AstronomyPicOfTheDay contains correct tags when passed props', () => {
  return nasaApi.getApod().then(response => {
    const wrapper = mount(
      <MemoryRouter>
        <AstronomyPicOfTheDay posts={response}/>
      </MemoryRouter>
    )
    expect(wrapper.containsAllMatchingElements([
      <div key={'title'}>
        <h1></h1>
        <img/>
        <h3></h3>
        <h2></h2>
      </div>
    ]))
  })
})

test('AstronomyPicOfTheDay renders empty div when no props recieved', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <AstronomyPicOfTheDay/>
    </MemoryRouter>)
  expect(wrapper.containsAllMatchingElements([
    <div></div>
  ]))
})
