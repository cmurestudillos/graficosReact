import React, {Component} from 'react';
// Componentes Bootstrap
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
// Imagenes
import logo from '../../../assets/img/logo.png';

class NavbarComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('NavbarComponent.js - Metodo render()');
        return(
          <div>
            <Navbar expand="lg" type="light" className="navbar navbar-expand-lg navbar-dark bg-custom">
              <Navbar.Brand><img src={logo} alt="Logo" title="Logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/linea" className="active mr-2" >Lineas</NavLink>
                <NavLink to="/barra" className="active mr-2" >Barras</NavLink>
                <NavLink to="/donut" className="active mr-2" >Donut</NavLink>
                <NavLink to="/radar" className="active mr-2" >Radar</NavLink>
              </Nav>
              </Navbar.Collapse>



            </Navbar>        
          </div>
        )
    }
}

export default NavbarComponent;