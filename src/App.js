import React from 'react';
import './App.css';
import {Login} from "../src/Login/Login";
import {Searchemployee} from "../src/Login/Details"
import { Employee } from './Login/Empdetails';
import {Route,Switch,} from 'react-router-dom';
import Header from './header';
import Footer from './footer';


const App = ()=>{
  return(
    <>
      <Header/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/details" component={Searchemployee}/>
          <Route path="/empdetails" component={Employee}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
