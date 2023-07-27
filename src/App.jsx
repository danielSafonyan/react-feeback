import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

import feedbackData from './feedbackData'

function App() {
  const [feedback, setFeedback] = useState(feedbackData)
  function getAverageRating() {
    const total = feedback.reduce((accum, curr) => accum + curr.rating, 0)
    const result = (total / feedback.length).toFixed(1)
    return isNaN(result) ? 0 : result
  }

  function addFeedbackHandler(feedBackObj) {
    console.log("I am here")
    const newFeedback = {
      ...feedBackObj,
      id: uuid()
    }
    setFeedback(prev => [...prev, newFeedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm submitHandler={addFeedbackHandler}/>
        <FeedbackStats numReviews={feedback.length} averageRating={getAverageRating()}/>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}

export default App
