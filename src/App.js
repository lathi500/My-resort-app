import React from 'react';
import "./App.css"; 
import logo from './logo.svg';
import Home from './pages/home';
import Room from './pages/Room';
import Singleroom from './pages/singleroom';
import Error from './pages/Error';
import Navbar from './component/navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import navbar from './component/navbar';


function App() {
  return (
    <div className="App">
      <> 
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/rooms/" component = {Room} />
        <Route exact path = "/rooms/:slug" component = {Singleroom}/>
        <Route  component = {Error}/>
      </Switch>
      </>
    </div>
  );
}

export default App;
