const initialCategoryState = { categoryState: '' }

const categorySelected = (state = initialCategoryState, action) => {
  switch (action.type) {
    case 'SELECTED_CATEGORY':
      return {
        categoryState: action.category
      }

    default:
      return state
  }
}

export default categorySelected
