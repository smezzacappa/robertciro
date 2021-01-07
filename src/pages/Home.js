import {React, Component} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default class Home extends Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              {/* <Card.Title>Home Card</Card.Title> */}
              <Card.Text>
               Hello, World.

               My Product isn't ready yet, but here is a preview of what's to come.
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}