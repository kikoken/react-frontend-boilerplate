import PropTypes from 'prop-types'

// components
import MessageInputError from 'ui/components/atoms/MessageInputError'

const InputText = (props) => {
  const { id, name, value, error, placeholder, onChange } = props

  return (
    <div className="Input Input-text">
      <label htmlFor={name}>
        <span className="Input-label">{name}</span>
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {!error ?? <MessageInputError msg={error} />}
      </label>
    </div>
  )
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

InputText.defaultProps = {
  error: undefined
}

export default InputText
