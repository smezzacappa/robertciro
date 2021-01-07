import {React, Component} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"


export default class About extends Component{
    render(){
        return(
          <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              {/* <Card.Title>About Card</Card.Title> */}
              <Card.Text>
               Coming soon.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </div>
        )
    }
}