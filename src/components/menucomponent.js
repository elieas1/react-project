import React from "react";
import {
  Card,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponene";
import {baseUrl} from '../shared/baseUrl'

const Menu = (props)=>{
    const menu = props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <Link to={`/menu/${dish.id}`}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle style={{color:'white'}}>{dish.name}</CardTitle>
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
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">{menu}</div>
        </div>
      );
    }

export default Menu;
