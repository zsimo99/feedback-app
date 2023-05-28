import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion} from "framer-motion"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'


function FeedbackList() {
  const {Feedback}=useContext(FeedbackContext)

    if(!Feedback||Feedback.length===0){
        return <p>no feedback yet</p>
    }

    return (
      <div className='feedback-list'>
        {/* <AnimatePresence> */}
        {Feedback.map(item=>(
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
          <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
        {/* </AnimatePresence> */}
      </div>
    )

    // without animation 
  // return (
  //   <div className='feedback-list'>
  //     {Feedback.map(item=>(
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  // )
}
// FeedbackList.propTypes={
//   FeedbackItem:propTypes.arrayOf({
//     id:propTypes.number.isRequired,
//     text:propTypes.string.isRequired,
//     rating:propTypes.number.isRequired
//   })
// }

export default FeedbackList
