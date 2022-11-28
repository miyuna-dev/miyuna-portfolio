import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import headerImg from "../assets/img/space.svg";
import headerImg from "../assets/img/my-astronaut.svg";
import rocket from "../assets/img/Rocket.svg";

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const period = 1200;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  const disableRightClick = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text]);
  

  return (
    <Banner id="home" className="banner" onContextMenu={disableRightClick} onDragStart={(e) => { e.preventDefault(); e.stopPropagation();}}>
      <Container className="header container">
        <Row className="row">
          <Col className="left">
              <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Miyuna,`}
              <br></br>
              <span className="txt-rotate">{text}</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa, assumenda incidunt atque velit illum aliquid sapiente odio tempore omnis ea natus libero rem amet provident doloremque reprehenderit deserunt esse? Sapiente laborum aliquam eos amet dignissimos, debitis dicta quia asperiores numquam rem soluta rerum ad id magni quod pariatur neque nisi cupiditate molestiae perferendis consectetur.</p>
            <button onClick={() => console.log("connect")}>Let's connect</button>
          </Col>
          <Col className="right">
            <img src={rocket} alt="Space ship" className="rocket"/>
            <img src={headerImg} alt="Header Img" className="astronaut" onContextMenu={disableRightClick} onDragStart={(e) => e.preventDefault()}/>
          </Col>
        </Row>
      </Container>
    </Banner>
  )  
}

const Banner = styled.section``
const Container = styled.div``
const Row = styled.div``
const Col = styled.div``

export default Header