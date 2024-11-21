import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
    let {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }
    
    return isLoading ? <Spinner/> : 
        (
            <div className='feedback-list'>
                {feedback.map((item)=>{  //把每一个item，比如{id: 1, rating: 7, text: "Some feedback"}传给了FeedbackItem.jsx
                    return <FeedbackItem 
                        key = {item.id} 
                        item={item} 
                    />
                })}
            </div>
        )
}

export default FeedbackList