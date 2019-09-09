import React from 'react'
import IsItBullshitRedditFeed from '../client/components/IsItBullshitRedditFeed'
import { mount, shallow } from 'enzyme'

// test that use global fns are called with correct properties
// figure out how to test useeffect and that it calls the api?
// test that setPosts sets 'posts' state with returned data?
// test that the expected number of h1s are rendered (check api fetch limit for expected number)
// test that component passes correct props down to SingleRedditPost

it('h1 should call selectTitle and currentTitleSelected onClick', () => {
  const selectTitleMock = jest.fn()
  const currentTitleSelectedMock = jest.fn()
  const wrapper = mount(<h1 onClick={() => { selectTitleMock(); currentTitleSelectedMock() }}/>)
  wrapper.find('h1').simulate('click')
  expect(selectTitleMock).toBeCalled()
  expect(currentTitleSelectedMock).toBeCalled()
})

// it('handleChange changes state of the component', () => {
//   // assign wrapper to mount AddFood
//   const wrapper = mount(
//     <Provider store={mockStore}>
//       <AddFood />
//     </Provider>
//   )
//   const app = wrapper.instance()
//   app.handleChange = () => {
//     app.setState({ carbon_output: 555 })
//   }
//   app.handleChange()
//   expect(app.state.carbon_output).toBe(555)
// })

const video = {
  play() {
    return true;
  },
};

module.exports = video;

Example test:

const video = require('./video');

test('plays video', () => {
  // assign spy to jest.spyOn video (the object) and 'play' the method name
  const spy = jest.spyOn(video, 'play');
  // assign isPlaying to be the video object grabbing the play property
  const isPlaying = video.play();
  // expect spy to have been called
  expect(spy).toHaveBeenCalled()
  // and expect isPlaying to be true
  expect(isPlaying).toBe(true);
  // restores the original (non-mocked) implementation.
  spy.mockRestore();
});

describe('onclick function is called ...', () => {
  it.only('spyOn', () => {
    const wrapper = mount(
      <Keyboard
        _getData = { () => {} }
        _erase = { () => {} }
        _get_letters = { () => {} }
        _createWord = { () => {} }
        _modeSwitch = { () => {} }
      />
    )

    const spy = jest.spyOn(wrapper.instance(), '_handleClick')
    wrapper.instance().forceUpdate()

    wrapper.find('#keyboard_clickable').simulate('click', {
      target: {
        parentElement: { id: 5 },
        id: 6
      }
    })
    expect(spy).toHaveBeenCalled()

  })
})

// test('Shows widget details', () => {
//   // assigning data to widgets
//   const widgets = [{ name: 'red', id: 1 }, { name: 'blue', id: 2 }]
//   // assign wrapper to <App />
//   const wrapper = mount(<App />)
//   // set App's State uing widgets data
//   wrapper.setState({ widgets })
//   // now expect classname .widget-details to not be foud
//   expect(wrapper.find('.widget-details').exists()).toBeFalsy()
//   // create an instance of showDetails fn in App, send it the first object in widgets
//   wrapper.instance().showDetails(widgets[0])
//   // then mount App
//   wrapper.mount()
//   // and expect classname .widget-details to exist
//   expect(wrapper.find('.widget-details').exists()).toBeTruthy()
// })

// test('Renders add form when clicked', () => {
//   // assign wrapper to mount <App />
//   const wrapper = mount(<App />)
//   // expect not to find classname .add-widget in <App />
//   expect(wrapper.find('.add-widget').exists()).toBeFalsy()
//   // find the button with id of show-widget-link, simulate a click
//   wrapper.find('#show-widget-link').simulate('click')
//   // then expect classname add-widget to exist
//   expect(wrapper.find('.add-widget').exists()).toBeTruthy()
// })

// test('<Food /> passes correct props down to <Label />', () => {
//   // assign data to props data
//   const data = {
//     id: 4,
//     name: 'Broccoli',
//     carbonOutput: 5.71,
//     waterUsage: 322
//   }
//   // assign wrapper to shallow render Food component wrapped in router passed data as prop
//   const wrapper = shallow(
//     <Router>
//       <Food food={data}/>
//     </Router>
//   )
//   // assign carbonOutput to Food component.children.props.food (the prop) .carbonOutput (specific property in data (prop) object)
//   const carbonOutput = wrapper.children().props().food.carbonOutput
//   // assign waterUsage to Food component.children.props.food (the prop) . waterUsage (specific property in data (prop) object)
//   const waterUsage = wrapper.children().props().food.waterUsage
//   // expect carbonOutPut property toBe 5.71
//   expect(carbonOutput).toBe(5.71)
//   // expect waterUsage property toBe 322
//   expect(waterUsage).toBe(322)
// })

// describe('FoodDetails', () => {
//   it('has <WaitIndicator /> if pending is true', () => {

//     const match = { params: { foodId: 1 } }
//     // mocking redux store setting info.pending to true so that the test knows the component is waiting to load
//     const mockStore = configureStore([thunk])({ foodDetails: { name: 'Turkey' }, info: { pending: true, error: null } })
//     // assign wrapper to mount FoodDetails component, wrapped in provider which is passed the mockStore
//     const wrapper = mount(
//       <Provider store={mockStore}>
//         <FoodDetails match={match}/>
//       </Provider>
//     )
//     // assign actual to find an instance of WaitIndicator in the FoodDetails component and get it length
//     const actual = wrapper.find('WaitIndicator').length
//     // and expect the length of actual to be one- I guess checking that there is one WaitIndicator present?? why not
//     // just check that it's true?
//     expect(actual).toBe(1)
//   })
