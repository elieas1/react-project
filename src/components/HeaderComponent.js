import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  navClose = () => {
    this.setState((prevState) => {
      return { ...prevState, isNavOpen: false };
    });
  };

  handleLogin = (event) => {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  };
  toggleModal() {
    console.log(window.location.pathname);
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    onClick={this.navClose}
                    className="nav-link"
                    to="/home"
                  >
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.navClose}
                    className="nav-link"
                    to="/aboutus"
                  >
                    <span className="fa fa-info fa-lg"></span>About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.navClose}
                    className="nav-link"
                    to="/menu"
                  >
                    <span
                      className="fa
                   fa-list fa-lg"
                    ></span>
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.navClose}
                    className="nav-link"
                    to="/contactus"
                  >
                    <span
                      className="fa
                   fa-address-card fa-lg"
                    ></span>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Log In
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Lebanese Restaurant</h1>
                <p>We guarantee you an unforgettable experience</p>
              </div>
              <div className="col-md-6 col-sm-12">
                {window.location.pathname.indexOf("/home") === 0 && (
                  <NavLink className="nav-link navlink" to="/menu">
                    <div className="menuButton">Check Our Menu</div>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
          >
            Login
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
