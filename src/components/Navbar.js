import { React, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Signature from "./images/_robert_ciro_logo.png";
import Image from "react-bootstrap/Image"
import {FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa"
import { Col } from "react-bootstrap";
import "./Navbar.css"
// import Link from "react-router"
import { Link } from 'react-router-dom'

export default class Footer extends Component{
    render(){
   return(
   <div>
       <Navbar className="footer" sticky="bottom" expand="lg">
  <div className="brand">
        <div className="social">
            <a href="https://www.instagram.com/robertciro">
                <FaInstagram/>
            </a>
            <a href="/">
        <FaFacebook/>
        </a>
        <a href="/">
        <FaTwitter/>
        </a>
        </div>
   
  </div>
</Navbar>

<style jsx>
    {`
    .footer{
        // display: flex;
        background: black;
        line-height: .5em;
    }
    // .footer > .brand > navbar-brand > .social{
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: 
    }
    `}
</style>
   </div>
   )
    }
}
