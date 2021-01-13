import { React, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Signature from "../assets/images/robert_ciro_logo.png";
// import Image from "react-bootstrap/Image"
import {FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa"

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
        <a href="/">
        <img className ="signature" src={Signature} alt="signature"/>
        </a>
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
        display: flex;
        background: black;
        line-height: .5em;
        justify-content: flex-end;
    }
    .signature{
        // display: flex;
        width: 5em;
        margin: 5px;
    }
    
    `}
</style>
   </div>
   )
    }
}
