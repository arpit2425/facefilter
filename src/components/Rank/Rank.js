import React from "react";

function Rank(props) {
  let { name, entries } = props.detail;
  return (
    <div style={{ display: "block" }}>
      <div className="white f2">{`${name} your rank is .... `}</div>
      <div className="white f3">{entries}</div>
    </div>
  );
}

export default Rank;
