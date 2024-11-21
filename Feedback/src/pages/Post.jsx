import React from 'react'
import { useParams } from 'react-router-dom'

/* 
App.js: <Route path="/post/:id" element={<Post/>} /> 
打开：http://localhost:3000/Post/1
通过useParams可以拿到1 
可以拼多个比如：<Route path="/post/:id/:name" element={<Post/>} />
*/
function Post() {
    let params = useParams()
    return (
        <div>
            <h1>Post: {params.id}</h1>
            <p>Name: {params.name}</p>
        </div>
    )
    }

export default Post
