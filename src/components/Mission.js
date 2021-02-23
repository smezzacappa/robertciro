import React from "react";
import Signature from "../assets/images/robert_ciro_logo.png"
import Polaroid from "../assets/images/rob_polaroid.png"

const Mission = () => {
   return(
        <div>
        <p className="first">
        We at Robert Ciro LLC have set out to create organic male products that take their user on a journey.
        </p>
        <p className="second">
        It is our promise that we stay true to our company's values and beliefs in all the products we make. We seek to not only create a product that will change your life, but also a product that will become an essential part of your daily life.
        </p>
        <p className="third">
        We thank you for putting the well-being of your skin and hair in our care, and we know that you'll love our products just as much as we do.
        </p>
        <h2>
        <p className="slogan">
          
        Looking Great Starts 
         With Feeling Great.
        </p>
        </h2>
        <p>
        <img src={Polaroid} alt="headshot" id="headshot"/>
        </p>
        {/* <p id="signature">
        <img src={Signature} alt="signature"/>
        </p> */}
        <style jsx>
            {`
            p{     font-family: 'Truculenta', sans-serif;      
                 color: white!important;
                text-align: center;
                letter-spacing: 1px;
                margin: 1em;
                font-weight: 100;
                
            }
            .slogan{
                font-family: 'Truculenta', sans-serif;
                font-weight: 700;
            }
            #signature > img{
               width: 20%;
               display: flex-box
               justify-content: center;
                align-items: center;
                // text-align: center;
                
            }
            #headshot{
                width: 40%;
                border-radius: .1em;
                box-shadow: 3px 3px 8px 1px grey;
            }
               
            // @media only screen and (max-width: 600) {
            //     p{
            //         font-size: 1px;
            //     }
            //     .slogan{
            //         font-size: 50%;
            //     }
            // }
            @media only screen and (max-width: 460px) {
                p{
                    // font-size: 90%;
                }
                .slogan{
                    font-size: 60%;
                }
               }
            //    @media only screen and (max-width: 371px) {
            //     .p{
            //         font-size: 50%;
            //     }
            //     .slogan{
            //         font-size:50%;
            //     }
            //    }
            
            `}
        </style>
        </div>
   )
}
export default Mission;