import PropTypes from 'prop-types'


function Header(props) {
    const headerStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }
  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI App',
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

Header.propTyppes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    color: PropTypes.string
}

export default Header
