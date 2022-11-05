import React from 'react'
// import home from '/Users/priya/Documents/portfolio/portfolio-site/public/assets/pia.jpeg';
import profile from '../assets/img4.jpeg';

const Home = () => {
  return (
   <section className='home' id='home'>
    <div className="home__container">
    <img src={profile} alt="" className='home__banner'/>
    <div className='info__container'> 
    {/* <div className=''>
            <img src={home} alt="" className='profile__img'/>
          </div> */}
          <h1><span className='home__title1'>Hello,</span></h1> 
          <h1 ><span className='home__userName'>I'M Priya Gondaliya</span></h1>
          <h6><span className='home__title2'>Full Stack Developer</span></h6>
          <p className='about__text'>
              
          I enjoy designing and building various types of websites and apps. I have over one year of experience in the field of software development. Good understanding of object-oriented programming concepts, as well as data structures and algorithms.</p>
          {/* <form action='' className=''> */}
          <div className='footer__data'>
                {/* <h2 className='footer__title'>FOLLOW</h2> */}
                <a href='https://www.linkedin.com/in/priya-gondaliya/' className='footer__social' target="_blank"><box-icon type='logo' name='linkedin-square' color="gray"></box-icon></a>
            <a href='https://github.com/PriyaGondaliya' className='footer__social' target="_blank"><box-icon type='logo' name='github' color="gray"></box-icon></a>
            
            </div>
         <a href='priya.pdf' download='priya priya.pdf'>
         <button className='resume__button'>GET RESUME</button>
         </a>
          
        {/* </form> */}
      
        </div> 
     
    </div>
   </section>
  )
}

export default Home