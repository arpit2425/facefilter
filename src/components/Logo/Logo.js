import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";
function Logo() {
  return (
    <div className="ma1 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{
          height: 120,
          width: 120,
          display: "flex",

          marginLeft: "20px",
        }}
      >
        <div className="Tilt-inner pa2">
          <img alt="logo" style={{ paddingTop: "5px" }} src={brain} />{" "}
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
