import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { menuItems } from "./Dropdown/_menuItems";
import MenuItems from './Dropdown/MenuItems';
import { Home, List, Grid, LogOut } from "react-feather";
import AuthService from "./Axios/auth.service"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const anchorRef = useRef(null);
  const token = JSON.parse(localStorage.getItem("token"));
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = (event) => {
    AuthService.logout()
        .then(function (response) {
            localStorage.removeItem("token")
            navigate('/')
            setIsLoggedIn(false);
        })
        .catch(function (error) {
            console.log(error);
        });
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
}

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [location, token]);

  return (
    <>
      <NavBar id="navbar-main">
        <Container id="navbar">
          <HeroWrapper id="navbelt" className="wrapper d-flex">
            <Brand className="brand">
              <Link id="logo" to="/">
                 Logo
              </Link>
            </Brand>

              <Div className="cta">
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
                    <Link to="#home" className="link">Home</Link>
                  </Button>
                  <Button className="btn">
                    <Link to="#skills" className="link">Skills</Link>
                  </Button>
                  <Button className="btn">
                    <Link to="#projects" className="link">Projects</Link>
                  </Button>
                  <Button className="btn">
                    <Link to="#contact" className="link contact">Let's connect</Link>
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