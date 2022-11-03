import React from 'react'
import PortfolioCard from './PortfolioCard';
import home from '../assets/pImage0.jpeg';
import two from '../assets/1.jpeg';
import three from '../assets/pImage0.jpeg';
const Portfolio = () => {
  return (
   <section className='portfolio section bd-container' id="portfolio">
    {/* <span className='section-title'>My recent works</span> */}
    <h2 className='section-title'>Portfolio</h2>
    <div className="portfolio__nav">
        <span className="portfolio__item" ><a href='#' data-filter="all">All</a></span>
        <span className="portfolio__item" ><a href='#' data-filter=".web">Web</a></span>
        <span className="portfolio__item" ><a href='#' data-filter=".app">App</a></span>
    </div>
    <div className='portfolio__container bd-grid'>
        <PortfolioCard title="Web Developomeny" img={home} desc="New portfolio" cls="web"/>
        <PortfolioCard title="Web Developomeny" img={two} desc="New portfolio" cls="app"/>
        <PortfolioCard title="Web Developomeny" img={three} desc="New portfolio" cls="web"/>
        <PortfolioCard title="Web Developomeny" img={home} desc="New portfolio" cls="app"/>
    </div>
   </section>
  )
}

export default Portfolio