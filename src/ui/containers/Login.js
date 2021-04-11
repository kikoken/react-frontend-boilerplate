// HOC
import { SignIn } from 'ui/hoc'

// Components
import TitleView from 'ui/components/atoms/TitleView'

const Login = () => (
  <section>
    <TitleView text="Login View" />
    <SignIn />
  </section>
)

export default Login
