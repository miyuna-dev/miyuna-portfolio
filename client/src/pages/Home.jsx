import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom"
import Skills from "../components/Skills";

const Home = () => {
   return (
      <>
         <Header />
         <Skills />
      </> 
   )  
}

const Main = styled.div``
const Button = styled.button``
 
 export default Home