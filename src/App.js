//App.js
import React, {useEffect, useState} from 'react'; 
import "./App.css";
import Header from'./Header';
import Home from'./Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import SecondHeader from "./SecondHeader"

const promise = loadStripe("pk_test_51KHr7lSItq399U0KdjI3Q6jtD7YZXYWJmzEvRV3im3u3nb5F8wmfVYs75LPrvUEyqDDGXyh1UHYo1Ikswsv33Jrh00Eahef0Rj");

function App() {
  const [{}, dispatch] = useStateValue();
  
  
    useEffect(() => {
      auth.onAuthStateChanged(
       authUser => {
        console.log('THE USER IS :', authUser);
       
       if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
       } 
       else{
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
      <Router>
        <div className="App">
          <Switch>
          <Route path="/Orders">
              <Header />
              <SecondHeader />
              <Orders />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
              <Route path="/Checkout">
                <Header />
                <SecondHeader />
                <Checkout />
              </Route>
              <Route path="/payment">
                <Header />
                <SecondHeader />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>   
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;