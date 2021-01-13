
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
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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
    \.card-text{
        font-size: 20px;
    }
    `}
</style>
</div>

        )
    }
}