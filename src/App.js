import './App.css';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { 
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div className="App">
      <Router>
        <Navbar color="dark" light expand="md">
          
        <NavbarBrand className="text-white" href="/">Reactstrap</NavbarBrand>
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
      </Navbar>
      <Container>
        <Switch>
          <Route path="/about">
            <h1>hola desde about</h1>
          </Route>
          <Route path="/users">
            <h1>hola desde users</h1>
          </Route>
          <Route exact path="/">
            <h1>hola desde home</h1>
          </Route>
        </Switch>
        </Container>
        </Router>
    
      
    </div>
  )
}

