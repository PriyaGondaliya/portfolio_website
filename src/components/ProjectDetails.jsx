import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
// import home from "../assets/img6.jpg";
// import profile from "../assets/pImage5.jpeg";
import Carousel from "better-react-carousel";
import data from "./data.json";
const ProjectDetails = (props) => {
  console.log(props.id);
  return (
    <div className="productDetail">
      {data &&
        data.map((element) => {
          if (element.id == props.id) {
            return (
              <div className="container" key={element.id}>
                <div className="image__container">
                  <Carousel cols={1} rows={1} gap={10} loop>
                    {element.sliderImages &&
                      element.sliderImages.map((e) => {
                        return (
                          <Carousel.Item key={e}>
                            <img src={e} alt="home" className="sliderImage" />
                          </Carousel.Item>
                        );
                      })}
                  </Carousel>
                </div>

                <div className="detail">
                  <h1>{element.name} | <a
                      href={element.link}
                      className="footer__social"
                      target="_blank"
                    >
                      <box-icon
                        type="logo"
                        name="github"
                        color="black"
                        
                      ></box-icon>
                    </a></h1>
                    {element.desc &&
                      element.desc.map((d) => {
                        return(
                          <p className="desc">
                         - {d}
                        </p>
                        )
                      })}
                 
                  <p>Tech Stack: {element.tech}</p>
                 
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default ProjectDetails;
