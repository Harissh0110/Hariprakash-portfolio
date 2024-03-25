import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'

import './About.css'

const abouts =[
     { title: 'Full Stack Developer', description: 'As a full stack developer, I excel in crafting dynamic web applications from inception to completion. Proficient in front-end technologies like HTML, CSS, and JavaScript, particularly utilizing React, I seamlessly integrate design with functionality. On the back end, my expertise lies in Python, alongside databases such as MongoDB and SQL. This versatile skill set enables me to deliver robust, user-friendly web experiences, bridging the gap between design and functionality effectively.', imgUrl:images.developer},
]

const About = () => {
  return (
    <>
    <h2 className='head-text'>I Know that <span>Good Development</span><br /> Means <span>good Business</span></h2>

    <div className='app__profiles'>
      {abouts.map((about, index)=>(
        <motion.div 
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type: "tween"}}
        className='app__profiles-item'
        key={about.title + index}
        > 
        <img  src={about.imgUrl} alt={about.title}/>
        <h2 className='about-center' style={{margintop:20}}> {about.title}</h2>
        <p className='p-text' style={{margintop: 10}}> {about.description} </p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
  );