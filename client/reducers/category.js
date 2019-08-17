const initialCategoryState = { categoryState: '' }

export const selectedCategory = (state = initialCategoryState, action) => {
  switch (action.type) {
    case 'SELECTED_CATEGORY':
      return {
        categoryState: action.category
      }

    default:
      return state
  }
}

export default selectedCategory
