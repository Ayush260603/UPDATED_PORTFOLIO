import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="form_section flex gap-" id="contact">
        <div className="personal_info flex flex-col"> 
        <div className="contact_heading"><p className='ml-8'>Let's Work</p>  <p className='-ml-2'>together</p> 
        </div>
        <div className="personal mail"><p className='text-2xl font-semibold mb-1 ml-44'>Mail</p>
         <div className="personal_text ml-44">ayush260603@gmail.com</div> 
        </div>
        <div className="personal address"><p className='text-2xl font-semibold mb-1 ml-44'>Address</p>
        <div className="personal_text ml-44"> Haryana,India</div> 
        </div>
        <div className="personal phone"><p className='text-2xl font-semibold mb-1 ml-44'>Phone</p>
        <div className="personal_text ml-44">8295350646</div> 
         </div>
        </div>
        <form action="/" className='flex flex-col'>
        <span> <input className='form_input' type="text" placeholder='Your Name' Required/></span>
        <input className='form_input' type="email" placeholder='Your email' Required/>
        <textarea  placeholder='Your message' rows={5} cols={30} Required/>
        <input type='submit' className='submit_input'></input>
        </form>
      </div>
    </div>
  )
}

export default Contact
