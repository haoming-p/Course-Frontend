import React from 'react'
import { Navigate, useNavigate} from 'react-router-dom' 

function MyNavigate() {

    /* 点击跳转 */
    let navigate = useNavigate()
    let onClick = () =>{
        navigate('/about')
    }

    /* Navigate 重定向 */
    let status = 200
    /* 这样会重定向到：http://localhost:3000/notfound 
    let status = 404
    */
    if(status === 404){
        return <Navigate to = '/about' />
    }

    return (
        <div>
            <h1>Navigate and Nested Routes</h1>
            <button onClick={onClick}>click</button>
        </div>
    )

}

export default MyNavigate

