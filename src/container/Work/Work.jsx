import React, {useState} from 'react'
import { motion} from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap'
import {images} from '../../constants'
import './Work.css'

const works =[
  { title: 'Youtube Clone', description: 'An immersive video streaming platform built with React, replicating YouTubes interface for seamless video browsing, playback, and interaction,', imgUrl: images.youtubeclone, projectlink: 'https://utube-clone-site.netlify.app/', codelink: 'https://github.com/Harissh0110/youtube-clone', tags: "Front-End"},
  { title: 'Django CRM', description: 'A robust client resource management platform powered by Django, featuring secure login authentication and full CRUD (Create, Read, Update, Delete) functionality for managing client data efficiently.', imgUrl:images.djangocrm, projectlink: 'https://django-crm-2-uymb.onrender.com', codelink: 'https://github.com/Harissh0110/Django-CRM', tags: "Back-End"},
  { title: 'Ecommerce-site', description: 'A dynamic shopping platform integrating React and Django, offering user-friendly interfaces, secure authentication, & complete CRUD functionality for product management, orders, & transactions', imgUrl:images.ecommerce, projectlink: 'https://ecommerce-auronic-site.netlify.app', codelink: 'https://github.com/Harissh0110/Auronic-Ecommerce-site', tags:"Full Stack"},
]
const Work = () => {
 
  const [FilterWork, setFilterWork] = useState(works)

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})

const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };


  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {["All", 'Front-End', 'Back-End', 'Full Stack'].map((item, index) => (
       <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
       >
        {item}
       </div>
        ))}
      </div>
      <motion.div
       animate={animateCard}
       transition={{ duration: 0.5, delayChildren: 0.5 }}
       className="app__work-portfolio"
      >
      {FilterWork.map((work,index)=>(
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
          <img  src={work.imgUrl} alt={work.title}/>
          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease:'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href={work.projectlink} target="_blank" rel="noreferrer">
              <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
              <a href={work.codelink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                  <AiFillGithub />
                  </motion.div>
              </a>
          </motion.div>
          </div>
          <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
               <p className="p-text">{work.tags}</p>
              </div>
          </div>
        </div>
      ))}
     </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',);