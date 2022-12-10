import React from 'react'
import {Link} from 'react-scroll'
import style from "../styles/navbar.module.css"
import {AiOutlineMail, AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"
function Navbar() {
  return (
    <div className={style.container}>
        <div className={style.main}>
        <Link to="main" spy={true} smooth={true} offset={10} duration={500}><p>/Home</p></Link>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}><p>/about</p></Link>
        <Link to="experience" spy={true} smooth={true} offset={50} duration={500}><p>/experience</p></Link>
        <Link to="Project" spy={true} smooth={true} offset={50} duration={500}><p>/Project_Portfolios</p></Link>
        </div>

        <div className={style.icon}>
            <AiOutlineMail size={25}/>
            <AiOutlineGithub size={25}/>
            <AiFillLinkedin size={25}/>
        </div>
    </div>
  )
}

export default Navbar