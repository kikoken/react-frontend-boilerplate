import { render } from '@testing-library/react'
import 'application/i18n'

import SignIn from './SignIn'

describe('<SignIn />', () => {
  test('Should SignIn form in spanish', () => {
    const component = render(<SignIn />)

    component.getByText('Usuario')
    component.getByText('Clave')
    component.getByText('Ingresar')
  })
})
