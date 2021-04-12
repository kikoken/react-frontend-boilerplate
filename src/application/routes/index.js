import { Redirect } from 'react-router-dom'

// Components
import RenderRoutes from './RenderRoutes'

// Pages
import Login from 'ui/containers/Login'

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
        component: (props) => <h1>APP ROOT</h1>
      },
      {
        path: '/app/page',
        key: 'APP_PAGE',
        exact: true,
        component: (props) => <h1>APP PAGE</h1>
      }
    ]
  }
]

export default ROUTES
