import { React, Component } from "react";
import Image from "react-bootstrap/Image";
// import Rob from "./images/_robert_ciro_logo.png"
import Rob from "../assets/images/rob_banner3.png"
// import Rob from "./images/brick_logo.jpg";
// import "./Logo.css";


export default class Logo extends Component{
    render(){
   return(
      <div className="Logo">
   <Image src={Rob}/>
   <style jsx>
       {`
       .Logo{
        display: flex;
        // height: 22vh;
        justify-content: center;
        // padding-top: .5em;
        align-items: center;
       }
       img{
           width: 100%;
       }
       `}
   </style>
   </div>
   )
    }
}


