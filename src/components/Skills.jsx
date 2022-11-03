import React from 'react'
import home from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/gL1.webp';
const Skills = () => {
  return (
    <section className="skills section reveal" id="skills">
        <h2 className='section-title'>Skills</h2>
       <div className="skills__container bd-grid ">
            <div className='skills_box'>
                <h3 className='skills__subtitle '>Programming / Technologies</h3>
                <span className='skills_name'>Html</span>
                <span className='skills_name'>Css</span>
                <span className='skills_name'>Javascript</span>
                <span className='skills_name'>Perl</span>
                <span className='skills_name'>Java</span>
                <span className='skills_name'>Python</span>

                <h3 className='skills__subtitle '>Frameworks</h3>
                <span className='skills_name'>React</span>
                <span className='skills_name'>Express</span>
                <span className='skills_name'>Node</span>
                <span className='skills_name'>Bootstrap</span>
                <span className='skills_name'>Jquery</span>
                <span className='skills_name'>Flutter</span>
                <h3 className='skills__subtitle '>Database</h3>
                <span className='skills_name'>SQL</span>
                <span className='skills_name'>MYSQL</span>
                <span className='skills_name'>MongoDB</span>
                <span className='skills_name'>Firebase</span>
                <span className='skills_name'>DynamoDB</span>
              
                <h3 className='skills__subtitle '>Software / Tools</h3>
                <span className='skills_name'>Android Studio</span>
                <span className='skills_name'>Xcode</span>
                <span className='skills_name'>Visual Studio</span>
                <span className='skills_name'>Eclipse</span>
                <span className='skills_name'>Git</span>
                <span className='skills_name'>Github</span>
                <span className='skills_name'>Jira</span>
                <span className='skills_name'>SQL Server Management Studio</span>
                <span className='skills_name'>Postman</span>
            </div>
            <div className='skills_img'>
                <img src={home} alt="" className='reveal'/>
            </div>

       </div>

    </section>
  )
}

export default Skills