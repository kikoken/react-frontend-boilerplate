import { Switch, Route } from 'react-router-dom'

// Pages
import NotFound from 'ui/containers/PageNotFound'
import Login from 'ui/containers/Login'

// component Route
import PrivateRoute from './PrivateRoute'

const RouterConfig = () => (
  <Switch>
    <Route exact path="/" component={Login} />

    <PrivateRoute path="/private">
      <PrivatePage />
    </PrivateRoute>

    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default RouterConfig
