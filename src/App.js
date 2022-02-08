import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import SecondHeader from './SecondHeader';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KMbTZSBGjHkWRO3NNMUewJlxUasHRDIKRPXCd2bCLDqeOL5Si8EtkgcGnKZwgBXh1qDotti1WTMNrmAlrciSnYU00GxZnkVFK');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    //will only run once when app component is loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('THE USER IS :', authUser);
      if (authUser){
        //user just logged in / user was logged in
        dispatch(
          {
            type: 'SET_USER',
            user: authUser
          }
        )
      }
      else{
        //user logged out
        dispatch(
          {
            type: 'SET_USER',
            user: null
          }
        )
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path= "/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <SecondHeader />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header />
            <SecondHeader />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
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

