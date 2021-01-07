import {React, Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import logo from "../components/images/brick_logo.jpg"


export default class Products extends Component{
    render(){
        return(
          <div>
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={logo}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={logo}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={logo}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
          <div className="container" id="prod_details"><p>
            {/* This is the Product details */}
            </p></div>
        <style jsx>
    {`
    .slide{
      display: flex;
      justify-content: center;
      align-items: center;
      // border: solid white 4px;
      box-shadow: 0px 0px 10px black;

    }
    .carousel-inner > .carousel-item{
      height: 390px;
      width: 500px;
    }
    .carousel-indicators > .active{
      background-color: #3ce1dd
    }
    #prod_details{
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    `}
</style>
        </div>
        )

    }
}