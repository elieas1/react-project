import React from "react";
import { Card, CardBody, CardImg, CardTitle} from "reactstrap";

function Foods() {
  return (
    <div className="col-12 col-xl-6">
      <div>
        <h3 style={{textAlign:'center',padding:'10px'}}>We strive for best taste and quality</h3>
      </div>
      <Card>
        <CardImg
          width="100%"
          src={
            "https://images.unsplash.com/photo-1464195643332-1f236b1c2255?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        />
        <CardBody>
          <p style={{fontSize:'1.1rem'}}>
            Our head chef’s energy and passion ensures every meal looks good and
            tastes delicious! This quest for perfection means that every meal
            will delight and nourish our customers.
            <br />
            <br /> No batch of meals are released before our lab technicians
            have analysed and approved samples as safe. Our dedication to food
            hygiene means that our meals are one of the safest options
            available.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Foods;
