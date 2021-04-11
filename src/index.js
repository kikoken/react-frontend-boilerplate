import React from 'react'
import ReactDOM from 'react-dom'
// Translations
import 'application/i18n'

// Components
import App from './App'

// Store
import { Provider } from 'react-redux'
import { store } from 'infrastructure/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
