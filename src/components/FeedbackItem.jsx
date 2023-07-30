/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { LiActionsContext } from '../context'
import Card from './Card'
import { FaTimes, FaPenSquare } from 'react-icons/fa'

function FeedbackItem({rating, text, id}) {
const {deleteFeedbackHandler, editFeedbackHandler} = useContext(LiActionsContext)
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedbackHandler(id)} className="close"><FaTimes/></button>
      <button onClick={() => editFeedbackHandler({rating, text, id})} className="edit"><FaPenSquare/></button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem
