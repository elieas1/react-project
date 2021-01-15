import React, { useRef } from "react";

const Reserve = () => {
  const label1 = useRef();
  const label2 = useRef();

  const handleInput = (e) => {
    label1.current.className = "btn smoking";
    label2.current.className = "btn smoking";
    e.target.parentNode.className = e.target.parentNode.className + " checked";
  };
  return (
    <div className="reserve">
      <div className="reserveheader">Reservation</div>
      <form
        id="reserve"
        action="/home"
        onSubmit={(e) => {
          e.preventDefault();
          alert("reservation complete");
        }}
      >
        <div className="row form-group">
          <div className="col-12 col-sm mb-2">
            <strong>Name And Tel. Number</strong>
          </div>
          <div className="col-12 col-sm">
            <input className="form-control" type="text" placeholder="Name" />
          </div>
          <div className="col-12 col-sm">
            <input className="form-control" type="Tel" placeholder="Number" />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-12 col-sm mb-2">
            <strong>Number of guests</strong>
          </div>
          <div className="col-12 col-sm-8" role="group">
            <input type="radio" name="number" value="1" /> 1
            <input className="ml-4" type="radio" name="number" value="2" /> 2
            <input className="ml-4" type="radio" name="number" value="4" /> 3
            <input className="ml-4" type="radio" name="number" value="4" /> 4
            <input className="ml-4" type="radio" name="number" value="4" /> 5
            <input className="ml-4" type="radio" name="number" value="4" /> 6
          </div>
        </div>
        <div className="row form-group">
          <div className="col-12 col-sm-4 mb-2">
            <strong> Section</strong>
          </div>
          <div className="col-12 col-sm">
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn smoking" ref={label1}>
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                  onClick={handleInput}
                />
                Non-Smoking
              </label>

              <label className="btn smoking" ref={label2}>
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                  onClick={handleInput}
                />{" "}
                Smoking
              </label>
            </div>
          </div>
        </div>

        <div className="row form-group">
          <div className="col-12 col-sm mb-2">
            <strong>Date and Time</strong>
          </div>
          <div className="col-12 col-sm">
            <input
              className="form-control"
              type="datetime"
              placeholder="Date"
            />
          </div>
          <div className="col-12 col-sm">
            <input
              className="form-control"
              type="datetime"
              placeholder="Time"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-4">
            <button className="btn btn-primary">Reserve</button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reserve;
