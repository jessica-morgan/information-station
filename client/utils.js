import { setGlobal } from 'reactn'

export const selectCategory = (category) => {
  setGlobal({
    categorySelected: true,
    titleSelected: false,
    selectedCategoryName: category
  })
}

export const selectTitle = (bool) => {
  setGlobal({
    categorySelected: false,
    titleSelected: bool
  })
}

export const currentTitleSelected = (title) => {
  setGlobal({
    categorySelected: false,
    titleSelected: true,
    currentTitle: title
  })
}
