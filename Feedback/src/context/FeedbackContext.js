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
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

let FeedbackContext = createContext()

//export FeedbackProvider把全部components包起来作为children
export let FeedbackProvider = ({children}) => {  //这个children是传给FeedbackContext.Provider，作为“向谁提供数据
  let [feedback, setFeedback] = useState([  
    {
      id:1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id:2,
      text: 'This is feedback item 2',
      rating: 8
    },
    {
      id:3,
      text: 'This is feedback item 3',
      rating: 9
    }
  ])

  let [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  let editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  let deleteFeedback = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  let addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  let updateFeedback = (id,updItem) =>{
    console.log(id,updItem)
    setFeedback(
      feedback.map((item)=>(item.id === id ? {...item, ...updItem} : item))
    );
  }
  
  return <FeedbackContext.Provider value = {{
    feedback,       //提供的数据
    feedbackEdit,
    deleteFeedback,  //可以提供function
    addFeedback,
    editFeedback,
    updateFeedback
  }}> 
    {children}     {/* 向谁提供数据 */}
  </FeedbackContext.Provider>
}

export default FeedbackContext