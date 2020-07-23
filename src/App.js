import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
// import { useState } from 'react';
import NavBar from './Navbar';
import Body from './Body';
import DashBoard from './DashBoard';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Route path="/" component={Body} exact/>
      <Route path="/dashboard" component={DashBoard} exact/>
      </BrowserRouter>
    </div> 
    );
}

export default App;
