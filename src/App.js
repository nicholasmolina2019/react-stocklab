import {Route} from "react-router-dom";
import React from "react"
// import Data from './data/Data';
import Home from './components/Home';
import About from './components/About';
import Nav from "./components/Nav";
import Price from "./components/Price";
import Stocks from "./components/Stocks"

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home/>
      </Route>
     <Route path ="/about">
        <About/>
      </Route>
        <Route path="/stocks">
        <Price/>
      </Route> 
    
    <Route
    exact path = "/stocks/:symbol"
    render= {(props)=> <Stocks {...props}/>}
     />



    </div>
  );
}

export default App;
