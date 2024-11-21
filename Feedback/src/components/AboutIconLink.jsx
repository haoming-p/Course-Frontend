import React from 'react'
import {FaQuestion, FaRegLaughSquint} from 'react-icons/fa'
import {Link, NavLink} from 'react-router-dom'


function AboutIconLink() {
  return (
    <div className='about-link'>
        {/* 这里如果使用a tag，在跳转时页面会刷新。
        <a href="/about">  
            <FaQuestion size = {30} />
        </a> */}

        {/* inner link使用import{Link} */}
        <Link to='/about'>
            <FaQuestion size = {30}/>
        </Link>
        
        {/* NavLink，knows whether or not the link is active
        active指用户当前就在该页面。通过className对active和非active设置不同样式*/}
        <NavLink 
            to='/about'
            className={({isActive}) => (isActive ? "active" :"")}>
            <FaRegLaughSquint size = {30}/>
        </NavLink>
        
        {/* 如果想在链接添加更多，比如：
        http://localhost:3000/about?sort=name#hello 
        
        <Link to = {{
            pathname: '/about',
            search: '?sort=name',
            hash: '#hello'
        }}
        >
            <FaQuestion size = {30}/>
        </Link> */}
    </div>
  )
}

export default AboutIconLink
