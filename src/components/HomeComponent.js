import React, { useRef } from "react";

import Reserve from "./reserve";
import Foods from "./Foods";
import Staff from "./Staff";
import Reviews from "./Reviews";

function Home(props) {
  return (
    <div className="container">
      <div className="Welcome">
        <h1>Welcome to Dine & Wine Restaurant</h1>
        <hr />
      </div>
      <div className="row m-auto">
        <Foods />
        <Staff />
      </div>
      <Reviews />
      <hr />
      <Reserve />
    </div>
  );
}

export default Home;
