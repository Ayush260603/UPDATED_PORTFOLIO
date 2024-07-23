import React from 'react'
import {Link} from "react-scroll"


const Navbar = () => {
  return (
    <> 
    <div className="container w-auto h-16"> 
    <nav className='bg-transparent sticky border-red-400 justify-center '> 
    <ul className='flex justify-center'> 
      <li className='mx-5 my-4 hover:cursor-pointer'><Link to='hero' offset={15} duration={500} smooth={true} spy={true}><a>home</a> </Link> </li>
      <li className='mx-5 my-4  hover:cursor-pointer'><Link to='about' offset={15} duration={500} smooth={true}spy={true}><a>ABOUT Me</a> </Link> </li>
      <li className='mx-5 my-4  hover:cursor-pointer'><Link to='skills' offset={15} duration={500} smooth={true} spy={true}><a>sKILLS</a> </Link> </li>
      <li className='mx-5 my-4  hover:cursor-pointer'><Link to='projects' offset={15} duration={500} smooth={true}spy={true}><a>PROJECTS</a> </Link> </li>
      <li className='mx-5 my-4  hover:cursor-pointer'><Link to='contact' offset={15} duration={500} smooth={true}spy={true}><a>CONTACT</a> </Link> </li>

      </ul>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
