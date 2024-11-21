import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    //calculate average rating
    //.reduce(),是array method,可以“reduce” array to a single value, by iterating and applying a callback function
    //array.reduce(accumulator, currrentValue, currentIndex, array) => {}, initialValue)
    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length


    average = average.toFixed(1).replace(/[.,]0$/,'')  //保留1位小数，如小数为0则remove小数
    return (
        <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4> 
        </div>
    )
}

export default FeedbackStats