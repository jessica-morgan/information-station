import React from 'react'
import { shallow } from 'enzyme'
import App from '../../client/components/App'

test('<App /> contains <Nav/> and <Welcome/>', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe('<Nav /><Welcome />')
})
