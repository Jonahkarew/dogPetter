import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Body from './Components/Body/Body';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Route exact path ="/" component={SignUp} />
      
        <Route exact path = "/login" component={Login} />
      
      </BrowserRouter>
  
    </React.Fragment>
    
  );
}

export default App;
