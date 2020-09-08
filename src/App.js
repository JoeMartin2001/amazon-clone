import React, { useEffect } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  useEffect(() => {
    document.title = 'Amazon Clone'
  })
  return (
    <div className="app">
      <Switch>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
