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
    <div className="reserveContainer container">
      <div className="reserve m-auto">
        <div className="reserveheader">Reservation</div>
        <form id="reserve" action='/home'>
          <div class="row form-group">
            <div class="col-12 col-sm mb-2">
              <strong>Name And Tel. Number</strong>
            </div>
            <div class="col-12 col-sm">
              <input class="form-control" type="text" placeholder="Name" />
            </div>
            <div class="col-12 col-sm">
              <input class="form-control" type="Tel" placeholder="Number" />
            </div>
          </div>
          <div className="row form-group">
            <div class="col-12 col-sm mb-2">
              <strong>Number of guests</strong>
            </div>
            <div class="col-12 col-sm-8" role="group">
              <input type="radio" name="number" value="1" /> 1
              <input class="ml-4" type="radio" name="number" value="2" /> 2
              <input class="ml-4" type="radio" name="number" value="4" /> 3
              <input class="ml-4" type="radio" name="number" value="4" /> 4
              <input class="ml-4" type="radio" name="number" value="4" /> 5
              <input class="ml-4" type="radio" name="number" value="4" /> 6
            </div>
          </div>
          <div class="row form-group">
            <div class="col-12 col-sm-4 mb-2">
              <strong> Section</strong>
            </div>
            <div class="col-12 col-sm">
              <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn smoking" ref={label1}>
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                    onClick={handleInput}
                  />
                  Non-Smoking
                </label>

                <label class="btn smoking" ref={label2}>
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autocomplete="off"
                    onClick={handleInput}
                  />{" "}
                  Smoking
                </label>
              </div>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-12 col-sm mb-2">
              <strong>Date and Time</strong>
            </div>
            <div class="col-12 col-sm">
              <input class="form-control" type="datetime" placeholder="Date" />
            </div>
            <div class="col-12 col-sm">
              <input class="form-control" type="datetime" placeholder="Time" />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-4">
              <button class="btn btn-primary">Reserve</button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
