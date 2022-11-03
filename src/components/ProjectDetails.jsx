import React from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import home from '../assets/img6.jpg';
import profile from '../assets/pImage5.jpeg';
import Carousel from 'better-react-carousel';
import data from './data.json';
const ProjectDetails = (props) => {
    console.log(props.id);
  return (
    <div className="productDetail">
     {
          data && data.map(element => {
            if(element.id == props.id){
            return(
                <div className="container" key={element.id}>
      
      
                <div className="image__container">
                <Carousel cols={1} rows={1} gap={10} loop>
                {element.sliderImages && element.sliderImages.map(e => {
                    return(
                        <Carousel.Item key={e}>
                <img src={e} alt="home"   className='sliderImage'/>
                </Carousel.Item>
                    )
                })}
                
                {/* <Carousel.Item>
                <img src={profile} alt="home" width="100%" height="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={profile} alt="home" width="100%" height="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={profile} alt="home" width="100%" height="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={profile} alt="home" width="100%" height="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={profile} alt="home"  width="100%" height="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={profile} alt="home" width="100%" height="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={home} alt="home" width="100%" height="100%"/>
                </Carousel.Item> */}
                {/* ... */}
              </Carousel>
                </div>
              
                 
                  {/* <hr/> */}
                <div className="detail">
                  <h1>{element.name}</h1>
                  {/* <h2>$15.00</h2> */}
                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.of the printing and typesetting industry.{" "}
                  </p>
                  <p>Tech Stack:</p>
                  <p>Github: https://hgyfggfg</p>
                 
                 
                  
                </div>
              </div>
            )
}})
        }
 
  </div>
  )
}

export default ProjectDetails