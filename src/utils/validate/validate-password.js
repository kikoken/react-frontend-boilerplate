/**
 * Validate the password
 * @description verified that ,
 * almost one digit,
 * almost a once lowercase and once uppercase,
 * almost 8 minimun length
 */
const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const ValidatePassword = (password) => {
  if (typeof password !== 'string') return false
  if (password.length !== 8) return false
  if (!regExp.test(password)) return false

  return true
}

export default ValidatePassword
