import React from 'react';
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import doNut from "../assets/img/donut.png";
import doNut2 from "../assets/img/donut.png";
import doNut3 from "../assets/img/donut.png";

const Skills = () => {
   const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      //   slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      }
    };

   const disableRightClick = (e) => {
     e.preventDefault();
   }

   const CustomLeftArrow = ({ onClick, ...rest }) => {
      const {
         onMove,
         carouselState: { currentSlide, deviceType }
      } = rest;
      return <button className="custom-left-arrow react-multiple-carousel__arrow react-multiple-carousel__arrow--left" onClick={() => onClick()} />;
   };

   const CustomRightArrow = ({ onClick, ...rest }) => {
      const {
         onMove,
         carouselState: { currentSlide, deviceType }
      } = rest;
      return <button className="custom-right-arrow react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={() => onClick()} />;
   };

   return (
      <Section  id="skills" className="skills-section">
         <Container className="container">
            <Row className="row">
               <Col className="col">
                  <SkillBox className="skill-box">
                     <SectionTitle>Skills</SectionTitle>
                     <SectionBio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex. <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, accusamus. </SectionBio>
                     <div className="skill-items">
                        <Carousel 
                           className="skill-slider"
                           showDots={true}
                           responsive={responsive} 
                           infinite={true} 
                           autoPlay={true}
                           autoPlaySpeed={4200}
                           keyBoardControl={true}
                           transitionDuration={1000}
                           onContextMenu={disableRightClick} 
                           removeArrowOnDeviceType={["tablet", "mobile"]}
                           customLeftArrow={<CustomLeftArrow />}
                           customRightArrow={<CustomRightArrow />}
                           onDragStart={(e) => e.preventDefault()}
                        >
                              <div className="item">
                                 <img src={doNut} alt="web" onContextMenu={disableRightClick} onDragStart={(e) => e.preventDefault()} />
                                 <h5>Web Development</h5>
                              </div>
                              <div className="item">
                                 <img src={doNut2} alt="dd" onContextMenu={disableRightClick} onDragStart={(e) => e.preventDefault()} />
                                 <h5>UI/UX Design</h5>
                              </div>
                              <div className="item">
                                 <img src={doNut3} alt="bb" onContextMenu={disableRightClick} onDragStart={(e) => e.preventDefault()} />
                                 <h5>SEO operator</h5>
                              </div>
                        </Carousel>
                     </div>
                  </SkillBox>
               </Col>
            </Row>
         </Container>
      </Section>
   )

}

const Section = styled.section``
const Container = styled.div``
const Row = styled.div``
const Col = styled.div``
const SkillBox = styled.div``
const SectionTitle = styled.h2``
const SectionBio = styled.p``

export default Skills;