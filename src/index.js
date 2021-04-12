import React from 'react'
import ReactDOM from 'react-dom'
// Translations
import 'application/i18n'

// Store
/* mport { Provider } from 'react-redux'
import Store from 'infrastructure/store' */

// Components
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
