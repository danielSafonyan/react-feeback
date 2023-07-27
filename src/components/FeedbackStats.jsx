
function FeedbackStats(props) {
    const { numReviews, averageRating } = props
  return (
    <div className="feedback-stats">
      <h4>{numReviews} Reviews</h4>
      <h4>Average Rating {averageRating}</h4>
    </div>
  )
}

export default FeedbackStats
