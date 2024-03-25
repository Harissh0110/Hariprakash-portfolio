import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harissh0110@gmail.com' target="_blank" rel="noreferrer" ><IoMail /></a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/hari-prakash1001/' target="_blank" rel="noreferrer" ><FaLinkedin /></a>         
        </div>
        <div>
         <a href='https://github.com/Harissh0110' target="_blank" rel="noreferrer" ><FaGithub /></a>      
         
        </div>
    </div>
  )
}

export default SocialMedia