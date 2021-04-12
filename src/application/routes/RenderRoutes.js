import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import NotFound from 'ui/containers/PageNotFound'

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    ))}
    <Route path="*" component={NotFound} />
  </Switch>
)

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default RenderRoutes
