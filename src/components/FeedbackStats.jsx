import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackStats() {
  const {Feedback}=useContext(FeedbackContext)

 

    let average=Feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/Feedback.length
    average =average.toFixed(1).replace(/[.,]0$/,"")
  return (
    <div className="feedback-stats">
      <h4>{Feedback.length} Review</h4>
      <h4>Average Rating : {isNaN(average)? 0:average}</h4>
    </div>
  )
}

// FeedbackStats.propsTypes={
//     feedback:propsTypes.array.isRequired
// }

export default FeedbackStats
