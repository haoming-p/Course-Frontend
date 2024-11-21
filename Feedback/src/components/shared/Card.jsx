import React from 'react'

function Card({children,reverse = false}) {
  return (
    /* conditional class: reverse && 'reverse': 如果reverse true，则加上reverse这个className
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div> */

    //conditional style:
    <div 
        className='card' 
        style={{
            backgroundColor: reverse? 'rgba(0,0,0,0.4)': '#fff',
            color: reverse? '#fff' : '#000'
        }}>
            {children}
    </div>
  )
}

export default Card