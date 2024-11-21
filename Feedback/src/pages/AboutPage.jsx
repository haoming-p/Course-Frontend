/* 
Router:
1. terminal:
npm install react-router-dom
2. App.js:
2.1、像正常component一样import这个component
2.2、import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
2.3、return中的所有都包在<Router></Router>中
2.4、return中需要Route的元素: 
  可以（如果一个Route只有一个component）：
    <Route path='/about' element = {<AboutPage />} /> 
  也可以：
    <Route
      path="/"
      element={
        <>
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
      }
    />
  -> 如果有重复，比如一个的path是'/'，一个是'/about'，可以加<Route exact path
  -> 就可以通过localhost:3000/about打开
2.5、return中需要Route的元素需要放在一个大<Routes></Routes>里面
*/
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
