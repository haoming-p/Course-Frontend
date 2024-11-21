import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useEffect } from 'react'

function FeedbackForm() {
    let [text, setText] = useState('')
    let [btnDisabled, setBtnDisabled] = useState(true)
    let [message, setMessage] = useState('')
    let [rating, setRating] = useState('')

    /* useEffect
    useEffect(()=>{
        执行的函数},[什么时候执行])  
    如果[]为空则每次刷新执行
    */
    let {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    let handleTextChange = (e) =>{
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !=='' && text.trim().length < 5){
            setBtnDisabled(true)
            setMessage('text must be at least 5 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length >= 5){
            let newFeedback = {
                text,
                rating
            }
            
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }

            setText('')
            setBtnDisabled(true)
        }
    }

    return (
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <div className="input-group">
                    <input 
                        onChange = {handleTextChange} 
                        type="text" 
                        placeholder='Write a review' 
                        value={text}
                    />
                    <Button type='submit' version = 'secondary' isDisabled={btnDisabled}>send</Button>
                </div>
                
                <RatingSelect select={(rating) => setRating(rating)}/>  {/* 传函数作为prop */}
                {message && <div className='message' > {message} </div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
