import React from 'react';
import snapshot3 from "../images/snapshot3.jpg"

const Projects = () => {
  return (
    <div>
      <div className="project_section flex flex-col" id="projects">
        <div className="projectsection_heading text-center text-5xl font-bold">MY PROJECTS</div>
        <div className="project_slide flex">
          <div className="project_info flex flex-col">
            <div className="title">MetalBody</div>
            <div className="description"> A React application for gym where user can take subscription of the gym and login to their account 
            <br></br><br></br><strong>Techstack:</strong> <span>React.JS, React-Router, TailwindCSS</span> 

            </div>
            <div className="code_demo flex">
              <button className="demo"><a href="https://ayush260603.github.io/Resume-Builder-App/" target='_blank'>Demo</a></button>
              <button className="source_code"><a href="https://github.com/Ayush260603/Resume-Builder-App" target='_blank'>Code</a> </button>
            </div>
          </div>
          <div className="project_snapshots"> <img src={snapshot3} alt="snapshot3"></img></div>
        </div>
        <div className="project_slide flex">
          <div className="project_info flex flex-col">
            <div className="title">MedixSphere</div>
            <div className="description">A healthcare website for users to book appointments with specialized doctors 
              in given set of departments and contact with the support team
              <br></br><br></br><strong>Techstack:</strong> <span>HTML,CSS,Javascript,AWS</span> 

            </div>
            <div className="code_demo flex">
              <button className="demo"><a href="https://ayush260603.github.io/Resume-Builder-App/" target='_blank'>Demo</a></button>
              <button className="source_code"><a href="https://github.com/Ayush260603/Resume-Builder-App" target='_blank'>Code</a> </button>
            </div>
          </div>
          <div className="project_snapshots"> <img src={snapshot3} alt="snapshot3"></img></div>
        </div> <div className="project_slide flex">
          <div className="project_info flex flex-col">
            <div className="title">Resume generator webapp</div>
            <div className="description">generates a professional cv based on user input dynamically and user can download the generated resume in pdf format too
              <br></br><br></br><strong>Techstack:</strong> <span>HTML,CSS,Javascript,Bootstrap</span> 
            </div>
            <div className="code_demo flex">
              <button className="demo"><a href="https://ayush260603.github.io/Resume-Builder-App/" target='_blank'>Demo</a></button>
              <button className="source_code"><a href="https://github.com/Ayush260603/Resume-Builder-App" target='_blank'>Code</a> </button>
            </div>
          </div>
          <div className="project_snapshots"> <img src={snapshot3} alt="snapshot3"></img></div>
        </div>

      </div>
    </div>
  )
}

export default Projects
