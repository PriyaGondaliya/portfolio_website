import React from 'react'
// import home from '../assets/1.jpeg';
const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section-title'>About</h2>
        <div className='about__container reveal'>
          <div className='about__img'>
            {/* <img src={home} alt=""/> */}
          </div>
          <div className='about__info'> 
            <h2 className='about__subtitle'>I am Priya Gondaliya</h2>
            <span className='about__profession'>Developer</span>
            <p className='about__text'>
              
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="about__social">
            <a href='#' className='about__social-icon'><box-icon type='logo' name='linkedin-square'></box-icon></a>
            <a href='#' className='about__social-icon'><box-icon type='logo' name='github'></box-icon></a>
            <a href='#' className='about__social-icon'><box-icon type='logo' name='instagram-alt'></box-icon></a>
          </div>
          
          </div>
        </div>
    </section>
  )
}

export default About