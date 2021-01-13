import {React, Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import Logo from "../components/images/brick_logo.jpg"
import "../App.css"
import { Card, Container } from "react-bootstrap";
import ComingSoon from "../assets/images/comingsoon.png"


export default class Slider extends Component{
    render(){
        return(
          <div className="slideContainer">
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={ComingSoon}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={ComingSoon}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={ComingSoon}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
          <div className="container" id="prod_details"><p>
            {/* This is the Product details */}
            </p></div>
        <style jsx>
    {`
    
    .slideContainer{
        display: flex-box;
        align-items: center;
        justify-content: center;
        margin-top: 1em;
    }
   .slide{
    //   display: flex;
      justify-content: center;
      align-items: center;
      // border: solid white 4px;
      box-shadow: 0px 0px 10px black;
      width: 80%;
      margin: auto;

    }
    // .carousel-inner > .carousel-item{
    //   // height: 390px;
    //   // width: 500px;
    
    // }
    .carousel-indicators > .active{
      background-color: #3ce1dd
     
    }
   
    #prod_details{
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .products{
      disply: flex-box;
      width: 100%;

    }
    // .App-header{
    //   min-height:70vh;
      
    // }

    @media only screen and (max-width: 780px){
    //   .App-header{
    //     min-height: 71vh;
    //   }
    // .slide{
    // margin:auto;
    // }
    }
    // @media only screen and (max-width: 713px){
    //   .App-header{
    //     min-height: 72vh;
    //   }
    // }
    // @media only screen and (max-width: 670px){
    //   .App-header{
    //     min-height: 73vh;
    //   }
    // }
    @media only screen and (max-width: 630px){
    //   .App-header{
    //     min-height: 74vh;
    //   }
    margin:auto;
    }
    @media only screen and (max-width: 575px){
    //   .App-header{
    //     min-height: 75vh;
    //   }
.slide{
    width: 80%;
    margin:auto;
// }
      
    // }
    // @media only screen and (max-width: 550px){
    //   .App-header{
    //     min-height: 76vh;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //   }
    //   .slide{
    //     width: 80%;
    //     margin:auto;
    //   }
      // .carousel{
      //   width: 80%;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
    //   }
      // .slide{
      //   width: 80%;
      //   display: flex-box;
      //   align-items: center;
      //   justiy-content: center;
      // }
    // }
    // @media only screen and (max-width: 510px){
    //   .App-header{
    //     min-height: 77vh;
    //   }
    // }
    // @media only screen and (max-width: 470px){
    //   .App-header{
    //     min-height: 78vh;
    //   }
    // }
    // @media only screen and (max-width: 430px){
    //   .App-header{
    //     min-height: 79vh;
    //   }
    // }
    // @media only screen and (max-width: 400px){
    //   .App-header{
    //     min-height: 80vh;
    //   }
    // }
    // @media only screen and (max-width: 350px){
    //   .App-header{
    //     min-height: 8vh;
    //   }
    // }
    // @media only screen and (max-width: 305px){
    //   .App-header{
    //     min-height: 82vh;
    //   }
    // }
    // @media only screen and (max-width: 266px){
    //   .App-header{
    //     min-height: 83vh;
    //   }
    // }
    `}
</style>
        </div>
        )

    }
}