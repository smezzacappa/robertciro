import {React, Component} from "react";
import Card from "react-bootstrap/Card";
import Mission from "../components/Mission"
// import Button from "react-bootstrap/Button";
export default class About extends Component{
    render(){
        return(
          <div className="container" id="mission">
            <Card >
            <Card.Body>
             <Mission/>
            </Card.Body>
          </Card>
          <style jsx>
            {`
            .card-body{
              box-shadow: 0em 0em 1em silver;
            }
            #mission{
              display: flex;
              justify-content: center;
            }
            .card{
              // margin: 30px;
              background-color: black;
            }
            @media only screen and (max-width: 460px) {
              .card{
                margin: 0px;
              }
             }
            `}
          </style>
          </div>
        )
    }
}