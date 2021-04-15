import React from 'react'
import ReactDOM from 'react-dom'
// Translations
import 'application/i18n'

// Store
import { Provider } from 'react-redux'
import getStore from 'infrastructure/store'

// Components
import App from './App'

const { store } = getStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
