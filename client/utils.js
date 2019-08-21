import { setGlobal } from 'reactn'

// const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')

const selectCategory = () => {
  setGlobal({
    categorySelected: true,
    titleSelected: false
  })
}

const selectTitle = (param) => {
  setGlobal({
    categorySelected: false,
    titleSelected: param
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
