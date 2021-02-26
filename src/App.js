import './App.css';

//import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import { 
  Container,
  /* Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand, */
  
} from 'reactstrap';

import React, {useEffect, useState} from 'react'


import Home from './pages/Home'
import Login from './pages/Login'
import Schools from './pages/Schools'
import AddNewSchool from './pages/AddNewSchool';


export default function App() {
  //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => setIsOpen(!isOpen);
  const [dataExist, setDataExist] = useState(false);

  useEffect(() => {
    setDataExist(!false)
  }, [dataExist])

  let token = localStorage.getItem("token")
  console.log(token)
  return (
    
    <div className="App">
      
      <Router>
        {/* <Navbar color="dark"  light expand="md">
          
          <NavbarBrand className="text-white" href="/">Neo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse color="white" isOpen={isOpen} navbar>
          <ul className="navbar-nav">
              <li className="nav-item ">
              <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">Home</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
            </ul>
          </Collapse>
        </Navbar> */}
        <Container fluid>
          <Switch>
            {/* <Route path="/login">
              <Login></Login>
            </Route> */}
            <Route path="/schools">
            { token ? <Schools/> : <Login /> }
                
            </Route>
            <Route path="/create-school">
              { token ? <AddNewSchool/> : <Login /> }
            </Route>
            <Route path="/home">
              { token ? <Home/> : <Login /> }
            </Route>
            
            <Route exact path="/">
              <Login/>
            </Route>
          </Switch>
        </Container>
      </Router>
    
      
    </div>
  )
}

