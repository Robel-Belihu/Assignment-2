import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactBook,
  faHome,
  faInfoCircle,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Con fusion restaurant"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span>
                      <FontAwesomeIcon icon={faHome} size="x" />
                      Home
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutUs">
                    <FontAwesomeIcon icon={faInfoCircle} size="x" />
                    About us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <FontAwesomeIcon icon={faNoteSticky} size="x" />
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactUs">
                    <FontAwesomeIcon icon={faContactBook} size="x" />
                    Contact us!
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1> Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}
