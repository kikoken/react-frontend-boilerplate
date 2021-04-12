import { Redirect } from 'react-router-dom'

import Login from 'ui/containers/Login'
import RenderRoutes from './RenderRoutes'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: Login },
  {
    path: '/app',
    key: 'APP',
    component: (props) => {
      if (!localStorage.getItem('token')) return <Redirect to="/" />

      return <RenderRoutes {...props} />
    },
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: () => <h2>App Index</h2>
      },
      {
        path: '/app/page',
        key: 'APP_PAGE',
        exact: true,
        component: () => <h2>App Page</h2>
      }
    ]
  }
]

export default ROUTES
