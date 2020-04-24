import React from "react";
import "./FaceDetection.css";
function FaceDetection({ url, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          alt=""
          id="imageResult"
          src={url}
          width="500px"
          height="auto"
        ></img>

        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            left: box.leftCol,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceDetection;
