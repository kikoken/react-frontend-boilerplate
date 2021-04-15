import PropTypes from 'prop-types'

const ButtonSubmit = ({ text, onClick, disabled }) => (
  <button className="Button Button-submit" type="submit" onClick={onClick} disabled={!disabled}>
    {text}
  </button>
)

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

ButtonSubmit.defaultProps = {
  disabled: false
}

export default ButtonSubmit
