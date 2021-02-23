
import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardBeard from '../components/CardBeard'
// import Button from 'react-bootstrap/Button'
// import Logo from "../components/images/brick_logo.jpg"
import ComingSoon from "../assets/images/comingsoon.png"
import RCLogo from "../assets/images/brick_logo.jpg";

export default class CardsLayout extends Component {
    state = {
        img: ComingSoon
      };
     
    render(){
        return(
            <div className="layoutContainer">
            <Container className="prodLayout">
            <Card>
            <Card.Img className="cardHair" variant="top" src={this.state.img}
    onMouseEnter={() => {
      this.setState({
        img: RCLogo
      });
    }}
    onMouseOut={() => {
      this.setState({
        img:
          ComingSoon
      });
    }}
    />
  <Card.Body>
    <Card.Title>Hair</Card.Title>
    <Card.Text>
      Check Out Our Hair Products
    </Card.Text>
   
  </Card.Body>
</Card>
{/* <Card>   
<Card.Img className="cardHair" variant="top" src={this.state.img}
    onMouseEnter={() => {
      this.setState({
        img: RCLogo
      });
    }}
    onMouseOut={() => {
      this.setState({
        img:
          ComingSoon
      });
    }}
    />
  <Card.Body>
    <Card.Title>Beard</Card.Title>
    <Card.Text>
      Check Out Our Beard Products
    </Card.Text>
   
  </Card.Body>
</Card> */}
</Container>
<style jsx>
    {`
    .layoutContainer{
        width: auto%;
        margin: auto;
    }
    .prodLayout{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card{
        width: 18rem;
        margin: 1rem;
        border: none;
    }
    
    .card-title{
        font-family: 'Big Shoulders Stencil Text', cursive;
        font-size: 1.5em;
        font-weight: 900;
    }
    .card-text{
        font-size: 20px;
        font-family: 'Shadows Into Light', cursive;
    }
    @media only screen and (max-width: 400px){
       
    
    .card-title{
        font-size: 90%;
    }
    .card-text{
        font-size: 80%;
    }
}
    `}
</style>
</div>

        )
    }
}