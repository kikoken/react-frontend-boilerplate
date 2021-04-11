import { useState } from 'react'

import { ValidatePassword } from 'utils/validate'

const usePasswordValidation = () => {
  const [validPassword, setValidPassword] = useState(false)

  const verifiedPassword = (password) => setValidPassword(ValidatePassword(password))

  return {
    validPassword,
    verifiedPassword
  }
}

export default usePasswordValidation
