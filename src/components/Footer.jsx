import React from 'react'

const Footer = () => {
  return (
    <footer className='footer section '>
        <div className='footer__container bd-grid '>
        <div className='footer__data'>
                {/* <h2 className='footer__title'>FOLLOW</h2> */}
                <a href='https://www.linkedin.com/in/priya-gondaliya/' className='footer__social' target="_blank"><box-icon type='logo' name='linkedin-square' color="gray"></box-icon></a>
            <a href='https://github.com/PriyaGondaliya' className='footer__social' target="_blank"><box-icon type='logo' name='github' color="gray"></box-icon></a>
            {/* <a href='#' className='footer__social'><box-icon type='logo' name='instagram-alt' color="gray"></box-icon></a> */}
            </div>
            <div className='footer__data '>
                <p className='footer__text'>Copyright @ 2022, Priya Gondaliya</p>
                {/* <p className='footer__text'>fyfyfyhftgfdtgfgbjbhfdrgfchvbnn</p> */}
            </div>
            {/* <div className='footer__data'>
                <h2 className='footer__title'>EXPLORE</h2>
               <ul>
                <li><a href="#home" className='footer__link'>Home</a></li>
                <li><a href="#about" className='footer__link'>About</a></li>
                <li><a href="#skills" className='footer__link'>Skills</a></li>
                <li><a href="#project" className='footer__link'>Project</a></li>
                <li><a href="#contact" className='footer__link'>Contact</a></li>
               </ul>
            </div> */}
            
        </div>
    </footer>
  )
}

export default Footer