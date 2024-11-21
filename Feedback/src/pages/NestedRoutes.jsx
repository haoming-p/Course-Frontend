import React from 'react'
import { Route, Routes } from 'react-router-dom'

/* nested route   
  1. App.js的外层Route path要加*，<Route path="/nested/*" element={<NestedRoutes/>} /> 
  2. http://localhost:3000/nested 展示外面的
  3. 在当前route加route，如下path是/show
  4. http://localhost:3000/nested/shownest 会也展示里面的
*/
function NestedRoutes() {
  return (
    <div>
      <h1>NestedRoutes</h1>
      <Routes>
        <Route path = '/shownest' element={<h1>nested</h1>} />
      </Routes>
    </div>
  )
}

export default NestedRoutes
