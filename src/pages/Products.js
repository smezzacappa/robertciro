import {React, Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import logo from "../components/images/brick_logo.jpg"
import "../App.css"
import { Card, Container } from "react-bootstrap";
import  Slider  from "../components/SlidingProds";
import CardsLayout from "../components/CardsLayout";
import HighlightedProducts from "../components/HighlightProducts";


export default class Products extends Component{
    render(){
        return(
          <div>
            {/* <HighlightedProducts/> */}
            <Container className="slider">
            <Slider/> 
            </Container>
            <CardsLayout/>
       <style jsx>
    {`
    .slider{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1em;
    }
    // .App-header
    // .prodLayout{
    //   display: flex;
    // }

    `}
</style>
        </div>
        )

    }
}