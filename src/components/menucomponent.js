import React, { useState } from "react";
import {
  Card,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  CardImgOverlay,
  CardTitle,
  Nav,
  NavItem,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = (props) => {
  const [ type, setType ] = useState("Platters");

  const pizzamenu = props.pizza.map((one) => {
    return (
      <div className="col-12 col-md-5 m-1" key={one.id}>
        <Card>
          <Link to={`/pizza/${one.id}`}>
            <CardImg
              width="100%"
              style={{ height: "40vh" }}
              src={one.image}
              alt={one.name}
            />
            <CardImgOverlay>
              <CardTitle style={{ color: "white" }}>{one.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  const dessertmenu = props.dessert.map((one) => {
    return (
      <div className="col-12 col-md-5 m-1" key={one.id}>
        <Card>
          <Link to={`/dessert/${one.id}`}>
            <CardImg
              width="100%"
              style={{ height: "40vh" }}
              src={one.image}
              alt={one.name}
            />
            <CardImgOverlay>
              <CardTitle style={{ color: "white" }}>{one.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle style={{ color: "white" }}>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  const SaladMenu = props.salad.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card>
          <Link to={`/salad/${dish.id}`}>
            <CardImg
              width="100%"
              src={dish.image}
              alt={dish.name}
              style={{ height: "40vh" }}
            />
            <CardImgOverlay>
              <CardTitle style={{ color: "white" }}>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <Nav tabs>
            <NavItem
              onClick={() => setType("Platters")}
              className={type === "Platters" && "activeTab"}
              style={{
                textAlign: "center",
                width: "100px",
                padding: "10px 15px",
                borderRight: "2px solid lightgray",
                cursor: "pointer",
              }}
            >
              Platters
            </NavItem>
            <NavItem
              onClick={() => setType("Pizza")}
              className={type === "Pizza" && "activeTab"}
              style={{
                textAlign: "center",
                width: "100px",
                padding: "10px 15px",
                borderRight: "2px solid lightgray",
                cursor: "pointer",
              }}
            >
              Pizza
            </NavItem>
            <NavItem
              onClick={() => setType("Salads")}
              className={type === "Salads" && "activeTab"}
              style={{
                textAlign: "center",
                width: "100px",
                padding: "10px 15px",
                borderRight: "2px solid lightgray",
                cursor: "pointer",
              }}
            >
              Salads
            </NavItem>
            <NavItem
              onClick={() => setType("Desserts")}
              className={type === "Desserts" && "activeTab"}
              style={{
                textAlign: "center",
                width: "100px",
                padding: "10px 15px",
                borderRight: "2px solid lightgray",
                cursor: "pointer",
              }}
            >
              Desserts
            </NavItem>
          </Nav>
        </div>
      </div>
      <div className="col-12"></div>
      <div className="row">{type === "Pizza" && pizzamenu}</div>
      <div className="row">{type === "Platters" && menu}</div>
      <div className="row">{type === "Salads" && SaladMenu}</div>
      <div className="row">{type === "Desserts" && dessertmenu}</div>
    </div>
  );
};

export default Menu;
