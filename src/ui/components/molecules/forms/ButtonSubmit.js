import PropTypes from 'prop-types'

const ButtonSubmit = ({ label, onClick }) => (
  <button className="Button Button-submit" type="submit" onClick={onClick}>
    {label}
  </button>
)

ButtonSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonSubmit
