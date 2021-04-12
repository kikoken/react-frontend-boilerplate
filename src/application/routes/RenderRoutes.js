import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import RouteWithSubRoutes from './RouteWithSubRoute'
import NotFound from 'ui/containers/PageNotFound'

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route, i) => {
      return <RouteWithSubRoutes key={route.key} {...route} />
    })}
    <Route component={<NotFound />} />
  </Switch>
)

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired
}

export default RenderRoutes
