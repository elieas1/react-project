import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Established in 2015, our restaurant quickly established itself as a
            great success in Lebanon. With its unique brand of world cuisine and
            chefs that cannot be found anywhere else, it enjoys patronage from
            the A-list clientele in Lebanon. Featuring the best three-star chefs
            in the world, you never know what will arrive on your plate the next
            time you visit us.
          </p>

        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">13 Aug. 2015</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">LB Food Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,359,999</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  The only thing I like better than talking about food is eating.
                </p>
                <footer className="blockquote-footer">
                  John Walters
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
