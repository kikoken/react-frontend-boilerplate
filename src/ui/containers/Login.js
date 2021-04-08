// HOC
import { LoginSignIn } from 'ui/hoc'

// Components
import TitleView from 'ui/components/atoms/TitleView'

const Login = () => (
  <section>
    <TitleView text="Login View" />
    <LoginSignIn />
  </section>
)

export default Login
