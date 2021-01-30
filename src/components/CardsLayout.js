
import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import Logo from "../components/images/brick_logo.jpg"
import ComingSoon from "../assets/images/comingsoon.png"

export default class CardsLayout extends Component {
    render(){
        return(
            <div className="layoutContainer">
            <Container className="prodLayout">
            <Card>
  <Card.Img variant="top" src={ComingSoon} />
  <Card.Body>
    <Card.Title>Hair</Card.Title>
    <Card.Text>
      Check Out Our Hair Products
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

<Card>   
  <Card.Img variant="top" src={ComingSoon} />
  <Card.Body>
    <Card.Title>Beard</Card.Title>
    <Card.Text>
      Check Out Our Beard Products
    </Card.Text>
    {/* <Button>Go somewhere</Button> */}
  </Card.Body>
</Card>
</Container>
<style jsx>
    {`
    .layoutContainer{
        width: auto%;
        margin: auto;
    }
    .prodLayout{
      display: flex;
      justify-content: space-between;
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