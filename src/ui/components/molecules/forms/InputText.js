import PropTypes from 'prop-types'

// components
import MessageInputError from 'ui/components/atoms/MessageInputError'

const InputText = (props) => {
  const { id, name, label, value, error, placeholder, onChange } = props

  return (
    <div className="Input Input-text">
      <label htmlFor={name}>
        <span className="Input-label">{label}</span>
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
      {!error ?? <MessageInputError msg={error} />}
    </div>
  )
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

InputText.defaultProps = {
  error: undefined
}

export default InputText
