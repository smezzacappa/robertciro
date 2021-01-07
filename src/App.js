import './App.css';
// import Pictures from "./components/Pictures";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./pages/Products"
import About from "./pages/About";
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import { Breadcrumb } from "react-bootstrap";
import Logo from "./components/Logo"
import Footer from "./components/Navbar";


import {
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    
      <div>
        
        <Logo/>
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
        
        <div className="App-header">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
             
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer/>
      </div>
   
  );
}
