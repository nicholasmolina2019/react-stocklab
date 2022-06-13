import {Router} from "react-router-dom";
import Data from './data/Data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="stocks">
        <Stocks/>
      </Route>
    </div>
  );
}

export default App;
