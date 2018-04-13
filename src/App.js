import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import { connect } from "react-redux";


import Dashboard from './components/Dashboard/Dashboard.js';
import Wizard from './components/Wizard/Wizard.js';
// this way not work yet //
// import Wizard_2 from './components/Wizard/Wizard_2.js';
// import Wizard_3 from './components/Wizard/Wizard_3.js';
import Header from './components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div>
      
       <Header />

       <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/wizard/step1" component={Wizard} />
          <Route path="/wizard/step2" component={Wizard} />
          <Route path="/wizard/step3" component={Wizard} /> 
        </Switch> 
      </div>
    )
  }
}

export default App;
