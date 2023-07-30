import { useState, useContext } from 'react'
import { LiActionsContext } from './context'

import { v4 as uuid } from 'uuid';
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import EditFeedbackForm from './components/EditFeedbackForm'

import feedbackData from './feedbackData'

function App() {
  const [feedback, setFeedback] = useState(feedbackData)
  const [isEditing, setIsEditing] = useState(false)
  function getAverageRating() {
    const total = feedback.reduce((accum, curr) => accum + curr.rating, 0)
    const result = (total / feedback.length).toFixed(1)
    return isNaN(result) ? 0 : result
  }

  function deleteFeedbackHandler(feedbackId) {
    setFeedback(prev => prev.filter(el => {
      return String(el.id) !== String(feedbackId)
    }))
  }

  function editFeedbackHandler(feedbackId) {
    setIsEditing(feedbackId)
  }

  function submitEditFeedbackHandler(feedBackObj) {
    console.log("I am her!")
    setFeedback(prev => prev.map(el => String(el.id) === String(feedBackObj.id )? feedBackObj : el))
    setIsEditing(false)
  }

  function addFeedbackHandler(feedBackObj) {
    const newFeedback = {
      ...feedBackObj,
      id: uuid()
    }
    setFeedback(prev => [newFeedback, ...prev])
  }

  return (
    <>
      <Header />
      <div className="container">
        {isEditing ? <EditFeedbackForm task={isEditing} submitHandler={submitEditFeedbackHandler}/> : <FeedbackForm submitHandler={addFeedbackHandler}/>}
        <FeedbackStats numReviews={feedback.length} averageRating={getAverageRating()}/>
        <LiActionsContext.Provider value={{deleteFeedbackHandler, editFeedbackHandler}}>
          <FeedbackList feedback={feedback} />
        </LiActionsContext.Provider>
      </div>
    </>
  )
}

export default App
