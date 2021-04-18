import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import './Topbar.css';
const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-light">
          <span className="mr-5 my-2"><Link to="/" className="link-text" style={{ textDecoration: 'none' }}>Home</Link></span>
          <span className="mr-5 my-2"><Link to="/service" className="link-text" style={{ textDecoration: 'none' }}>Service</Link></span>
          <span className="mr-5 my-2"><Link to="/admin" className="link-text" style={{ textDecoration: 'none' }}>Admin</Link></span>
          <span className="mr-5 my-2"> <Link to="/login" className="link-text" style={{ textDecoration: 'none' }}><Button className="mr-3" variant="outline-dark">Login</Button></Link></span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;