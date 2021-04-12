/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

// components
import InputText from 'ui/components/molecules/forms/InputText'
import InputPassword from 'ui/components/molecules/forms/InputPassword'
import ButtonSubmit from 'ui/components/molecules/forms/ButtonSubmit'

// hooks
import usePasswordValidation from 'application/hooks/usePasswordValidation'
import MessageInputError from 'ui/components/atoms/MessageInputError'

// translations
import { useTranslation } from 'react-i18next'

const SignIn = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmpty, setErrorEmpty] = useState(false)

  const { validPassword, verifiedPassword } = usePasswordValidation(password)

  useEffect(() => {
    verifiedPassword(password)
  }, [password])

  const onHandlerSubmit = (e) => {
    e.preventDefault()

    try {
      if (!userName.length || !password.length) throw new Error('Campo obligatorio')

      localStorage.setItem('token', 'hahahajajah')
      history.push('/app')
    } catch (error) {
      setErrorEmpty(true)
    }
  }

  if (localStorage.getItem('token')) return <Redirect to="/app" />

  return (
    <>
      <form id="f_login" name="f_login">
        <InputText
          id="username"
          name="username"
          label={t('form.field.username')}
          error={null}
          value={userName}
          placeholder={t('form.field.username')}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputPassword
          id="password"
          name="password"
          label={t('form.field.password')}
          error={password.length && !validPassword ? ' Error password' : null}
          value={password}
          placeholder={t('form.field.password')}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorEmpty ? <MessageInputError error={t('form.error.field.required')} /> : null}
        <hr />
        <ButtonSubmit onClick={onHandlerSubmit} text={t('button.enter')} />
      </form>
    </>
  )
}

export default SignIn
