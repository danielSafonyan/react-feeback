import { useState } from 'react'
import Card from "./Card"
import Button from './Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ submitHandler }) {
  console.log(submitHandler)
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)

    function handleTextChange(e) {
        if (e.target.value.length > 10) { setBtnDisabled(false) }
        else { !btnDisabled && setBtnDisabled(true)}
        setText(e.target.value)
    }

    function handleFormSubmit(e) {
      e.preventDefault()
      setText('')
      setRating(10)
      submitHandler({text, rating})
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
