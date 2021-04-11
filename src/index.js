import React from 'react'
import ReactDOM from 'react-dom'
// Translations
import 'application/i18n'

// Store
import { Provider } from 'react-redux'
import Store from 'infrastructure/store'

// Components
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store().store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
