import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <h2>No Feedback Yet</h2>
    }

    const displayedList = feedback.map(el => <FeedbackItem key={el.id} rating={el.rating} text={el.text}/>)
  return (
    <div className='feedback-list'>
      {displayedList}
    </div>
  )
}

export default FeedbackList
