import React from 'react'
import Bootstrap from "../images/bootstrap.png";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Js from "../images/js.png";
import Reactimg from "../images/react.png";
import Github from "../images/github.png";
import Mysql from "../images/mysql.png";
import tailwind from "../images/tailwind-css-icon.png"
import "../App.css"



const Skills = () => {
  return (
    <>
    <div className="skills_section" id="skills"><p className='text-5xl'>MY TOP SKILLS</p> </div> 
    <div className="slider">
      <div className="slidetrack">
        <div className="slide">
          <img src={Html} alt="html"></img>
        </div>
        <div className="slide">
        <img src={Css} alt="css"></img>

        </div>
        <div className="slide">
        <img src={Js} alt="js"></img>

        </div>
        <div className="slide">
        <img src={Reactimg} alt="react"></img>

        </div>
        <div className="slide">
        <img src={tailwind} alt="tailwind"></img>

        </div>
        <div className="slide">
        <img src={Bootstrap} alt="bootstrap"></img>

        </div>
        <div className="slide">
        <img src={Github} alt="github"></img>

        </div>

      </div>
    </div>

    </>
   
  )
}

export default Skills
