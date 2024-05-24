import React  from 'react'
import { motion} from 'framer-motion'
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap'
import {images} from '../../constants'
import './Skills.css'

const frontEnd =[
  { name: 'HTML', img:images.html},
  { name: 'CSS', img:images.css},
  { name: 'Javascript', img:images.javascript},
  { name: 'react', img:images.react},
]

const backEnd =[
  { name: 'Python', img:images.python},
  { name: 'Django', img:images.django},
  { name: 'PostgreSQL', img:images.postgresql},
  { name: 'Mysql', img:images.mysql},
]

const others =[
  { name: 'Postman', img:images.postman},
  { name: 'Netlify', img:images.netlify},
  { name: 'Git', img:images.git},
  { name: 'GitHub', img:images.github},
]


const Skills = () => {

  return (
    <>
     <h2 className='head-text'>Skills</h2>
     <div className='app__skillss'>
      <h2 className='app__skills-header'>Front-End</h2>
     <div className='app__skills-container'>
      <motion.div className='app__skills-list' >
        {frontEnd.map((frontend)=>(
          <motion.div
           whileInView={{opacity:[0,1]}}
           whileHover={{scale:1.3}}
           transition={{duration:0.2}}
           className='app__skills-item app__flex'
           key={frontend.name}>
          <div className='app__flex' style={{backgroundColor:frontend.bgcolor}}>
            <img src={(frontend.img)} alt={frontend.name}/>
          </div>
          <p className='p-text'>{frontend.name}</p>
          </motion.div>
        ))}
      </motion.div>
     </div>
     </div>
     <div className='app__skillss'>
      <h2 className='app__skills-header'>Back-End</h2>
     <div className='app__skills-container'>
      <motion.div className='app__skills-list' >
        {backEnd.map((backend)=>(
          <motion.div
           whileInView={{opacity:[0,1]}}
           whileHover={{scale:1.3}}
           transition={{duration:0.2}}
           className='app__skills-item app__flex'
           key={backend.name}>
          <div className='app__flex' style={{backgroundColor:backend.bgcolor}}>
            <img src={(backend.img)} alt={backend.name}/>
          </div>
          <p className='p-text'>{backend.name}</p>
          </motion.div>
        ))}
      </motion.div>
     </div>
     </div>
     <div className='app__skillss'>
      <h2 className='app__skills-header'>Others</h2>
     <div className='app__skills-container'>
      <motion.div className='app__skills-list' >
        {others.map((other)=>(
          <motion.div
           whileInView={{opacity:[0,1]}}
           whileHover={{scale:1.3}}
           transition={{duration:0.2}}
           className='app__skills-item app__flex'
           key={other.name}>
          <div className='app__flex' style={{backgroundColor:other.bgcolor}}>
            <img src={(other.img)} alt={other.name}/>
          </div>
          <p className='p-text'>{other.name}</p>
          </motion.div>
        ))}
      </motion.div>
     </div>
     </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
  );