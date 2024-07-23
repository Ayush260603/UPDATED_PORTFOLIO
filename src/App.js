import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

import { Link } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  const {text}=useTypewriter({
    words:["developer","programmer","designer"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
  });
  return (
    <>
    <BrowserRouter> 
    <Routes>
       <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/hero" element={<Hero/>}/> 
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/> 
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <div className="container"> 
    
    </div>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    {/* <Navbar/>

    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/> */}
    </BrowserRouter>
    </>
  );
}

export default App;

