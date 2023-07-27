import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Button
