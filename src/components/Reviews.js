import React from "react";

import reviews from "./reviewsText";

function Reviews() {
  const rev = reviews.map((review,index) => {
    return (
      <div className="container" key={index}>
        <div className="row">
          <div className="col-12">
            <div className="review">
              <span className="fa fa-star star"></span>
              <span className="fa fa-star star"></span>
              <span className="fa fa-star star"></span>
              <span className="fa fa-star star"></span>
              <span className="fa fa-star star"></span>
              <br />
              {review.review} - Client
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className='first'><h1>Reviews</h1>{rev}</div>;
}

export default Reviews;
