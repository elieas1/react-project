import React from "react";
import { Card, CardBody, CardImg} from "reactstrap";

function Foods() {
  return (
        <div className="col-12 col-xl-6">
      <Card>
        <CardImg
          width="100%"
          style={{ height: "40vh" }}
          src={
            "https://images.unsplash.com/photo-1464195643332-1f236b1c2255?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        />
        <CardBody>
          We know that our customers' experience is greatly affected by the
          quality of our staff members, that is why we have chosen the best
          candidates for this position. Our staff will ensure that you have a
          wonderful experience, from interaction to food serving, they have it
          all covered.
        </CardBody>
      </Card>
    </div>
  );
}

export default Foods;
