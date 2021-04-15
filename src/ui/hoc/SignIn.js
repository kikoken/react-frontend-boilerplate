/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// components
import InputEmail from 'ui/components/molecules/forms/InputEmail'
import InputPassword from 'ui/components/molecules/forms/InputPassword'
import ButtonSubmit from 'ui/components/molecules/forms/ButtonSubmit'

// hooks
import usePasswordValidation from 'application/hooks/usePasswordValidation'
import MessageInputError from 'ui/components/atoms/MessageInputError'

// translations
import { useTranslation } from 'react-i18next'

import { actionCreators as authAction } from 'domain/auth/features'

const SignIn = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmpty, setErrorEmpty] = useState(false)
  const [isError, setIsError] = useState(false)

  const { validPassword, verifiedPassword } = usePasswordValidation(password)

  useEffect(() => {
    verifiedPassword(password)
  }, [password])

  useEffect(() => {
    const empty = password.length && userName.length && validPassword
    setErrorEmpty(!!empty)
  }, [password, userName, validPassword])

  const onHandlerSubmit = (e) => {
    e.preventDefault()

    try {
      if (!userName.length || !password.length) throw new Error('Campo obligatorio')

      dispatch(authAction.signin())
      localStorage.setItem('token', 'hahahajajah')
      history.push('/app')
    } catch (error) {
      setIsError(true)
    }
  }

  if (localStorage.getItem('token')) return <Redirect to="/app" />

  return (
    <>
      <form id="f_login" name="f_login">
        <InputEmail
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
        <hr />
        {isError ? <MessageInputError msg={t('form.login.error')} /> : null}
        <ButtonSubmit onClick={onHandlerSubmit} text={t('button.enter')} disabled={errorEmpty} />
      </form>
    </>
  )
}

export default SignIn
