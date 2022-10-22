import React from 'react';
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import doNut from "../assets/img/donut.png";

const Skills = () => {
   const responsive = {
      superLargeDesktop: {
         breakpoint: { max: 4000, min: 3000 },
         item: 5
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         item: 3
      },
      tablet: { 
         breakpoint: { max: 1024, min: 464 },
         item: 2
      },
      mobile: { 
         breakpoint: { max: 464, min: 0 },
         item: 1
      }
   };

   return (
      <section className="skills-section" id="skills">
         <Container>
            <Row>
               <Col>
                  <div className="skill-box">
                     <h2>Skills</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex. <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, accusamus. </p>
                     <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                           <img src={doNut} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={doNut} alt="Image" />
                           <h5>Brand Identity</h5>
                        </div>
                        <div className="item">
                           <img src={doNut} alt="Image" />
                           <h5>Login Design</h5>
                        </div>
                        <div className="item">
                           <img src={doNut} alt="Image" />
                           <h5>UI/UX Design</h5>
                        </div>
                     </Carousel>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )

}

const Container = styled.div``
const Row = styled.div``
const Col = styled.div``

export default Skills;