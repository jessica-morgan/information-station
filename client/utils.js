import { setGlobal } from 'reactn'

export const selectCategory = () => {
  setGlobal({
    categorySelected: true,
    titleSelected: false
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

