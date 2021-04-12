import { BrowserRouter as Router } from 'react-router-dom'

import ROUTES from 'application/routes'
import RenderRoutes from 'application/routes/RenderRoutes'

function App() {
  return (
    <main>
      <h1>Arquetipo SimpliRoute</h1>
      <Router>
        <RenderRoutes routes={ROUTES} />
      </Router>
    </main>
  )
}

export default App
