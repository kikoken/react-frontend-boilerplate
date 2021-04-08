import { useState } from 'react'

//components
import InputText from 'ui/components/molecules/formsInputText'
import InputPassword from 'ui/components/molecules/forms/InputPassword'
import ButtonSubmit from 'ui/components/molecules/forms/ButtonSubmit'

// utils
import { ValidateUsername, ValidatePassword } from 'utils/validate'

const LoginSignIn = () => {
  const [userName, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorUsername, setErrorUsername] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const onHandlerSubmit = () => console.log('Submit form')

  return (
    <>
      <form id="f_login" name="f_login">
        <InputText
          id="username"
          name="username"
          error={errorUsername}
          value={userName}
          placeholder="Username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputPassword
          id="password"
          name="password"
          error={errorPassword}
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonSubmit onClick={onHandlerSubmit} text={'Sign In'} />
      </form>
    </>
  )
}

export default LoginSignIn
