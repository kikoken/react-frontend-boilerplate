import { BrowserRouter as Router } from 'react-router-dom'

import RouterConfig from 'application/routes'

function App() {
  return (
    <div>
      <h1>Arquetipo SimpliRoute</h1>
      <Router>
        <RouterConfig />
      </Router>
    </div>
  )
}

export default App
