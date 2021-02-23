
import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import Button from 'react-bootstrap/Button'
// import Logo from "../components/images/brick_logo.jpg"
import ComingSoon from "../assets/images/comingsoon.png";
import RCLogo from "../assets/images/brick_logo.jpg";


export default class CardHair extends Component {

    state = {
      img: ComingSoon
    };
    render(){
        return(
            <div className="layoutContainer">
      
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            <Card>
  <Card.Img 
  // className="cardHair" variant="top" src={this.state.img}
  //   onMouseEnter={() => {
  //     this.setState({
  //       img: RCLogo
  //     });
  //   }}
  //   onMouseOut={() => {
  //     this.setState({
  //       img:
  //         ComingSoon
  //     });
  //   }}
    />
  <Card.Body>
    <Card.Title>Hair</Card.Title>
    <Card.Text>
      Check Out Our Hair Products
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

<style jsx>
    {`
    // .layoutContainer{
    //     width: auto;
    //     margin: auto;
    // }
    // .prodLayout{
    //   // display: flex;
    //   justify-content: space-between;
    // }
    .card{
        width: 18rem;
        margin: 1rem;
        border: none;
    }
    // img: hover{
    //   background-image: url("../assets/images/brick_logo.jpg");
    // }
//     .card-title{
//         font-family: 'Big Shoulders Stencil Text', cursive;
//         font-size: 1.5em;
//         font-weight: 900;
//     }
//     .card-text{
//         font-size: 20px;
//         font-family: 'Shadows Into Light', cursive;
//     }
//     @media only screen and (max-width: 400px){
       
    
//     .card-title{
//         font-size: 90%;
//     }
//     .card-text{
//         font-size: 80%;
//     }

// }
    `}
</style>
</div>

        )
    }
}
