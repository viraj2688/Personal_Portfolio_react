import React from 'react'
import "./HeroImgStyle.css"
import {Link} from "react-router-dom"
import bg_img from "../assets/bg_img.jpg"
function HeroImg() {
  return (
    <div className='hero'>
        <div className="mask">
            <img src={bg_img} alt="IntroImg" className="into-img" />
        </div>
        <div className='content'>
            <p>Welcome to Developer's World.</p>
            <h1>I'm Viraj,</h1>
            <h2>A Frontend Developer.</h2>
            {/* <p>I'm currently working as a Full Stack Web Developer.</p> */}
        
        <Link to='/project' className="btn">
            Projects
            </Link>
            <Link to='/contact' className="btn-light">
            Contact
            </Link>
            </div>
    </div>
  )
}

export default HeroImg

