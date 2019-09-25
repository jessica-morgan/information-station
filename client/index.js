import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './components/App'
import React, { setGlobal } from 'reactn'

setGlobal({
  categorySelected: false,
  titleSelected: false,
  selectedCategoryName: ''
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})
