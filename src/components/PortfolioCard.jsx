import React from "react";
import home from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/pImag6.webp';
// import two from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/pImage0.jpeg';
// import three from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/pImage1.jpeg';
const PortfolioCard = (props) => {
   
  return (
    <div className="project__img">
      <img src={props.img} alt="" className="" height="100%" width="100%"/>

      <div className="project__link">
        <button className="project__link-name" onClick={props.onClick}><a href="#project">View Details</a></button>
        {/* <a href="" className="project__link-name" onClick={props.onClick}>
          View details
        </a> */}
      </div>
      <div className="project__data">
        <span className="project__subtitle">
          <center>{props.title}</center>
        </span>
      </div>
    </div>
    // <div className={`portfolio__content mix ${props.cls}`}>
    //         <img src={props.img} alt="" className='portfolio__img'/>
    //         <div className='portfolio__link'>
    //         <a href="#" className='portfolio__link-name'>View details</a>
    //         </div>
    //         <div className="portfolio__data">
    //             <span className='portfolio__subtitle'><center>{props.title}</center></span>
    //             {/* <a href="#"><h2 className='portfolio__title'>{props.desc}</h2></a>
    //             <a href='#' className='button button-link'>View Details</a> */}

    //       </div>

    //     </div>
  );
};

export default PortfolioCard;
