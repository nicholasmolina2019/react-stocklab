import {Route} from "react-router-dom";
import React from "react"
// import Data from './data/Data';
import Home from './pages/Home';
import About from './pages/About';
import Nav from "./components/Nav";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home/>
      </Route>
     <Route exact path="/about">
        <About/>
      </Route>
      {/* <Route exact path="/stocks">
        <Stocks/>
      </Route>  */}
    </div>
  );
}

export default App;
