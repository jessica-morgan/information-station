import React, { useGlobal } from 'reactn'
import { Icon } from '../styles'

const CurrentCategoryTitle = () => {
  const [selectedCategoryName, setselectedCategoryName] = useGlobal('selectedCategoryName')
  if (selectedCategoryName) {
    return (
  <>

<Icon src="article-icon.jpg"></Icon><h2 className='current-category-title'>{selectedCategoryName}</h2>
    </>
    )
  } else {
    return (
    <>
    <Icon src="article-icon.jpg"></Icon>
    </>
    )
  }
}

export default CurrentCategoryTitle
