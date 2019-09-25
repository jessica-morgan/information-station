import React, { useGlobal } from 'reactn'

const CurrentCategoryTitle = () => {
  const [selectedCategoryName, setselectedCategoryName] = useGlobal('selectedCategoryName')
  if (selectedCategoryName) {
    return (
  <>
    <h2 className='current-category-title'>{selectedCategoryName}</h2>
    </>
    )
  } else {
    return (
    <>
        <h2 className='welcome'>Welcome, please select a category</h2>

    </>
    )
  }
}

export default CurrentCategoryTitle
