import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import './App.css';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './pages/Post';
import MyNavigate from './pages/MyNavigate';
import NestedRoutes from './pages/NestedRoutes';

//注意FeedbackProvider不是default export, 这里要有{}
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
  return (
  <FeedbackProvider>
      <Router>
      <Header text="Feedback List" bgColor="white" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/post/:id/:name" element={<Post/>} />  {/* http://localhost:3000/Post/1 */}
          <Route path="/navigate" element={<MyNavigate/>} />
          <Route path="/nested/*" element={<NestedRoutes/>} />  {/* nested routes要加星号 */}
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  </FeedbackProvider>
    
  );
}


export default App;