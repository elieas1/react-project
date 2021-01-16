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

const label1 = React.createRef()
const label2 = React.createRef();

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isReserveOpen: false
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

  toggleReserve = ()=>{
    this.setState((prevState)=>{
      return {...prevState,isReserveOpen: !prevState.isReserveOpen}
    })
  }

  handleInput = (e) => {
    label1.current.className = "btn smoking";
    label2.current.className = "btn smoking";
    e.target.parentNode.className = e.target.parentNode.className + " checked";
  };

  render() {
    return (
      <>
        <div className="jumbotrone">
          <Navbar className="Navbar" dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav}>
                <span className="fa fa-bars bars"></span>
              </NavbarToggler>
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
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <NavLink className="nav-link navlink" to="/menu">
                    <div className="menuButton">Check Our Menu</div>
                  </NavLink>
                  <button
                    className="nav-link reserveButton"
                    onClick={this.toggleReserve}
                  >
                    <div className="menuButton">Reserve Table</div>
                  </button>
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

        <Modal isOpen={this.state.isReserveOpen} toggle={this.toggleReserve}>
          <ModalHeader
            isOpen={this.state.isReserveOpen}
            toggle={this.toggleReserve}
          >
            Reservation
          </ModalHeader>
          <ModalBody>
            <div className="reserve">
              <form
                id="reserve"
                action="/home"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("reservation complete");
                }}
              >
                <div className="row form-group">
                  <div className="col-12 col-sm mb-2">
                    <strong>Name And Tel. Number</strong>
                  </div>
                  <div className="col-12 col-sm">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12 col-sm">
                    <input
                      className="form-control"
                      type="Tel"
                      placeholder="Number"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-12 col-sm mb-2">
                    <strong>Number of guests</strong>
                  </div>
                  <div className="col-12 col-sm-8" role="group">
                    <input type="radio" name="number" value="1" /> 1
                    <input
                      className="ml-4"
                      type="radio"
                      name="number"
                      value="2"
                    />{" "}
                    2
                    <input
                      className="ml-4"
                      type="radio"
                      name="number"
                      value="4"
                    />{" "}
                    3
                    <input
                      className="ml-4"
                      type="radio"
                      name="number"
                      value="4"
                    />{" "}
                    4
                    <input
                      className="ml-4"
                      type="radio"
                      name="number"
                      value="4"
                    />{" "}
                    5
                    <input
                      className="ml-4"
                      type="radio"
                      name="number"
                      value="4"
                    />{" "}
                    6
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-12 col-sm-4 mb-2">
                    <strong> Section</strong>
                  </div>
                  <div className="col-12 col-sm">
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <label className="btn smoking" ref={label1}>
                        <input
                          type="radio"
                          name="options"
                          id="option1"
                          autoComplete="off"
                          onClick={this.handleInput}
                        />
                        Non-Smoking
                      </label>

                      <label className="btn smoking" ref={label2}>
                        <input
                          type="radio"
                          name="options"
                          id="option2"
                          autoComplete="off"
                          onClick={this.handleInput}
                        />{" "}
                        Smoking
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-12 col-sm mb-2">
                    <strong>Date and Time</strong>
                  </div>
                  <div className="col-12 col-sm">
                    <input
                      className="form-control"
                      type="datetime"
                      placeholder="Date"
                    />
                  </div>
                  <div className="col-12 col-sm">
                    <input
                      className="form-control"
                      type="datetime"
                      placeholder="Time"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col">
                    <button className="btn btn-primary">Reserve</button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick = {this.toggleReserve}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
