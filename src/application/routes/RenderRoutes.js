import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import NotFound from 'ui/containers/PageNotFound'
import RouteWithSubRoutes from './RouteWithSubRoute'

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}

    <Route component={<NotFound />} />
  </Switch>
)

RenderRoutes.propTypes = {
  routes: PropTypes.shape([]).isRequired
}

export default RenderRoutes
