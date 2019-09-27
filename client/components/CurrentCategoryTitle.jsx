import React, { useGlobal } from 'reactn'
import { Link } from 'react-router-dom'
import { selectIcon } from '../utils'
import { Icon } from '../styles'

const CurrentCategoryTitle = () => {
  const [selectedCategoryName, setselectedCategoryName] = useGlobal('selectedCategoryName')
  if (selectedCategoryName) {
    return (
  <>
<Link to='/'>
  <Icon onClick={() => selectIcon()} src="article-icon.jpg"></Icon>
</Link>
<h2 className='current-category-title'>{selectedCategoryName}</h2>
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
