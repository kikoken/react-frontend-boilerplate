import PropTypes from 'prop-types'

// components
import MessageInputError from 'ui/components/atoms/MessageInputError'

const InputPassword = (props) => {
  const { id, name, label, value, error, placeholder, onChange } = props

  return (
    <div className="Input Input-password">
      <label htmlFor={name}>
        <span className="Input-label">{label}</span>
        <input
          id={id}
          name={name}
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
        />
        {error ? <MessageInputError msg={error} /> : null}
      </label>
    </div>
  )
}

InputPassword.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

InputPassword.defaultProps = {
  error: false
}

export default InputPassword
