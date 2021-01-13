import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./pages/Products"
import About from "./pages/About";
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./components/Logo"
import Footer from "./components/Navbar";
// import {browserHistory} from "react-router";

import Links from "./components/Breadcrumbs";


import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    
      <div>
        
        <Logo/>
        <Links/>
        
        <div className="App-header">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Router>
              <Switch >        
              <Route exact path='/' component={Home} />        
              <Route exact path='/products' component={Products} />   
              <Route  exact path="/about" component = {About}/>  
               </Switch> 
               </Router>
       
      </div>
      <Footer/>
      </div>
   
   
  );
}
