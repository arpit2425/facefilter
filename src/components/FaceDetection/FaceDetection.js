import React from "react";

function FaceDetection({ url }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="" src={url} width="500px" height="auto"></img>
      </div>
    </div>
    // <div
    //   className="center"
    //   style={{
    //     marginTop: "20px",

    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <img alt="" style={{ width: "400px", height: "250px" }} src={url} />
    // </div>
  );
}

export default FaceDetection;
