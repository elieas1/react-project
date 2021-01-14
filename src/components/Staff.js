import React from 'react'

function Staff() {
    return (
      <div className="container foodCard">
        <div className="row">
          <div className="foodDesc col-12 col-md-6 mt-5">
            We know that our customers' experience is greatly affected by the
            quality of our staff members, that is why we have chosen the best
            candidates for this position. Our staff will ensure that you have a
            wonderful experience, from interaction to food serving, they have it
            all covered.
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <img
              className="staffImage"
              src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
    );
}

export default Staff
