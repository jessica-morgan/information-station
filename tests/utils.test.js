import utils from '../client/utils'

test('selectTitle changes titleSelected to true', function () {
  const bool = true
  const actual = {
    categorySelected: false,
    titleSelected: bool
  }
  const expected = {
    categorySelected: false,
    titleSelected: true
  }
  utils.selectTitle(bool)
  expect(actual).toEqual(expected)
})

test('currentTitleSelected takes a title and assigns it to the value of currentTitle', function () {
  const title = 'new title'
  const actual = {
    categorySelected: false,
    titleSelected: true,
    currentTitle: title
  }
  const expected = {
    categorySelected: false,
    titleSelected: true,
    currentTitle: 'new title'
  }
  utils.currentTitleSelected(title)
  expect(actual).toEqual(expected)
})
