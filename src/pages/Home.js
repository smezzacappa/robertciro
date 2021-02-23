import {React, Component} from "react";
import Card from "react-bootstrap/Card";
import Mission from "../components/Mission"
import barberLogo from "../assets/images/barberLogo.png"
import Image from "react-bootstrap/Image" 
// import Button from "react-bootstrap/Button";
export default class Home extends Component{

    state = {
      img: barberLogo
    }
    render(){
        return(
          <div className="container" id="mission">
           <Image src = {this.state.img} className="barberLogo"/>
          <style jsx>
            {`
            .barberLogo{
              margin: 1em;
            }
            `}
          </style>
          </div>
        )
    }
}