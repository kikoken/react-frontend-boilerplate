import { useState, useEffect } from 'react'

import { ValidatePassword } from 'utils/validate'

const usePasswordValidation = ({ password }) => {
  const [validPassword, setValidPassword] = useState(false)

  useEffect(() => {
    setValidPassword(ValidatePassword(password))
  }, [password])

  return {
    validPassword
  }
}

export default usePasswordValidation
