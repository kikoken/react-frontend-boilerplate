/* eslint-disable no-console */
import { useState, useEffect } from 'react'

// components
import InputText from 'ui/components/molecules/forms/InputText'
import InputPassword from 'ui/components/molecules/forms/InputPassword'
import ButtonSubmit from 'ui/components/molecules/forms/ButtonSubmit'

// hooks
import usePasswordValidation from 'application/hooks/usePasswordValidation'

const LoginSignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { validPassword, verifiedPassword } = usePasswordValidation(password)

  useEffect(() => {
    console.log(validPassword)
    verifiedPassword(password)
  }, [password])

  const onHandlerSubmit = (e) => {
    e.preventDefault()

    // eslint-disable-next-line no-console
    console.log('Submit form')
  }

  return (
    <>
      <form id="f_login" name="f_login">
        <InputText
          id="username"
          name="username"
          error={null}
          value={userName}
          placeholder="Username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputPassword
          id="password"
          name="password"
          error={null}
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonSubmit onClick={onHandlerSubmit} text="Sign In" />
      </form>
    </>
  )
}

export default LoginSignIn
