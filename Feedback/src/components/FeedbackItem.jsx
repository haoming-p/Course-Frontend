/* 引入hook（use开头）
import {useState} from 'react' */

import React from 'react'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({item}) {
  /* useState: let[name of the state, function to update the state] = useState(默认值)
  let [rating, setRating] = useState(7)
  let [test, setTest] = useState('an example of a feedback item') */

  /* component level state的示例。实际使用了app level state
  let handleClick = () =>{
    通过setRating改rating
    //方式1
    //setRating(10)
    
    方式2，用一个function
    setRating((prev)=>{  //如果设置了参数，React会自动把该state当前的值传给参数
      return prev+1
    })  
  } */
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)  //可以一次传多个
  return (
    //通过标签直接使用一个共享的component
    //放进标签内的数据该component可以获取，会被放在children prop里
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick = {()=>deleteFeedback(item.id)} className='close'>
        <FaTimes color = 'purple' />
      </button>
      <button onClick={()=>editFeedback(item)} className='edit'>
        <FaEdit color = 'purple' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>click</button> */}
    </Card>
  )
}

export default FeedbackItem