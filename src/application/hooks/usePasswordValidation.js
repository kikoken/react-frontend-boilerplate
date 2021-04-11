import { useState, useEffect } from 'react'

import { ValidatePassword } from 'utils/validate'

const usePasswordValidation = () => {
  const [validPassword, setValidPassword] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    setValidPassword(ValidatePassword(password))
  }, [password])

  const verifiedPassword = (pass) => setPassword(pass)

  return {
    validPassword,
    verifiedPassword
  }
}

export default usePasswordValidation
