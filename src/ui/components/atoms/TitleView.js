import PropTypes from 'prop-types'

const TitleView = ({ text }) => <h2 className="TitleView">{text}</h2>

TitleView.propTypes = {
  text: PropTypes.string.isRequired
}

TitleView.defaultProps = {
  text: 'Your Title View'
}

export default TitleView
