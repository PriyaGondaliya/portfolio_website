import React from "react";

const PortfolioCard = (props) => {
   
  return (
    <div className="project__img">
      <img src={props.img} alt="" className="" height="100%" width="100%"/>

      <div className="project__link">
        <button className="project__link-name" onClick={props.onClick}><a href="#project">View Details</a></button>
       
      </div>
      <div className="project__data">
        <span className="project__subtitle">
          <center>{props.title}</center>
        </span>
      </div>
    </div>
    
  );
};

export default PortfolioCard;
