import { setGlobal } from 'reactn'

const selectCategory = () => {
  setGlobal({
    categorySelected: true
  })
}

const selectTitle = () => {
  setGlobal({
    titleSelected: true
  })
}

module.exports = {
  selectTitle,
  selectCategory
}
