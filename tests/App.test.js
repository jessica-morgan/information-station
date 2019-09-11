// // test that App contains correct components

// // break that mf down
// describe('Category toggle', () => {
//   it('handles ternery correctly', () => {
//     const category = 'meat'
//     expect(category ? 'truthy' : null).toBeTruthy()
//   })

//   it('fails on falsy', () => {
//     const category = null
//     expect(category ? 'truthy' : null).toBeFalsy()
//   })

//   it('dispatches getFoods', () => {
//     const match = { params: { id: 3 }, path: 'category' }
//     const mockStore = configureStore([thunk])({
//       foods: [{ name: 'carrot', id: 2 }],
//       info: { pending: false, error: null },
//       categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
//     })
//     const wrapper = mount(
//       <Provider store={mockStore}>
//         <Router>
//           <FoodList match={match}/>
//         </Router>
//       </Provider>
//     )
//     const actions = wrapper.state().subscription.store.getActions()[0]
//     expect(actions).toStrictEqual({ type: 'GET_FOODS_PENDING' })
//   })
//   it('dispatches getFoods when category exists', () => {
//     const match = { params: { id: 3 }, path: 'category', category: 'meat' }
//     const mockStore = configureStore([thunk])({
//       foods: [{ name: 'carrot', id: 2 }],
//       info: { pending: false, error: null },
//       categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
//     })
//     const wrapper = mount(
//       <Provider store={mockStore}>
//         <Router>
//           <FoodList match={match}/>
//         </Router>
//       </Provider>
//     )
//     const actions = wrapper.state().subscription.store.getActions()[0]
//     expect(actions).toStrictEqual({ type: 'GET_FOODS_PENDING' })
//   })
// })


// // this doesn't actually seem to be explicitly testing that FoodList contains Food
// test('<FoodList /> contains <Food /> component', () => {
//   // asssign mockStore to mocked redux data
//   const mockStore = configureStore([thunk])(
//     {
//       foods: [{ name: 'carrot', id: 2 }],
//       info: { pending: false, error: null },
//       categories: [{ id: 1, name: 'Vegetables' }, { id: 2, name: 'Meat' }]
//     })
//   // assign wrapper to mount Route passing it FoodList component and passing provider mockStore data
//   const wrapper = mount(
//     <Provider store={mockStore}>
//       <Router>
//         <Route component={FoodList} />
//       </Router>
//     </Provider>
//   )
//   // expect wrapper's text to match 'carrot' so I guess that the text of the FoodList in this instance should be coming
//   // from the foods[0].name making it carrot
//   expect(wrapper.text()).toMatch('carrot')
// })
