import React from "react";
import "./imageLinkForm.css";

function imageLinkForm({ onChangeHandler, onSubmitHandler }) {
  return (
    <div>
      <p className="f3" style={{ margin: "10px" }}>
        {"Detect Face in images. Try it"}
      </p>
      <div className="center">
        <div className="form center pa3 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onChangeHandler}
          ></input>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple "
            onClick={onSubmitHandler}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default imageLinkForm;
