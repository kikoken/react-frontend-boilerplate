import PropTypes from 'prop-types'

const ButtonSubmit = ({ text, onClick }) => (
  <button className="Button Button-submit" type="submit" onClick={onClick}>
    {text}
  </button>
)

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonSubmit
