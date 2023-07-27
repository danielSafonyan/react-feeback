/* eslint-disable react/prop-types */
import { useState } from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem(props) {
    const [rating, ] = useState(props.rating)
    const [text, ] = useState(props.text)
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close"><FaTimes/></button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem
