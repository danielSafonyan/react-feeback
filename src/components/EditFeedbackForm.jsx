import { useState } from 'react'
import Card from "./Card"
import Button from './Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ submitHandler, task }) {
    const [text, setText] = useState(task.text)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [rating, setRating] = useState(task.rating)

    function handleTextChange(e) {
        if (e.target.value.length > 10) { setBtnDisabled(false) }
        else { !btnDisabled && setBtnDisabled(true)}
        setText(e.target.value)
    }

    function handleFormSubmit(e) {
      e.preventDefault()
      submitHandler({text: text.trim(), rating, id: task.id})
    }
  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <h2>How would you rate your serivce?</h2>
        <RatingSelect ratingChangeHandler={setRating} rating={rating}/>
        <div className="input-group">
            <input type="text" placeholder="Write a review." value={text} onChange={handleTextChange}/>
            <Button isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
