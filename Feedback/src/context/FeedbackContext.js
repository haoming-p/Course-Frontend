/* 
1.FeedbackContext:
是一个container，created by createContext()
它用来创建FeedbackContext.Provider和FeedbackContext.Consumer

2.FeedbackProvider:
wrap the whole app作为"children"，App.js中最外层，注意import时要有{}

3.FeedbackContext.Provider:
提供数据，具体是：
<FeedbackContext.Provider value = {{
  提供的数据
}}>
  {向谁提供数据}
</FeedbackContext>

这里提供的数据，比如feedback，因为多了一层{}，是一个object（使用Context更通用）

4. 使用数据的component，需要（比如FeedbackList.jsx)
4.1 import { useContext } from 'react'
4.2 import FeedbackContext from '../context/FeedbackContext'
4.3 function中
let {feedback} = useContext(FeedbackContext)
这里feedback有{} 因为传来的是object，要destructure成里面的array
*/
import { createContext, useState, useEffect } from "react";

let FeedbackContext = createContext()

//export FeedbackProvider把全部components包起来作为children
export let FeedbackProvider = ({children}) => {  //这个children是传给FeedbackContext.Provider，作为“向谁提供数据
  
  //和fetch配合使用，FeedbackList中有，测试时在Network选3G
  let[isLoading, setIsLoading] = useState(true)
  
  let [feedback, setFeedback] = useState([  
    
  ])

  let [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  },[])

  //Fetch API feedback
  let fetchFeedback = async() =>{
    let response = await fetch(`/feedback?_sort=id&_order=desc`)
    let data = await response.json()
    //console.log(data)
    setFeedback(data)
    setIsLoading(false)
  }

  let addFeedback = async(newFeedback) => {
    let response = await fetch(`/feedback`, {
      method: 'POST',
      //headers放metadata about the request, 比如:
      //'Content-Type': 'application/json' POST或PUT时用，告诉server是什么信息
      //'Authorization': 
      headers:{ 
        'Content-Type': 'application/json'
      },
      //body放data being sent to the server
      body: JSON.stringify(newFeedback)
    })

    let data = await response.json()
    setFeedback([data, ...feedback]);
  }

  let deleteFeedback = async(id) => {
    if (window.confirm('Are you sure to delete?')) {
      await fetch(`/feedback/${id}`, {method: 'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  let editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  let updateFeedback = async (id,updItem) =>{
    let response = await fetch(`/feedback/${id}`,{
      //PUT用于update
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    let data = await response.json()

    setFeedback(
      feedback.map((item)=>(item.id === id ? {...item, ...data} : item))
    );
  }
  
  return <FeedbackContext.Provider value = {{
    feedback,       //提供的数据
    feedbackEdit,
    isLoading,
    deleteFeedback,  //可以提供function
    addFeedback,
    editFeedback,
    updateFeedback
  }}> 
    {children}     {/* 向谁提供数据 */}
  </FeedbackContext.Provider>
}

export default FeedbackContext