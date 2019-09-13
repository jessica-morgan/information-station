import React from 'reactn'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import IsItBullshitRedditFeed from '../client/components/IsItBullshitRedditFeed'
import { mount } from 'enzyme'

test('IsItBullshit renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <IsItBullshitRedditFeed />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// import ReactTestRenderer from 'react-test-renderer'
// import retry from '@skidding/async-retry'

// TESTING THAT USEGLOBAL IS CALLED WITH CORRECT VALUE ON BUTTON CLICK
// import {useGlobal} from 'reactn';
// // IsItBs isn't actually calling useGlobal functions its just using properties of global state
// describe('Testing a Test', () => {
//   it('Calling SetSomething', () => {
//     const something = 'some-value';
//     const setSomething = jest.fn();
//     useGlobal.mockImplementationOnce(() => [something, setSomething]);
//     const wrapper = shallow(<SomeComponent />);
//     const somethingButton = wrapper.find('#somethingButton').simulate('click', {});
//     expect(setSomething).toBeCalledWith('foo-bar');
//     expect(useGlobal).toBeCalledWith(['something']);
//     expect(useGlobal.mock.calls.map(call => call[0])).toEqual(['something']);
//   });
// });

// TESTING THAT HANDLECHANGE USES SETSTATE CORRECTLY- THAT AFTER HANDLECHANGE
// IS CALLED EXPECT THE STATE TO BE THIS
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

// TESTING THAT A SPECIFIC CLASSNAME IS ABSENT BEFORE SETTING STATE
// AND THAT IT IS PRESENT AFTER SETTING STATE
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

// TESTING THAT A CLASSNAME IS ABSENT BEFORE A BUTTON ONCLICK EVENT
// THEN TESTING THAT IT IS PRESENT AFTER ONCLICK EVENT
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

// import { act } from 'jest'

// it('component conditional rendering', () => {
//   test('act works in this case', async () => {
//     await act(async () => {
//       const posts = true
//       const titleSelected = true
//       const wrapper = mount(<IsItBullshitRedditFeed posts={posts} titleSelected={titleSelected}/>)
//       expect(wrapper.find('#titles').exists()).toBeTrue()

//       wrapper.find('#list').simulate('click')
//       expect(wrapper.find('#singlePost').exists()).toBeTruthy()
//     })
//   })
// })

// TESTING THAT A COMPONENT IS PASSING THE CORRECT PROPS TO CHILD
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

// TESTING THAT WHILE PENDING IS TRUE THE WAIT INDICATOR CAN BE FOUND
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
//     // assign actual to find an instance of WaitIndicator in the FoodDetails component and get its length
//     const actual = wrapper.find('WaitIndicator').length
//     // and expect the length of actual to be one- I guess checking that there is one WaitIndicator present?? why not
//     // just check that it's true?
//     expect(actual).toBe(1)
//   })

// TEST THAT IF POSTS AND CATEGORYSELECTED IS TRUE DIV ID 'TITLES' IS PRESENT
// it('renders a list of titles if posts and categorySelected are true', () => {
//   const posts = true
//   const categorySelected = true
//   const wrapper = mount(<IsItBullshitRedditFeed posts={posts} categorySelected={categorySelected} />)
//   const actual = wrapper.find('#titles')
//   expect(actual).toBe(true)
// })

it('h1 should call selectTitle and currentTitleSelected onClick', () => {
  const selectTitleMock = jest.fn()
  const currentTitleSelectedMock = jest.fn()
  const wrapper = mount(<h1 onClick={() => { selectTitleMock(); currentTitleSelectedMock() }}/>)
  wrapper.find('h1').simulate('click')
  expect(selectTitleMock).toBeCalled()
  expect(currentTitleSelectedMock).toBeCalled()
})
