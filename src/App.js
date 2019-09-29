import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Index from './components/index/Index';
import Create from "./components/create/Create";
import Edit from "./components/edit/Edit";
import Persons from "./components/persons/Persons";
import Person from "./components/person/Person";

import './App.css';

function App() {

  return (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route exact path='/' component={ Index } />
              <Route exact path='/persons' component={ Persons } />
              <Route exact path='/persons/create' component={ Create } />
              <Route exact path='/persons/:id' component={ Person } />
              <Route exact path='/persons/:id/edit' component={ Edit } />
          </Switch>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
