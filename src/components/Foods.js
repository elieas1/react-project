import React from "react";

function Foods() {
  return (
    <div className="container foodCard">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="foodImage"
            src="https://images.unsplash.com/photo-1464195643332-1f236b1c2255?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="foodDesc col-12 col-md-6 mt-5 mt-md-1">
          We aim to provide our customers with supreme taste, impressive quality
          service and pleasant dining experiences, continuing to challenge
          ourselves and drawing on synergies within our group.{" "}
        </div>
      </div>
    </div>
  );
}

export default Foods;
