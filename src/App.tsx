import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import { TodosPage } from './Pages/TodosPage';
import { AboutPage } from './Pages/AboutPage';




const App: React.FC = () => {
  return (
    <div className="container">
         <Navbar/>
      <Switch>
          <Route component={TodosPage} exact path='/'/>
          <Route component={AboutPage} path='/about'/>
      </Switch>
    </div>
  );
}

export default App;
