import { BrowserRouter as Router } from 'react-router-dom'

import RenderRoutes from './RenderRoutes'
import ROUTES from './Routes'

const RouteConfig = () => (
  <Router>
    <RenderRoutes routes={ROUTES} />
  </Router>
)

export default RouteConfig
