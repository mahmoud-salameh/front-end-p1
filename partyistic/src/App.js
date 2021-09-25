import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import Parties from './components/Parties';
import Profile from './components/Profile';
import Services from './components/Services';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import InspireParty from './components/InspireParty';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Inspiration" exact>
            <Inspiration />
          </Route>
          <Route path="/Services" exact>
            <Services />

          </Route>

          <Route path="/Parties" exact>
            <Parties />
          </Route>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/inspiration/parties" exact>
            <InspireParty/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}