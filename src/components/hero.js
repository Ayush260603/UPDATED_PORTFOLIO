import React from 'react'
import pic from '../images/profile_pic.jpg';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import {motion} from "framer-motion";

const textVariant={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
   x:0,
   opacity:1,
   transition:{
    duration:1,
    staggerchildren:0.1,
   },
  },
};
const sliderVariant={
  initial:{
    x:0,
    opacity:.5,
  },
  animate:{
   x:"-220%",
   opacity:1,
   transition:{
    repeat:Infinity,
    repeatType:"mirror",
    duration:15,
    // repeatDelay: 1,
   },
  },
};


const Hero = () => {
  const {text}=useTypewriter({
    words:["developer","programmer","designer"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80
  })
  // const textVariant={
  //   initial:{
  //     x:-500,
  //     opacity:0,
  //   },
  //   animate:{
  //    x:0,
  //    opacity:1,
  //    transition:{
  //     duration:1,
  //     staggerchildren:0.1,
  //    }
  //   }
  // };
  return (
    <> 
    <motion.div className='herosection flex' id="hero" variants={textVariant} initial="initial" animate="animate">
      <motion.div className="info_container " variants={textVariant} initial="initial" animate="animate">
        <motion.p className='text-5xl' variants={textVariant}>Hello,👋</motion.p> 
        <motion.div className=' hero_span text-5xl'variants={textVariant}><span>I am</span> <motion.strong variants={textVariant}>&lt;AYUSH/&gt;
          </motion.strong> </motion.div> 
      
      <h1 className='text-white mt-8'>I like to {''}<span className='text-black text-2xl'>{text}</span>
      <Cursor cursorStyle="|"/>
      </h1>
      <motion.div className="resume_section mt-6" variants={textVariant}>
        <motion.button className='resume_btn' variants={textVariant}> Resume</motion.button>
      </motion.div>
      <motion.div className="animated_info" variants={sliderVariant} initial="initial" animate="animate"> 
       DEVELOPER PROGRAMMER DESIGNER 
       </motion.div>
      </motion.div>

      <motion.div className="image_container" variants={textVariant}><img src={pic}></img></motion.div>
      
    </motion.div>



    </>
  )
}

export default Hero
