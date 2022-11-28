import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthService from "./Axios/auth.service"
import { menuItems } from "./Dropdown/_menuItems";
import MenuItems from './Dropdown/MenuItems';
import { LogOut } from "react-feather";
import Logo from "../assets/img/sakura-1.1s-200px.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const anchorRef = useRef(null);
  
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
         setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const disableRightClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <NavBar id="navbar-main" className={scrolled ? "scrolled" : ""}>
        <Container id="navbar">
          <HeroWrapper id="navbelt" className="wrapper d-flex">
            <Brand className="brand">
              <Link id="logo" to="/">
                <img src={Logo} alt="logo" onContextMenu={disableRightClick} onDragStart={(e) => e.preventDefault()} />
              </Link>
            </Brand>

              <Div className="cta" onDragStart={(e) => e.preventDefault()}>
                <MyList className="hide menus">
                  {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                      <MenuItems
                        items={menu}
                        key={index}
                        className={menu.cname}
                        depthLevel={depthLevel}
                      />
                    );
                  })}
                </MyList>
                <Button className="btn">
                  <Link 
                    to="#home" 
                    className={`link ${activeLink === "home" ? "active navbar-link" : "navbar-link"}`}
                    onClick={() => onUpdateActiveLink("home")}
                  >Home</Link>
                </Button>
                <Button className="btn">
                  <Link to="#skills" className={`link ${activeLink === "skills" ? "active navbar-link" : "navbar-link"}`}>Skills</Link>
                </Button>
                <Button className="btn">
                  <Link to="#projects" className={`link ${activeLink === "projects" ? "active navbar-link" : "navbar-link"}`}>Projects</Link>
                </Button>
                <Button className="btn">
                  <Link to="#contact" className="link contact" onClick={() => console.log('connect')}>Let's connect</Link>
                </Button>
            </Div>
          </HeroWrapper>
        </Container>
      </NavBar>
    </>
  )
}

const NavBar = styled.nav``
const Container = styled.div``
const HeroWrapper = styled.div``
const Div = styled.div``
const MyList = styled.ul``
const Brand = styled.h1``
const Button = styled.small``

export default Navbar