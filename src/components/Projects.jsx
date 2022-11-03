import React from 'react'
import PortfolioCard from './PortfolioCard';
import Popup from './Popup';
import home from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/pImag6.webp';
import two from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/pImage0.jpeg';
import three from '/Users/priya/Documents/portfolio/portfolio-site/src/assets/pImage1.jpeg';
import data from './data.json';
import axios from "axios";
import { useState,useEffect } from "react";
import {MdOutlineClose} from "react-icons/md";
import ProjectDetails from './ProjectDetails';
const Projects = () => {
  // const getData= async()=>{
  //   fetch('./data.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });

  //     const json = await axios.get("data.json");
  //   console.log(json);
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  // const [data,setData]=useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentId,setId] = useState(0);
  console.log(currentId);
  return (
    <section className='project section reveal' id="project">
      <h2 className='section-title'>Project</h2>
      <div className="project__container bd-grid">
        {
          data && data.map(element => {
            return(<PortfolioCard title={element.name} img={element.image} onClick={()=>{setButtonPopup(true);
              setId(element.id)
            }} key={element.id}/>)
          })
        }
       
       {/* <PortfolioCard title="Web development" img={home}/>
       <PortfolioCard title="Web development" img={home}/>
       <PortfolioCard title="Web development" img={home}/>
       <PortfolioCard title="Web development" img={home}/> */}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <ProjectDetails id={currentId}/>
      </Popup>
    </section>
  )
}

export default Projects