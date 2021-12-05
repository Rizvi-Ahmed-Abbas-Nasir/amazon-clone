import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import SecondHeader from './SecondHeader';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <SecondHeader />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <SecondHeader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

