import React from "react";
import {
  Navbar,
  Nav,
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  NavbarToggler,
  Collapse,
  NavItem,
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
        <div className="jumbotrone">
          <Navbar className="Navbar" dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav}><span className='fa fa-bars bars'></span></NavbarToggler>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      onClick={this.navClose}
                      className="nav-link"
                      to="/home"
                    >
                      <span className="fa fa-home fa-lg link"></span>
                      <span className="linkText">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.navClose}
                      className="nav-link"
                      to="/aboutus"
                    >
                      <span className="fa fa-info fa-lg link"></span>{" "}
                      <span className="linkText">About Us</span>
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
                   fa-list fa-lg link"
                      ></span>
                      <span className="linkText">&nbsp; Menu</span>
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
                   fa-address-card fa-lg link"
                      ></span>
                      <span className="linkText">&nbsp;Contact Us</span>
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
          <div className="container">
            <div className="row">
              <div className=" col-12 header">
                <h1 className="logo">DINE & WINE</h1>
                <p className="logotext">
                  We guarantee you an unforgettable experience
                </p>
                <div
                  className="d-none d-lg-flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {window.location.pathname.indexOf("/home") === 0 ? (
                    <>
                      <NavLink className="nav-link navlink" to="/menu">
                        <div className="menuButton">Check Our Menu</div>
                      </NavLink>
                      <a className="nav-link navlink" href="#reserve">
                        <div className="menuButton">Reserve Table</div>
                      </a>
                    </>
                  ) : (
                    <div className="emptyDiv"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
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
