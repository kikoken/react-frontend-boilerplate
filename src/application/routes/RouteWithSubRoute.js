import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const RouteWithSubRoute = ({ route }) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <Route component {...props} routes={route.routes} />}
  />
)

RouteWithSubRoute.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    routes: PropTypes.shape({})
  }).isRequired
}

export default RouteWithSubRoute
