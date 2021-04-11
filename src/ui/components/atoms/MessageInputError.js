import PropTypes from 'prop-types'

const MessageInputError = ({ msg }) => <span className="Message-input--error">{msg}</span>

MessageInputError.propTypes = {
  msg: PropTypes.string.isRequired
}

export default MessageInputError
