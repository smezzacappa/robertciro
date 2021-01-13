import React, {Component} from 'react'


export default class HighlightedProducts extends Component{
    render(){
        return(
            <div>
                <p>
                    <h1>
                        These are the highlight products
                    </h1>
                </p>
                <style jsx>{`
                h1{
                    display: flex;
                   align-items: center;
                   justify-content: center;
                   margin-top: 1em;
                }
                `}</style>
            </div>
        )
    }
}