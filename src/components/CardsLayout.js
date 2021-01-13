
import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Logo from "../components/images/brick_logo.jpg"

export default class CardsLayout extends Component {
    render(){
        return(
            <div>
            <Container className="prodLayout">
            <Card>
  <Card.Img variant="top" src={Logo} />
  <Card.Body>
    <Card.Title>Hair</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={Logo} />
  <Card.Body>
    <Card.Title>Beard</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button>Go somewhere</Button>
  </Card.Body>
</Card>
</Container>
<style jsx>
    {`
    .prodLayout{
      display: flex;
      justify-content: space-between;
    }
    .card{
        width: 18rem;
        margin: 1rem;
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
    `}
</style>
</div>

        )
    }
}