import React from 'react'
import PropTypes from 'prop-types'

/*  catch the prop, props自定义即可
function Header(props){  
  return (
    <header>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
        
    )
} */
/* catch the prop, 更简单的方式; 可以接收style */
function Header({text = 'Feedback default', bgColor}){  /* 默认prop */
    //加style方式2，放到变量里

    let headerStyles = {
        backgroundColor:'rgba(0,0,0,0.4',
        color:'#ff6a95'
    }
    
    //加style方式3，通过prop传
    /* let headerStyles = {
        backgroundColor: bgColor
    } */
    return(
        //加style方式1，注意{{}}
        //<header style={{color: 'pink'}}> 
        //加style方式2，用变量，则{}
        <header style={headerStyles}> 
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
    )
}

//检查传入prop属性，记得需要import，可以.required要求必传
Header.propTypes = {
    text:PropTypes.string
}
export default Header