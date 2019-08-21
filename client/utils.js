import { setGlobal } from 'reactn'

// const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')

const selectCategory = () => {
  setGlobal({
    categorySelected: true,
    titleSelected: false
  })
}

const selectTitle = (bool) => {
  setGlobal({
    categorySelected: false,
    titleSelected: bool
  })
}

const currentTitleSelected = (title) => {
  setGlobal({
    categorySelected: false,
    titleSelected: true,
    currentTitle: title
  })
}

module.exports = {
  selectTitle,
  selectCategory,
  currentTitleSelected
}
