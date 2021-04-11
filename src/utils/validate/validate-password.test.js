import ValidatePassword from './validate-password'

describe('ValidatePassword', () => {
  let password = ''

  test('Password is empty', () => {
    expect(ValidatePassword(password)).toBeFalsy()
  })

  test('Password has not number digit', () => {
    password = 'root'
    expect(ValidatePassword(password)).toBeFalsy()
  })

  test('Password has not uppercase', () => {
    password = 'r1o2o3t4'
    expect(ValidatePassword(password)).toBeFalsy()
  })

  test('Password has not lowercase', () => {
    password = 'R1O2O3T4'
    expect(ValidatePassword(password)).toBeFalsy()
  })

  test('Password has not minimun length', () => {
    password = 'R1o2o3T'
    expect(ValidatePassword(password)).toBeFalsy()
  })

  test('Password is correct', () => {
    password = 'R1o2o3T4'
    expect(ValidatePassword(password)).toBeTruthy()
  })
})
