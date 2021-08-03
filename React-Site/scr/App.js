import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//STYLING
import './App.css';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Home from "./Components/home/index";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
