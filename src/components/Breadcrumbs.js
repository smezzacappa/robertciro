import { Breadcrumb } from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import { Component } from "react";


export default class Links extends Component{
    render(){
        return(
<Breadcrumb>
<Breadcrumb.Item>
<Link to="/">Home
</Link>
</Breadcrumb.Item>
<Breadcrumb.Item>
<Link to="/products">Products</Link>
</Breadcrumb.Item>
<Breadcrumb.Item >
<Link to="/about">About</Link>
</Breadcrumb.Item>
</Breadcrumb>
        )
    }
};