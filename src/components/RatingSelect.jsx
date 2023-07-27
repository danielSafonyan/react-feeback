import PropTypes from 'prop-types'
import RatingInputLi from './RatingInputLi'
function RatingSelect({ range, ratingChangeHandler, rating }) {
    const ratingRange = Array(range).fill().map((el, idx) => {
    return <RatingInputLi 
        key={idx + 1} 
        value={idx + 1} 
        changeHandler={() => ratingChangeHandler(idx + 1)} 
        isChecked={rating === idx + 1}
    />
})
  return (
    <ul className="rating">
        {ratingRange}
    </ul>
  )
}

RatingSelect.defaultProps = {
    range: 10,
}

RatingSelect.propTypes = {
    range: PropTypes.number,
    rating: PropTypes.number,
    ratingChangeHandler: PropTypes.func,
}

export default RatingSelect
