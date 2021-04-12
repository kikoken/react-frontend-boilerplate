import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const RouteWithSubRoute = ({ route }) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component routes={route.routes} {...props} />}
  />
)

RouteWithSubRoute.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.shape({}))
  })
}

RouteWithSubRoute.defaultProps = {
  route: PropTypes.shape({})
}

export default RouteWithSubRoute
