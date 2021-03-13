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
          <div className="homeContainer" id="mission">
           
           {/* <Image src = {this.state.img} className="barberLogo"/> */}
          <style jsx>
            {`
            .homeContainer{
              display: flex;
              align-item: center;
              justify-content: center;
            }
            .barberLogo{
              // margin-top: 1em;
              // margin-bottom: 1em;
              width: 100%;

            }
            `}
          </style>
          </div>
        )
    }
}