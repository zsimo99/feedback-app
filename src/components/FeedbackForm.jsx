import { useState ,useContext, useEffect} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text,setText]=useState("")
    const [rating,setRating]=useState(10)
    const [btnDisabled,setBtnDesabled]=useState(true)
    const [message,setMessage]=useState("")
    
    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDesabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit]
    )
    const handleTextChange=(e)=>{
        if(text.length<10){
            setBtnDesabled(true)
            setMessage("u need more than 10 characters")
        }else{
            setBtnDesabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newFeedback={
            text,rating
        }
        if(feedbackEdit.edit===true){
            updateFeedback(feedbackEdit.item.id,newFeedback)
        }else{
            addFeedback(newFeedback)
        }
        setText("")
        setBtnDesabled(true)
    }
  return (
    <Card reverse={false}>
        <form onSubmit={handleSubmit}>
            <h2>how would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="write a review" value={text}/>
                <Button type="submit" version="primary" isDisabled={btnDisabled} >Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm