import { setGlobal } from 'reactn'

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

module.exports = {
  selectTitle,
  selectCategory
}
