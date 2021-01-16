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
import { Link } from "react-router-dom";
import Reserve from "./reserve";

const Menu = (props) => {
  const [type, setType] = useState("Platters");

  const pizzamenu = props.pizza.map((one) => {
    return (
      <div className="col-12 col-md-6 mt-3" key={one.id}>
        <Card>
          <Link to={`/pizza/${one.id}`}>
            <CardImg width="100%" src={one.image} alt={one.name} />
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
      <div className="col-12 col-md-6 mt-3" key={one.id}>
        <Card>
          <Link to={`/dessert/${one.id}`}>
            <CardImg width="100%" src={one.image} alt={one.name} />
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
      <div className="col-12 col-md-6 mt-3" key={dish.id} id={dish.id}>
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
      <div className="col-12 col-md-6 mt-3" key={dish.id}>
        <Card>
          <Link to={`/salad/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle style={{ color: "white" }}>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Nav tabs>
          <div className="row">
            <div className="col menuType">
              <NavItem
                onClick={() => setType("Platters")}
                className={type === "Platters" ? "activeTab" : ""}
                style={{
                  textAlign: "center",
                  padding: "10px 15px",
                  borderRight: "2px solid lightgray",
                  cursor: "pointer",
                }}
              >
                Platters
              </NavItem>
            </div>
            <div className="col menuType">
              <NavItem
                onClick={() => setType("Pizza")}
                className={type === "Pizza" ? "activeTab" : ""}
                style={{
                  textAlign: "center",
                  padding: "10px 15px",
                  borderRight: "2px solid lightgray",
                  cursor: "pointer",
                }}
              >
                Pizza
              </NavItem>
            </div>
            <div className="col menuType">
              <NavItem
                onClick={() => setType("Salads")}
                className={type === "Salads" ? "activeTab" : ""}
                style={{
                  textAlign: "center",
                  padding: "10px 15px",
                  borderRight: "2px solid lightgray",
                  cursor: "pointer",
                }}
              >
                Salads
              </NavItem>
            </div>
            <div className="col menuType">
              <NavItem
                onClick={() => setType("Desserts")}
                className={type === "Desserts" ? "activeTab" : ""}
                style={{
                  textAlign: "center",
                  padding: "10px 15px",
                  borderRight: "2px solid lightgray",
                  cursor: "pointer",
                }}
              >
                Desserts
              </NavItem>
            </div>
          </div>
        </Nav>
      </div>
      <div className="menuImages">
        {type === "Pizza" && <div className="menuDiv">{pizzamenu}</div>}
        {type === "Platters" && <div className="menuDiv">{menu}</div>}
        {type === "Salads" && <div className="menuDiv">{SaladMenu}</div>}
        {type === "Desserts" && <div className="menuDiv">{dessertmenu}</div>}
      </div>
      <div className="container">
        <Reserve />
      </div>
    </>
  );
};

export default Menu;
