import React from "react";

function Navigation() {
  return (
    <div>
      <nav
        style={{
          display: "inline-block",
          justifyContent: "flex-end",
          padding: "0px",
          float: "right",
        }}
      >
        <p
          className="f3 link dim black underline pa1 pointer"
          style={{ margin: "5px" }}
        >
          Sign out
        </p>
      </nav>
    </div>
  );
}

export default Navigation;
