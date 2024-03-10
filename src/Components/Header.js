import React, { Component } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import logo from "./logo192.png";
import { Navigate } from "react-router";

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <NavbarBrand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Navigate className="mr-auto"></Navigate>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
  }
}
